import express from 'express'
import { generateImg } from '../controllers/dalleController.js'

const router = express.Router()

router.post('/', generateImg)

export default router
