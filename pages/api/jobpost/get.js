import { connectToDatabase } from "helpers/db";
import { getSession } from "next-auth/client";

async function handler(req, res) {
  if (req.method !== "GET") {
    return;
  }

  const session = await getSession({ req: req });
  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }

  const client = await connectToDatabase();
  const db = client.db();

  const userId = session.user.id;
  //var ObjectId = require("mongodb").ObjectId;

  try {
    const result = await (db.collection("jobPosts").find()).toArray();
    res.status(200).json({ "status": "success", message: "Fetch all job posts success!", "data": result });
  } catch (err) {
    res.status(500).json({ "status": "error", message: "Fetch all job posts failed!", "data": err });
  }

  client.close();
}

export default handler;
