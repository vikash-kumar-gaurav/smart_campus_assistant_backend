import sharp from 'sharp'

export async function compressImg(req,res,next) {
    try {

        
        //if we are converting only one file then we will use req.file.buffer
        if(req.file || req.file?.buffer){

            const compressedImg = await sharp(req.file.buffer)
            .resize({width:1080}) //resize to 1080 width
            .toFormat('avif',{quality:90}) //we compress the image quality
            .toBuffer(); 
            req.file.buffer = compressedImg; //here we are replacing the image from its original image
            return next()
        }

        //if it is multifile then we will apply loop over it
        if(req.files && Array.isArray(req.files) && req.files.length > 0) {
            await Promise.all(
                req.files.map(async(file,index) => {
                    const compressedImg = await sharp(file.buffer)
                    .resize({width:1080})
                    .toFormat('avif',{quality:90})
                    .toBuffer();
                    req.files[index].buffer = compressedImg
                })
            )
            return next()
        }

        //if there is no file we will skip the compression and move to next function or middleware
        if(!req.file?.buffer || !req.file){
            console.log(`compressImg: No files detected, skipping compression.`);
            return next();
            
        }
    } catch (error) {
        console.log(`error from compressImg ${error}`);
        return res.status(500).json({
            msg:"Server error try laater",
            success:false
        })
        
    }
}

//image with watermark file

// import sharp from 'sharp';
// import fs from 'fs';
// import path from 'path';

// export async function compressImg(req, res, next) {
//     try {
//         if (!req.file || !req.file.buffer) {
//             console.log(`compressImg: No file detected, skipping compression.`);
//             return next();
//         }

//         // Load watermark image from disk
//         const watermarkPath = path.join(process.cwd(), 'public/watermark.png');
//         const watermark = await sharp(watermarkPath)
//             .resize({ width: 150 }) // resize watermark if needed
//             .png()
//             .toBuffer();

//         // Composite watermark onto the uploaded image
//         const compressedImg = await sharp(req.file.buffer)
//             .resize({ width: 1080 })
//             .jpeg({ quality: 20 })
//             .composite([{
//                 input: watermark,
//                 gravity: 'southeast', // place in bottom-right corner
//                 blend: 'overlay',
//             }])
//             .toBuffer();

//         req.file.buffer = compressedImg;
//         next();
//     } catch (error) {
//         console.log(`error from compressImg: ${error}`);
//         return res.status(500).json({
//             msg: "Server error, try again later",
//             success: false
//         });
//     }
// }
