import Routes from 'express'
import { createSubjectController, getAllSubjectController } from '../controller/subject.controller.js'
import validateToken from '../middleware/userAuth.js'
const router = Routes()

router.post('/subject-create',validateToken,createSubjectController)
router.get('/get-allsubjects',validateToken,getAllSubjectController)





export default router;