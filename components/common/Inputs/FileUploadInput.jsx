import { PaperClipIcon } from "@heroicons/react/solid";
import React, { useState } from "react";



export default function FileUploadInput({label,onChange}) {

  const [fileDetail, setFileDetail] = useState({})

  const fileChangeChange = async (event) => {
    setFileDetail({})
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch('/api/upload/file', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setFileDetail(data);
    onChange(data)
  };

  const deleteFile = (key) => {
    fetch('/api/upload/delete',
      {
        method: 'DELETE',
        body: key,
      }).then(() => {
        setFileDetail({});
        onChange({ fileUrl: "", fileName: "" });
      });
  }



  return (
    <>
      {fileDetail.fileName ? (
        <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
          <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
            <div className="w-0 flex-1 flex items-center">
              <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
              <span className="ml-2 flex-1 w-0 truncate">{fileDetail.fileName.split(/_(.*)/s)[1]}</span>
            </div>
            <div className="ml-4 flex-shrink-0 cursor-pointer">
              <a onClick={() => deleteFile(fileDetail.fileName)} className="font-medium text-red-600 hover:text-indigo-500">
                Delete
              </a>
            </div>
          </li>
        </ul>
      ) : (
        <div className="flex items-center justify-center">
          <div
            className="flex flex-col w-full h-24 border-2 hover:border-blue-200 border-dashed rounded-lg hover:bg-gray-100 border-gray-300">
            <div className="flex flex-col items-center justify-center pt-5 pb-5 relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400 group-hover:text-gray-600"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                {label}</p>
              <input onChange={fileChangeChange} type="file" className="opacity-0 absolute cursor-pointer h-24" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}