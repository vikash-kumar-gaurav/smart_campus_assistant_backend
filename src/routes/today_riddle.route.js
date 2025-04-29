import Router from 'express'
import { createRiddleController, seeTodayRiddleController } from '../controller/today_riddle.controller.js'
import validateToken from '../middleware/userAuth.js'
const router= Router()

router.post('/create-riddle',validateToken,createRiddleController)
router.get('/riddle',seeTodayRiddleController)

export default router