import React from "react";
import Resizer from "react-image-file-resizer";

const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      300,
      400,
      "JPEG",
      80,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

const dataURIToBlob = (dataURI) => {
  const splitDataURI = dataURI.split(",");
  const byteString =
    splitDataURI[0].indexOf("base64") >= 0
      ? atob(splitDataURI[1])
      : decodeURI(splitDataURI[1]);
  const mimeString = splitDataURI[0].split(":")[1].split(";")[0];

  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);

  return new Blob([ia], { type: mimeString });
};

export default function FileInput() {
  const onChange = async (event) => {
    const file = event.target.files[0];
    const image = await resizeFile(file);
    console.log(image);
    const newFile = dataURIToBlob(image);
    const formData = new FormData();
    formData.append("image", newFile);
    const res = await fetch(
      "/api/upload/file",
      {
        method: "POST",
        body: formData
      }
    );
    const data = await res.text();
    console.log(data);
  };

  return (
    <div className="App">
      <input onChange={onChange} type="file" multiple/>
    </div>
  );
}