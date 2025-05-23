
import { pdf } from 'pdf-to-img'

export async function pdfToimg(req,res,next) {
    try {
        if(!req.file || !req.file?.buffer){
            return res.status(404).json({
                msg:"No Pdf found",
                success:false
            })
        }
        
        

        const pdfBuffer = req.file.buffer
        //convert pdf to img
        const document = await pdf(pdfBuffer,{
            scale:2, //for better resolution
        })

        const imageBuffer = await document.getPage(1); 
        console.log("imageBuffer is from pdf2pic ",imageBuffer);
        
        req.imageBuffer = imageBuffer
        return next()


    } catch (error) {
        console.log("error from pdf-to-img",error);
        return res.status(500).json({
            msg:"Server error try later",
            success:false
        })
        
    }
}

