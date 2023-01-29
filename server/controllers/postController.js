import { v2 as cloudinary } from 'cloudinary'
import * as dotenv from 'dotenv'
import Post from '../models/Post.js'

dotenv.config()

const cloudinaryConfig = {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
}

if (process.env.NODE_ENV === 'production') {
  cloudinaryConfig.secure = true
}

cloudinary.config(cloudinaryConfig)

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    res.status(200).json({ success: true, data: { posts } })
  } catch (error) {
    res.status(500).json({ success: false, data: { message: error.message } })
  }
}

const savePost = async (req, res) => {
  try {
    const { name, prompt, photo } = req.body
    const photoUrl = await cloudinary.uploader.upload(photo)
    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    })
    res.status(201).json({ success: true, data: { post: newPost } })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, data: { message: error.message } })
  }
}

export { getAllPosts, savePost }
