import Router from 'express'
import validateToken from '../middleware/userAuth.js'
import { compressImg } from '../config/imgCompressor_sharp.js'
import uploadImage from '../config/cloudinary.js'
import { Imgupload } from '../config/multer.js'
import { createSuggestionController, deleteComplaneController, getAllComplain_SuggestionController, getYourComplainController } from '../controller/complain_suggestion.controller.js'

const router = Router()

router.post('/complain-suggestion', validateToken,Imgupload.array('complainImg',5),compressImg,uploadImage,createSuggestionController)
router.delete('/drop-complain',validateToken,deleteComplaneController)
router.get('/my-complain',validateToken,getYourComplainController)
router.get('/all-complains',validateToken,getAllComplain_SuggestionController)
export default router