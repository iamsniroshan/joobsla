import dbConnect from "helpers/dbConnect";
import jobPosts from "models/jobPosts";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

async function handler(req, res) {

const {jobId} = req.query

  if (req.method !== "GET") {
    return;
  }
  
  try {
    const result = await jobPosts.find({_id:jobId});
    res.status(200).json({ "status": "success", message: "Fetch all job posts success!", "data": result });
  } catch (error) {
    res.status(500).json({ "status": "error", message: "Fetch all job posts failed!", "data": [], error });
  }

}

export default handler;
