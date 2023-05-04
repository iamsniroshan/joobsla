import dbConnect from "helpers/dbConnect";
import jobPosts from "models/jobPosts";
import { getSession } from "next-auth/react";

async function handler(req, res) {
  if (req.method !== "GET") {
    return;
  }
  const data = req.body;

  const session = await getSession({ req: req });

  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }

  await dbConnect();

  const userId = session.user.id;
  try {
    const result = await jobPosts.find({"jobApplications.applicationUserId": userId})
    res.status(201).json({ status: "success", message: "Get all Applied job list success!", data: result, });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Get all Applied job list failed!", data: error });
  }
}

export default handler;
