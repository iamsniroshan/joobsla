import mongoose from 'mongoose'


const userInfoSchema = new mongoose.Schema({ 
    cv : {
        fileUrl : {
            type: String
          }, 
        fileName : {
            type: String
          }
    }, 
    lastUpdated : {
        type: String
      }, 
    profile : {
        imgUrl : {
            type: String
          }, 
        imgName : {
            type: String
          }
    }, 
    salary : {
        salaryExpectation : {
            type: String
          }, 
        currency : {
            type: String
          }
    }, 
    userId : {
        type: String
      }, 
    userInfo : {
        firstName : {
            type: String
          }, 
        lastName : {
            type: String
          }, 
        emailAddress : {
            type: String
          }, 
        salaryExpectation :{
            type: String
          }, 
        dateOfBirth : {
            type: String
          }, 
        gender : {
            type: String
          }, 
        aboutYou :{
            type: String
          }
    }
});

export default mongoose.models.userInfo || mongoose.model('userInfo', userInfoSchema, 'userinfo')
