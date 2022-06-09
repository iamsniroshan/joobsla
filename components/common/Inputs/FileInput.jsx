import React, {useState} from "react"
import Uppy from "@uppy/core"
import { DragDrop } from "@uppy/react"
import ThumbnailGenerator from "@uppy/thumbnail-generator"
import XHRUpload from "@uppy/xhr-upload"

export default function FileInput() {
const [currentAvatar, setCurrentAvatar] = useState("");
const [errorMessage, setErrorMessage] = useState("");

  const uppy = new Uppy({
    restrictions: {
      maxNumberOfFiles: 3,
      maxFileSize: 1048576 * 4,
      allowedFileTypes: [".jpg", ".jpeg", ".png",".pdf"],
    },
    autoProceed: true,
  })
  
  uppy.use(XHRUpload, {
    endpoint: "/api/upload/file",
    formData: true,
  })
  
  uppy.use(ThumbnailGenerator, {
    thumbnailWidth: 80,
    waitForThumbnailsBeforeUpload: false,
  })
  
  uppy.on("thumbnail:generated", (file, preview) => {
    setCurrentAvatar(preview)
    console.log(file.name, preview)
  })
  
  uppy.on("complete", result => {
    const url = result.successful[0].response.body.files
    //setCurrentAvatar(url)
  })
  
  uppy.on("error", error => {
    setErrorMessage(error.stack)
    console.error(error.stack)
  })
  
  uppy.on("restriction-failed", (file, error) => {
    const err = error.stack.includes("exceeds maximum allowed size of 4 MB")
      ? "File size is larger than 4MB"
      : error

      const errorDesc = "Upload error: " +
        err +
        "\n" +
        file.name +
        " Size : " +
        Math.round(file.size / 1024 / 1024) +
        "MB"
      setErrorMessage(errorDesc)
  })

  return (
    <div>
      {JSON.stringify(errorMessage)}
      <img src={currentAvatar} alt="Current Avatar" />
      <DragDrop
        uppy={uppy}
        locale={{
          strings: {
            dropHereOr: "Drop you profile image here %{browse}",
            browse: "browse",
          },
        }}
      />
    </div>
  )
}
