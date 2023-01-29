import express from 'express'
import { getAllPosts, savePost } from '../controllers/postController.js'

const router = express.Router()

router.get('/', getAllPosts)
router.post('/', savePost)

export default router
