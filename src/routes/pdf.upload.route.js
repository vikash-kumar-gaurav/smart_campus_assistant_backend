import Router from 'express'
import  { Pdfupload } from '../config/multer.js'
import { uploadPdfs } from '../config/B2_db.js'
import { createpdf, getpdfnameController, getpdflinkController } from '../controller/pdfs.controller.js'
import validateToken from '../middleware/userAuth.js'

const router = Router()

router.post('/upload-pdf',validateToken,Pdfupload.single('pdf'),uploadPdfs,createpdf)
router.get('/get-pdf',validateToken,getpdfnameController)
router.get('/download-pdf',validateToken,getpdflinkController)
export default router;