import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connect from './db/connect.js'
import route from './routes/index.js'

dotenv.config()

const app = express()
const PORT = process.env.NODE_ENV || 5000

app.use(cors())
app.use(express.json({ limit: '50kb' }))

app.get('/', (req, res) => {
  res.send('Hello from DALL-E')
})

route(app)

const startServer = async () => {
  try {
    connect()
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT} port`)
    })
  } catch (error) {
    console.log(error)
  }
}

startServer()