import { connectToDatabase } from "helpers/db";
import { getSession } from "next-auth/client";

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
  var ObjectId = require("mongodb").ObjectId;

  try {
    db.collection("jobPosts").insertOne(buildData);
    res.status(201).json({ message:buildData });
  } catch (error) {
    res.status(400).json({ message: "Created failed!", error });
  }
  client.close();
}

export default handler;
