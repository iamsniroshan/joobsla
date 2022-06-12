import { connectToDatabase } from "helpers/db";
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

  const client = await connectToDatabase();
  const db = client.db();

  const userId = session.user.id;
  var ObjectId = require("mongodb").ObjectId;

  try {
    const result = await (db.collection("users").find({"_id" : ObjectId(userId),select:{"password":1}})).toArray();
    res.status(200).json({ "status": "success", message: "Fetch user info success!", "data": result });
  } catch (err) {
    res.status(500).json({ "status": "error", message: "Fetch all job posts failed!", "data": err });
  }

  client.close();
}

export default handler;
