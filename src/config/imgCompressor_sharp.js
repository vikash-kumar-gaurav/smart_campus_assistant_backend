import sharp from 'sharp'

export async function compressImg(req,res,next) {
    try {

        if (!req.imageBuffer && !req.file?.buffer && !req.files  ) {
            console.log(`compressImg: No files detected, skipping compression.`);
            return next();
        }
        
        //if we are converting only one file then we will use req.file.buffer
        if(req.imageBuffer || req.file || req.file?.buffer){
            
            
            //only compress if filesize is greater than 200 kb
            if(req.imageBuffer?.length || req.file.size > 200*1024){   //150kb
                const size_of_imageBuffer = req.imageBuffer?.length
                const compressedImg = await sharp(  req.imageBuffer || req.file.buffer) //here er use image buffer for compression image from pdf
                .resize({width:1080}) //resize to 1080 width
                .toFormat('avif',{quality:90}) //we compress the image quality
                .toBuffer(); 
                if(req.imageBuffer){
                    req.imageBuffer = compressedImg; //here we are replacing the image from its original image
                } else {
                    req.file.buffer = compressedImg; //here we are replacing the image from its original image
                }
                
                console.log(`Original size: ${size_of_imageBuffer || req.file.size}, Compressed size: ${compressedImg.length}`);

                
            }
            return next()
        }

        //if it is multifile then we will apply loop over it
        if(req.files && Array.isArray(req.files) && req.files.length > 0) {
            await Promise.all(
                req.files.map(async(file,index) => {
                    //compress if file size is greater than 200kb
                    if(file.size > 200 *1024){
                        const compressedImg = await sharp(file.buffer)
                        .resize({width:1080})
                        .toFormat('avif',{quality:90})
                        .toBuffer();
                        req.files[index].buffer = compressedImg
                        console.log(`Original size: ${file.size}, Compressed size: ${compressedImg.length}`);

                    }
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

