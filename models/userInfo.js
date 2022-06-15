import mongoose from 'mongoose'


const userInfoSchema = new mongoose.Schema({ 
    cv : {
        fileUrl : {
            type: String,
            default: ''
          }, 
        fileName : {
            type: String,
            default: ''
          }
    }, 
    profile : {
        imgUrl : {
            type: String,
            default: ''
          }, 
        imgName : {
            type: String,
            default: ''
          }
    }, 
    salary : {
        salaryExpectation : {
            type: String,
            default: ''
          }, 
        currency : {
            type: String,
            default: ''
          }
    }, 
    userId : {
        type: String,
        default: ''
      }, 
    userInfo : {
        firstName : {
            type: String,
            default: ''
          }, 
        lastName : {
            type: String,
            default: ''
          }, 
        emailAddress : {
            type: String,
            default: ''
          }, 
        salaryExpectation :{
            type: String,
            default: ''
          }, 
        dateOfBirth : {
            type: String,
            default: ''
          }, 
        gender : {
            type: String,
            default: ''
          }, 
        aboutYou :{
            type: String,
            default: ''
          }
    },
    experience: {
      type: Array,
      default: []
    },
}, { timestamps: true });

export default mongoose.models.userInfo || mongoose.model('userInfo', userInfoSchema, 'userinfo')
