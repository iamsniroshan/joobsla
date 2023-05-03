import dbConnect from "helpers/dbConnect";
import jobPosts from "models/jobPosts";
import mongoose from "mongoose";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const { filters, limit, page, query } = req.body;

  await dbConnect();
  
  const filterObj = { 
    'jobDetail.jobCategory.id': filters.jobCategory ? filters.jobCategory.id : '',
    'jobDetail.jobType.value': filters.jobType ? filters.jobType.value : '' 
  }
  //Filter all falsy values ( "", 0, false, null, undefined )
  const newFilter = Object.entries(filterObj).reduce((a,[k,v]) => (v ? (a[k]=v, a) : a), {})
   const posts = await jobPosts.find(newFilter).limit(limit * 1).skip((page - 1) * limit).exec();
   const ids = posts.map(el => mongoose.Types.ObjectId(el._id));
   try {
    const result = await  jobPosts.aggregate([
      { "$match": { _id: { $in: ids}}},
      {
        $lookup: {
          from: 'userinfo',
          localField: 'userId',
          foreignField: 'userId',
          as: 'userDetail'
        }
      }]).exec()
      res.status(200).json({ status: "success", message: "Fetch all job posts success!", data: result });
   } catch (error) {
    res.status(500).json({ status: "error", message: "Fetch all job posts failed!", data: [], error });
   }
   
}

export default handler;
