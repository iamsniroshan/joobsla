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

    try {
        const result = await jobPosts.updateOne(
            { 
              _id: data._id,
              "jobApplications._id": data.applicationId
            },
            {
              $set: {
                "jobApplications.$.applicationStatus": data.applicationStatus,
                "jobApplications.$.order": data.order
              }
            }
          )
        res.status(201).json({ status: "success", message: "Application status update success!", data: result, });
    } catch (error) {
        res.status(500).json({ status: "error", message: "Application status update failed!", data: error });
    }
}

export default handler;
