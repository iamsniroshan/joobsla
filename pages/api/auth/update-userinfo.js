import { connectToDatabase } from "helpers/db";
import { getSession } from "next-auth/client";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;
  console.log(data);
  //const { email, password, userRole } = data;

  const session = await getSession({ req: req });
  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }

  const client = await connectToDatabase();
  const db = client.db();

  const userId = session.user.id;
  var ObjectId = require('mongodb').ObjectId;
  console.log(session.user);
  const result = await db
    .collection("users")
    .findOneAndUpdate(
      { _id: new ObjectId(userId) },
      { $set: data, $currentDate: { lastUpdated: true } },
      { upsert: true }
    );

  res.status(201).json({ message: "Created user!" });
  client.close();
}

export default handler;
