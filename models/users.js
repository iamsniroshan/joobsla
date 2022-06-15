import mongoose from 'mongoose'

const userInfoSchema = new mongoose.Schema({ 
    role : {
        type: String
      },
    email : {
        type: String
      }, 
    password : {
        type: String
      }, 
    image :{
        type: String
      }
}, { timestamps: true });

export default mongoose.models.users || mongoose.model('users', userInfoSchema, 'users')
