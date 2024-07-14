"use client"
import { UploadImage } from '@/actions/citizen-insights'
import React from 'react'

const ChangeProilePictureForm = () => {
    const ref= React.useRef<HTMLInputElement>(null)
    const handleUpload = async () => {

        const file = ref.current?.files?.[0]
        if (file) {
          // upload file
          const uploadedData = await UploadImage(file)

          if (uploadedData.success) {
            alert("Image Uploaded")

          }
          else {
            alert("Image Upload Failed")
          }
    
    
        }
    }
  return (
    <div>

    </div>
  )
}

export default ChangeProilePictureForm