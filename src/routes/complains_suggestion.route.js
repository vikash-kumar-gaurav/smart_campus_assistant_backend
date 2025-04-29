import Router from 'express'
import validateToken from '../middleware/userAuth.js'
import { compressImg } from '../config/imgCompressor_sharp.js'
import uploadImage from '../config/cloudinary.js'
import upload from '../config/multer.js'
import { createSuggestionController, deleteComplaneController } from '../controller/complain_suggestion.controller.js'

const router = Router()

router.post('/complain-suggestion', validateToken,upload.array('complainImg',5),compressImg,uploadImage,createSuggestionController)
router.delete('/drop-complain',validateToken,deleteComplaneController)
export default router