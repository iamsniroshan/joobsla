import { connectToDatabase } from "helpers/db";
import { getSession } from "next-auth/react";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const data = req.body;

  const session = await getSession({ req: req });
  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }

  const client = await connectToDatabase();
  const db = client.db();

  const userId = session.user.id;
  const buildData = { ...data, userId };
  //var ObjectId = require("mongodb").ObjectId;

  try {
    const result = await db.collection("jobPosts").insertOne(buildData);
    res.status(201).json({ "status": "success", message: "Job post creation success!", "data": result });
  } catch (err) {
    res.status(500).json({ "status": "error", message: "Job post creation failed!", "data": err });
  }

  client.close();
}

export default handler;
