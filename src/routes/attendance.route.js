import Router from 'express'
import { markAttendanceController, markBunchAttendanceController, seeAttendanceControllerr } from '../controller/attendance.controller.js'
import validateToken from '../middleware/userAuth.js'
const router = Router()

router.post('/mark-attendance',markAttendanceController)
router.get('/get-attendance',validateToken,seeAttendanceControllerr)
router.post('/mark-bunch-attendance',validateToken,markBunchAttendanceController)
export default router;