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
  },
  applicationStatus: {
    type: String,
    default: 'applied'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

const JobPostSchema = new mongoose.Schema({
  jobDetail: {
    type: jobDetailSchema,
    required: false,
  },
  jobApplications: {
    type: [jobApplicationsSchema],
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

// Middleware to update timestamps when document is updated
jobApplicationsSchema.pre('findOneAndUpdate', function (next) {
  this._update.updatedAt = new Date();
  next();
});


export default mongoose.models.jobPosts || mongoose.model('jobPosts', JobPostSchema, 'jobpost')