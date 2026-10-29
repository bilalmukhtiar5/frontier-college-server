import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app = express()

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
}))

app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Frontier College API is running',
  })
})

export default app