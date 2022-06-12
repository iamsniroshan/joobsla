import dbConnect from "helpers/dbConnect";
import userInfo from "models/userInfo";
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

  await dbConnect();

  const userId = session.user.id;
  const buildData = { ...data, userId };

  userInfo.create(buildData, function (err, result) {
    if (err) {
      res
        .status(500)
        .json({
          status: "error",
          message: "User Info  creation failed!",
          data: err,
        });
    }
    res
      .status(201)
      .json({
        status: "success",
        message: "User Info creation success!",
        data: result,
      });
  });

}

export default handler;
