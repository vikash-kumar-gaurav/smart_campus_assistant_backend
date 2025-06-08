import Router from 'express'
import { markAttendanceController, markBunchAttendanceController, seeAttendanceControllerr, StudentAttendenceController } from '../controller/attendance.controller.js'
import validateToken from '../middleware/userAuth.js'
const router = Router()

router.post('/mark-attendance',markAttendanceController)
router.get('/get-attendance',validateToken,seeAttendanceControllerr)
router.post('/mark-bunch-attendance',validateToken,markBunchAttendanceController)
router.get('/my-attendance',validateToken,StudentAttendenceController)
export default router;