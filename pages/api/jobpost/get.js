import dbConnect from "helpers/dbConnect";
import jobPosts from "models/jobPosts";
import { getSession } from "next-auth/react";

async function handler(req, res) {
  if (req.method !== "GET") {
    return;
  }

  const session = await getSession({ req: req });
  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }
  await dbConnect()

  const userId = session.user.id;

  try {
    const result = await jobPosts.aggregate([
      { "$match": { userId: userId } },
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
    res.status(200).json({ "status": "success", message: "Fetch all job posts success!", "data": result });
  } catch (error) {
    res.status(500).json({ "status": "error", message: "Fetch all job posts failed!", "data": [], error });
  }

}

export default handler;
