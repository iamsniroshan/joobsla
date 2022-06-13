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
  delete data._id
  const userId = session.user.id;
  let result = await userInfo.findOneAndUpdate({userId: userId}, data, {
    new: true
  });
  if(result.err) res.status(500).json({ "status": "error", message: "user info update failed!", "data": err });
  res.status(200).json({ "status": "success", message: "user info update success!", "data": result });


}

export default handler;
