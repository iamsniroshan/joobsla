import fs from "fs"
import formidable from "formidable";
import AWS from 'aws-sdk'

export const config = {
  api: {
    bodyParser: false,
  },
};

async function handler(req, res){
  const s3 = new AWS.S3({
    endpoint: 'https://lotjobs.sgp1.digitaloceanspaces.com/uploads',
    accessKeyId: 'JZ4FOQOQ3XK55RPT3XSJ',//process.env.SPACES_KEY,
    secretAccessKey: 'Ir/tsV7Jai93a1N9vTkTuFomyBvyzbxy82fNyQpQrG4',//process.env.SPACES_SECRET,
    region: 'sgp1',
    // sslEnabled: true,
  });
  function paths({ id, ct }) {
    console.log('id', id, ct);
    switch (ct) {
      case 'tck':
        return `nor-platforms/${id}/tickets`;
      case 'prd':
        return `nor-platforms/${id}/products`;
      case 'pcs':
        return `nor-platforms/${id}`;
      default:
        return false;
    }
  }
  try {
    const form = new formidable.IncomingForm({ multiples: true, maxFileSize: 50 * 1024 * 1024 });
    form.parse(req, async function (err, fields, files) {
      // console.log(err)
      // console.log('files', files, 'fields', fields);
      const { file } = files;
      const body = file.length > 0 ? file.map((itm) => fs.readFileSync(itm.filepath)) : fs.readFileSync(file.filepath);
      const contentType = file.length > 0 ? file.map((itm) => itm.mimetype) : file.mimetype;
      const key = file.length > 0 ? file.map((itm) => itm.originalFilename) : file.originalFilename;
      // console.log('body', body, 'key', key, 'contenttype', contentType);
      // console.log('se', s3);
      await s3
        .upload({
          Bucket: 'test-path',//paths({ id: req.user._id, ct: fields?.ct }),
          ACL: 'public-read',
          Key: key,
          Body: body,
          ContentType: contentType,
        })
        .send((err, data) => {
          if (err) {
            console.log(err)
            return res.status(500).json('Internal Error Please try again');
          }
          if (data) {
            console.log('data', data);
            return res.status(200).json({ files: data.Location });
          }
        });
    });
  } catch (err) {
    console.log('3')
    res.status(500).json('Internal Error Please try again');
  }
};


export default handler;
