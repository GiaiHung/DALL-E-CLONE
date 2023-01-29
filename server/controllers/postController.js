import { v2 as cloudinary } from 'cloudinary'

const cloudinaryConfig = {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
}

if (process.env.NODE_ENV === 'production') {
  cloudinaryConfig.secure = true
}

cloudinary.config(cloudinaryConfig)

const getAllPosts = async (req, res) => {}

const savePost = async (req, res) => {}

export { getAllPosts, savePost }
