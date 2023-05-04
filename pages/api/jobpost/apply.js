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
    const newObj = { ...data, applicationUserId: userId }

    try {
        const result = await jobPosts.updateOne({ userId: userId }, { $push: { jobApplications: newObj } })
        res.status(201).json({ status: "success", message: "job application success!", data: result, });
    } catch (error) {
        res.status(500).json({ status: "error", message: "job application failed!", data: error });
    }
}

export default handler;
