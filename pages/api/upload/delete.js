import AWS from "aws-sdk";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return;
  }

  const session = await getSession({ req: req });
  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }

  const spacesEndpoint = `sgp1.digitaloceanspaces.com/uploads/${session.user.id}`;
  const key = req.body;
  const s3 = new AWS.S3({
    endpoint: new AWS.Endpoint(spacesEndpoint),
    secretAccessKey: "Ir/tsV7Jai93a1N9vTkTuFomyBvyzbxy82fNyQpQrG4", //process.env.AWS_SECRET_KEY,
    accessKeyId: "JZ4FOQOQ3XK55RPT3XSJ", //process.env.AWS_ACCESS_KEY,
  });

  const params = {
    Bucket: "lotjobs", //process.env.BUCKET_NAME,
    Key: key,
  };

  s3.deleteObject(params, function (error, data) {
    if (error) {
        res.status(500).json({ message: "Something went wrong", error });
    }
    res.status(200).json({ message: "Successfully deleted file", data });
  });
}
