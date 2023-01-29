import dbConnect from "helpers/dbConnect";
import jobPosts from "models/jobPosts";
import { getSession } from "next-auth/react";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const { filters, limit, page, query } = req.body;

  const session = await getSession({ req: req });
  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }
  await dbConnect();

  const userId = session.user.id;

  try {
    // execute query with page and limit values
    const posts = await jobPosts
      .find(filters)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    // return response with posts, total pages, and current page
    res
      .status(200)
      .json({
        status: "success",
        message: "Fetch all job posts success!",
        data: posts,
      });
  } catch (err) {
    res
      .status(500)
      .json({
        status: "error",
        message: "Fetch all job posts failed!",
        data: [],
        err,
      });
  }
}

export default handler;
