import Image from "next/image";
import React,{useState} from "react";



export default function FileUploadInput() {

  const [fileDetail, setFileDetail] = useState({})

  const onChange = async (event) => {
    setFileDetail({})
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch('/api/upload/file', {
      method: 'POST',
      body:formData,
    });
  
    const data = await response.json();
    setFileDetail(data)
  };

  return (
    <div className="App">
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
                            Attached your CV</p>
                            <input onChange={onChange} type="file" className="opacity-0 absolute cursor-pointer h-24"/>
                    </div>
                    
                </div>
      </div>
    </div>
  );
}