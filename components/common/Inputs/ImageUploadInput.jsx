import Image from "next/image";
import React, { useState } from "react";
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

export default function ImageUploadInput() {

  const [profileImage, setProfileImage] = useState("")

  const onChange = async (event) => {
    setProfileImage("")
    const file = event.target.files[0];
    const image = await resizeFile(file);
    const newFile = dataURIToBlob(image);
    const formData = new FormData();
    formData.append("image", newFile);
    const response = await fetch('/api/upload/image', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setProfileImage(data.files)
  };

  return (
    <div className="App">
      <div className="flex items-center justify-center">
        <span className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gray-500">
          <span className="text-xl font-medium leading-none text-white">
            {/* SN */}
            {profileImage ? (<Image src={profileImage} alt="profile logo" width="80" height="80" className="rounded-full" />) : ('SN')}

          </span>
        </span>
        <div className="w-20 h-20 text-lg group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
          <img className="hidden group-hover:block w-6" src="https://www.svgrepo.com/show/33565/upload.svg" alt="" />
          <input onChange={onChange} type="file" className="opacity-0 absolute w-20 h-20 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}