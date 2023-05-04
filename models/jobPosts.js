import mongoose from 'mongoose'

const jobDetailSchema = new mongoose.Schema({
  jobTitle: {
    type: String
  },
  jobType: {
    value: {
      type: String
    },
    label: {
      type: String
    }
  },
  jobCategory: {
    label: {
      type: String
    },
    value: {
      type: String
    },
    id: {
      type: String
    }
  },
  expirationDate: {
    type: String
  }
})

const jobApplicationsSchema = new mongoose.Schema({
  applicationUserId: {
    type: String
  },
  applicationUserNote: {
    type: String
  }
})

const JobPostSchema = new mongoose.Schema({
  jobDetail: {
    type: jobDetailSchema,
    required: false,
  },
  jobApplications: {
    type: [jobApplicationsSchema],
    required: false,
    default: []
  },
  jobDescription: {
    longDesc: {
      type: String
    },
    sortDesc: {
      type: String
    }
  },
  jobSalary: {
    minAmount: {
      type: String
    },
    maxAmount: {
      type: String
    },
    currency: {
      type: String
    }
  },
  experience: {
    number: {
      type: String
    },
    numberTag: {
      type: String
    }
  },
  workingHours: {
    hour: {
      type: String
    },
    hourTag: {
      type: String
    }
  },
  userId: {
    type: String
  }
}, { timestamps: true })


export default mongoose.models.jobPosts || mongoose.model('jobPosts', JobPostSchema, 'jobpost')