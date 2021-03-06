import dbConnect from "helpers/dbConnect";
import jobPosts from "models/jobPosts";
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

  jobPosts.create(buildData, function (err, result) {
    if (err) {
      res
        .status(500)
        .json({
          status: "error",
          message: "Job post creation failed!",
          data: err,
        });
    }
    res
      .status(201)
      .json({
        status: "success",
        message: "Job post creation success!",
        data: result,
      });
  });

}

export default handler;
