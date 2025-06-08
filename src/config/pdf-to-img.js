import { pdf } from 'pdf-to-img'
import sharp from 'sharp'
import { fileTypeFromBuffer } from 'file-type'

export async function pdfToimg(req, res, next) {
    try {
        if (!req.file || !req.file?.buffer) {
            return res.status(404).json({
                msg: "No Pdf found",
                success: false
            });
        }

        const pdfBuffer = req.file.buffer;

        // Convert PDF to image
        const document = await pdf(pdfBuffer, { scale: 2 });
        let imageBuffer = await document.getPage(1);

        // Check and convert to PNG if needed
        const type = await fileTypeFromBuffer(imageBuffer);
        console.log("Image format from PDF page:", type);

        if (!type || !type.mime.startsWith('image/')) {
            console.log("❗ Not a standard image, converting to PNG before compression.");
            imageBuffer = await sharp(imageBuffer).toFormat('png').toBuffer();
        }

        req.imageBuffer = imageBuffer;
        return next();

    } catch (error) {
        console.log("error from pdf-to-img", error);
        return res.status(500).json({
            msg: "Server error, try later",
            success: false
        });
    }
}
