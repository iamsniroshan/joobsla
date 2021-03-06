import fs from "fs"
import formidable from "formidable";
import AWS from 'aws-sdk'
import { getSession } from "next-auth/react";

export const config = {
  api: {
    bodyParser: false,
  },
};

async function handler(req, res){

  const session = await getSession({ req: req });
  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }

const endPoint = `sgp1.digitaloceanspaces.com/uploads/${session.user.id}`

  const s3 = new AWS.S3({
    endpoint: new AWS.Endpoint(endPoint),
    accessKeyId: 'JZ4FOQOQ3XK55RPT3XSJ',//process.env.SPACES_KEY,
    secretAccessKey: 'Ir/tsV7Jai93a1N9vTkTuFomyBvyzbxy82fNyQpQrG4',//process.env.SPACES_SECRET,
    region: 'sgp1',
    // sslEnabled: true,
  });

  try {
    const form = new formidable.IncomingForm({ multiples: true, maxFileSize: 50 * 1024 * 1024 });
    form.parse(req, async function (err, fields, files) {
      // console.log(err)
      //console.log('files', files, 'fields', fields);
      const { image } = files; // base on the client type
      const body = image.length > 0 ? image.map((itm) => fs.readFileSync(itm.filepath)) : fs.readFileSync(image.filepath);
      const contentType = image.length > 0 ? image.map((itm) => itm.mimetype) : image.mimetype;
      const key = image.length > 0 ? image.map((itm) => itm.originalFilename) : image.originalFilename;
      // console.log('body', body, 'key', key, 'contenttype', contentType);
      // console.log('se', s3);
      await s3
        .upload({
          Bucket: 'lotjobs',
          ACL: 'public-read',
          Key: new Date().getTime()+'_'+key,
          Body: body,
          ContentType: contentType,
        })
        .send((err, data) => {
          if (err) {
            return res.status(500).json('Internal Error Please try again');
          }
          if (data) {
            return res.status(200).json({ imgUrl:data.Location, imgName:data.key });
          }
        });
    });
  } catch (err) {
    res.status(500).json('Internal Error Please try again');
  }
};


export default handler;
