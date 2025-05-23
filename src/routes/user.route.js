import { Router } from "express";
import { bulkregisterController, createUserController, findUserController, loginController } from '../controller/user.controller.js'
import  { Imgupload } from '../config/multer.js'
import { compressImg } from "../config/imgCompressor_sharp.js";
import uploadImage from "../config/cloudinary.js";
import validateToken, { checkToken } from "../middleware/userAuth.js";
const router = Router()

router.post('/register',Imgupload.single('profile_pic'),compressImg,uploadImage,createUserController)
router.get('/get-all-student',findUserController)
router.post('/login',loginController)
router.post('/register-inbulk',bulkregisterController)
router.get('/check-me', checkToken)
export default router;