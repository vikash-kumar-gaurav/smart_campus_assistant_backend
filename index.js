import express, { urlencoded } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import rateLimit from 'express-rate-limit'
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
import lostfoundRouter  from './src/routes/Lostfound.route.js'
import redis from './src/config/redis.config.js'

const PORT = process.env.PORT || 3000


async function testConnection() {
  try {
    await redis.ping();
    console.log('✅ Redis PING successful');
  } catch (err) {
    console.error('❌ Redis PING failed:', err);
  }
}
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 15 minutes
  max: 100,                 // Limit each IP to 100 requests per `window`
  message: 'Too many requests from this IP, please try again after 10 minutes.',
  standardHeaders: true,   // Return rate limit info in `RateLimit-*` headers
  legacyHeaders: false,    // Disable `X-RateLimit-*` headers
});

testConnection();

const app = express()
app.use(cookieParser())
app.use(limiter)
app.use(express.json({limit:"15kb"}))
app.use(urlencoded({extended:true, limit:"16kb"}))
app.use(cors({
  origin:process.env.DOMAIN,
  credentials: true,
  methods: ["GET", "POST"]
}))
app.use(helmet())

connectToMongoDB()

.then(() => {
  app.listen(PORT,'0.0.0.0',() => {
    console.log(`app is running on the port no ${PORT}`);
    
  })
})

app.get('/',(req,res) => {
  return res.json({
    msg:"system chalu hai "
  })
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
app.use(lostfoundRouter)