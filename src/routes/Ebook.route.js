import Router from 'express'
import { pdfToimg } from '../config/pdf-to-img.js'
import uploadImage from '../config/cloudinary.js'
import { uploadPdfs } from '../config/B2_db.js'
import { createEbookController, getAllEbook, getEbookLink } from '../controller/Ebook.controller.js'
import  { Pdfupload } from '../config/multer.js'
import validateToken from '../middleware/userAuth.js'


const router = Router()
router.post('/ebook-create',validateToken,Pdfupload.single('pdf'),pdfToimg,uploadImage,uploadPdfs,createEbookController)//not completed have to complete
router.get('/all-ebook',validateToken,getAllEbook)
router.post('/get-Ebook',validateToken,getEbookLink)
export default router