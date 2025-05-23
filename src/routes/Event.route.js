import Router from 'express'
import { createEventController, deleteEventController, getAllEventsController, updateEvenController } from '../controller/Event.controller.js'
import validateToken from '../middleware/userAuth.js'
import {Imgupload} from '../config/multer.js'
import uploadImage from '../config/cloudinary.js'
import { compressImg } from '../config/imgCompressor_sharp.js'

const router = Router()

router.post('/create-event',validateToken,Imgupload.array('image_url'),compressImg,uploadImage,createEventController)
router.get('/events',getAllEventsController)
router.delete('/delete-event',validateToken,deleteEventController)
router.put('/update-event',validateToken,updateEvenController)


export default router