import dbConnect from "helpers/dbConnect";
import jobPosts from "models/jobPosts";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import mongoose from "mongoose";

async function handler(req, res) {

  const { jobPostId } = req.query

  if (req.method !== "DELETE") {
    return;
  }

  const session = await getSession({ req: req });
  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }

  try {
    const result = await jobPosts.deleteOne({ _id: jobPostId });
    res.status(200).json({ "status": "success", message: "Fetch all job posts success!", "data": result });
  } catch (error) {
    res.status(500).json({ "status": "error", message: "Fetch all job posts failed!", "data": [], error });
  }

}

export default handler;
