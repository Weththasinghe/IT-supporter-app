/* eslint-disable no-unused-vars */
import express from 'express'
import colors from 'colors'
import cors from 'cors';
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import supportRouter from './routes/supportersRoutes.js'

const app = express()
dotenv.config()  

connectDB()
app.use(express.json())  
   
app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}));

app.use('/api',cors(), supportRouter)

const PORT = process.env.PORT || 5000  

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)      