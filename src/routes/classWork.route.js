import  Router  from "express";
import  { Imgupload } from "../config/multer.js";
import { compressImg } from "../config/imgCompressor_sharp.js";
import uploadImage from "../config/cloudinary.js";
import { createClassworkController, getclassWorkController } from "../controller/classwork.controller.js";
import validateToken from '../middleware/userAuth.js'

const router = Router();

router.post('/classwork',validateToken,Imgupload.array('classWork_URI',10),compressImg,uploadImage,createClassworkController)
router.get('/get-classwork',getclassWorkController)


export default router;