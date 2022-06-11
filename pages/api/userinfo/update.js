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
  var ObjectId = require("mongodb").ObjectId;

  try {
    const result = await db.collection("users")
    .findOneAndUpdate(
      { _id: new ObjectId(userId) },
      { $set: buildData, $currentDate: { lastUpdated: true } },
      { upsert: true }
    );
    res.status(200).json({ "status": "success", message: "user info update success!", "data": result });
  } catch (err) {
    res.status(500).json({ "status": "error", message: "user info update failed!", "data": err });
  }

  //client.close();
}

export default handler;
