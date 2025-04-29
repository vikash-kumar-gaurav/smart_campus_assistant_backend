import cloudinary from 'cloudinary';
import streamifier from 'streamifier';

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'your-cloud-name',
    api_key: process.env.CLOUDINARY_API_KEY || 'your-api-key',
    api_secret: process.env.CLOUDINARY_API_SECRET || 'your-api-secret',
});

const uploadImage = async (req, res, next) => {
    console.log("Reached cloudinary upload");

    try {
       

        // Wrap cloudinary stream in a Promise
        const uploadFromBuffer = (buffer) => {
            return new Promise((resolve, reject) => {
                const stream = cloudinary.v2.uploader.upload_stream(
                    { folder: 'uploads' },
                    (error, result) => {
                        if (error) {
                            console.error("Cloudinary upload error:", error);
                            return reject(error);
                        }
                        if (!result || !result.secure_url) {
                            return reject(new Error("Failed to retrieve secure URL from Cloudinary"));
                        }
                        resolve(result);
                    }
                );
        
                streamifier.createReadStream(buffer).pipe(stream);
            });
        };

        // Await the result from the stream
        //if it is single file
        if(req.file && req.file.buffer){
            const url = await uploadFromBuffer(req.file.buffer);
            req.cloudinaryUrls = {
                URL:url.secure_url,
                public_id:url.public_id
            } //although it is a single file lets make it array to be consistency
            return next();

            //url returns public_id, also save it in db because if you want to delete it you can delete with with public_id

        }

        //for multi file images
        if(req.files && Array.isArray(req.files) && req.files.length > 0){
            const uploadPromises = req.files.map(file => uploadFromBuffer(file.buffer).then(result => ({
                URL:result.secure_url,
                public_id:result.public_id //this id will ued to delete the image on the cloudinary
            })))
            const urls = await Promise.all(uploadPromises)
            req.cloudinaryUrls = urls;
            return next()
        }
        //if no files are found run the next function or method
        if (!req.file || !req.file?.buffer) {
            console.log(`no image is found`);
            
             return next() //res.status(400).json({ error: 'No image file provided' });
        }

    } catch (error) {
        console.error("Cloudinary upload error:", error.message);
        return res.status(500).json({
            msg: "Upload failed, try again later",
            success: false,
        });
    }
};

export default uploadImage;
