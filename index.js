import express, { urlencoded } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
dotenv.config()
import connectToMongoDB from './src/config/MongoDb.connection.js'
import userRouter from './src/routes/user.route.js'
import subjectRouter from './src/routes/subject.route.js'
import attendanceRouter from './src/routes/attendance.route.js'
import classworkRouter from './src/routes/classWork.route.js'
import complainRouter from './src/routes/complains_suggestion.route.js'
import riddleRouter from './src/routes/today_riddle.route.js'
import pdfuploadRouter from './src/routes/pdf.upload.route.js'
import eventRouter from './src/routes/Event.route.js'
import ebookRouter from './src/routes/Ebook.route.js'
const PORT = process.env.PORT || 3000




const app = express()
app.use(cookieParser())
app.use(express.json({limit:"15kb"}))
app.use(urlencoded({extended:true, limit:"16kb"}))
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ["GET", "POST"]
}))
app.use(helmet())
connectToMongoDB()

.then(() => {
  app.listen(PORT,() => {
    console.log(`app is running on the port no ${PORT}`);
    
  })
})

app.get('/',() => {
  return {
    "data":"helloji s/m chalu hai"
  }
})
app.use(userRouter)
app.use(subjectRouter)
app.use(attendanceRouter)
app.use(classworkRouter)
app.use(complainRouter)
app.use(riddleRouter)
app.use(pdfuploadRouter)
app.use(eventRouter)
app.use(ebookRouter)