import dbConnect from "helpers/dbConnect";
import userInfo from "models/userInfo";
import mongoose from "mongoose";
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

  await dbConnect();

  const userId = session.user.id;
  const id = mongoose.Types.ObjectId(userId)

  userInfo.find({ userId: id }, function (err, result) {
    if (err) {
      res
      .status(500)
      .json({
        status: "error",
        message: "Fetch all job posts failed!",
        data: [],
        err
      });
      return;
    }
    res
    .status(200)
    .json({
      status: "success",
      message: "Fetch user info success!",
      data: result,
    });
  });
}

export default handler;
