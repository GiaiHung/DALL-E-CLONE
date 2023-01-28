import mongoose from 'mongoose'

const PostSchema = mongoose.Schema({
  name: { type: 'string', required: true },
  prompt: { type: 'string', required: true },
  photo: { type: 'string', required: true },
})

export default mongoose.model('post', PostSchema)
