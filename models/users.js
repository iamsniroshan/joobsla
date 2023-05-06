import mongoose from 'mongoose'

const userInfoSchema = new mongoose.Schema({
  role: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  }
}, { timestamps: true });

export default mongoose.models.users || mongoose.model('users', userInfoSchema, 'users')
