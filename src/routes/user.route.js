import { Router } from "express";
import { bulkregisterController, createUserController, findUserController, loginController } from '../controller/user.controller.js'
import upload from '../config/multer.js'
import { compressImg } from "../config/imgCompressor_sharp.js";
import uploadImage from "../config/cloudinary.js";
const router = Router()

router.post('/register',upload.single('profile_pic'),compressImg,uploadImage,createUserController)
router.get('/get-all-student',findUserController)
router.post('/login',loginController)
router.post('/register-inbulk',bulkregisterController)
export default router;