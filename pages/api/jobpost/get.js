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
    const result = await jobPosts.find({});
    res.status(200).json({ "status": "success", message: "Fetch all job posts success!", "data": result });
  } catch (error) {
    res.status(500).json({ "status": "error", message: "Fetch all job posts failed!", "data": [], error });
  }

}

export default handler;
