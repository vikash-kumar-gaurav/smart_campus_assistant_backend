import Router from 'express'
import validateToken from '../middleware/userAuth.js'
import { createLostfoundController, getlostItemsController } from '../controller/Lostfound.controllerr.js'
import { Imgupload } from '../config/multer.js'
import { compressImg } from '../config/imgCompressor_sharp.js'
import uploadImage from '../config/cloudinary.js'

const router = Router()

router.post('/new-lostfound',validateToken,Imgupload.array('item_image'),compressImg,uploadImage,createLostfoundController)
router.get('/lost-items',getlostItemsController)


export default router