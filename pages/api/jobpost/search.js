import dbConnect from "helpers/dbConnect";
import jobPosts from "models/jobPosts";
import userInfo from "models/userInfo";
import { getSession } from "next-auth/react";
import mongoose from "mongoose";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const { filters, limit, page, query } = req.body;

  const session = await getSession({ req: req });
  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }
  await dbConnect();
  try {
    const userId = session.user.id;
    const id = mongoose.Types.ObjectId(userId)
    const userInfoData = await userInfo.find({ userId: id }).exec();

    const posts = await jobPosts.find(filters).limit(limit * 1).skip((page - 1) * limit).exec();
    
    res.status(200).json({ status: "success", message: "Fetch all job posts success!", data: posts });
  } catch (err) {
    res.status(500).json({ status: "error", message: "Fetch all job posts failed!", data: [], err });
  }
}

export default handler;
