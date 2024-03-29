import dbConnect from "helpers/dbConnect";
import jobPosts from "models/jobPosts";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import mongoose from "mongoose";

async function handler(req, res) {

  const { jobId } = req.query

  if (req.method !== "GET") {
    return;
  }


  try {
    const result = await jobPosts.aggregate([
      { "$match": { _id: mongoose.Types.ObjectId(jobId) } },
      {
        $lookup: {
          from: 'userinfo',
          localField: 'userId',
          foreignField: 'userId',
          as: 'userDetail'
        }
      },
      {
        $project: {
          
          'userDetail.experience': 1,
          'userDetail.userInfo': 1,
          'userDetail.profile': 1,
          'jobDescription':1,
          'jobApplications':1,
          'jobSalary':1,
          'experience': 1,
          'workingHours': 1,
          'jobDetail': 1,
          'userId': 1
        }
      }]).exec()
    res.status(200).json({ "status": "success", message: "Fetch job by id success!", "data": result });
  } catch (error) {
    res.status(500).json({ "status": "error", message: "Fetch job by id failed!", "data": [], error });
  }

}

export default handler;
