import dbConnect from "helpers/dbConnect";
import jobPosts from "models/jobPosts";
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
  const newFilter = {'jobDetail.jobCategory.id':filters.jobCategory ? filters.jobCategory.id : '' }
  console.log(newFilter)
  // const posts = await jobPosts.find(newFilter).limit(limit * 1).skip((page - 1) * limit).exec();
  // const ids = posts.map(el => mongoose.Types.ObjectId(el._id));
  jobPosts.aggregate([
    { "$match": newFilter },
    {
      $lookup: {
        from: 'userinfo',
        localField: 'userId',
        foreignField: 'userId',
        as: 'userDetail'
      }
    }], function (err, result) {
      if (err) {
        res.status(500).json({ status: "error", message: "Fetch all job posts failed!", data: [], err });
      }
      res.status(200).json({ status: "success", message: "Fetch all job posts success!", data: result });
    });
}

export default handler;
