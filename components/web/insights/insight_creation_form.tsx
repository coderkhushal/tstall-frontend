"use client"

import { UploadImage, createFunsectionPost } from '@/actions/citizen-insights'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useAuthContext } from '@/context/AuthContext'
import { ArticleType } from '@/types'
import React, { useEffect, useState } from 'react'

const InsightCreationForm = () => {
  const { user } = useAuthContext()
  const ref = React.useRef<HTMLInputElement>(null)
  const [isUploaded, setisUploaded] = useState<boolean>(false)
  const [FormData, setFormData] = useState<Partial<ArticleType>>({
    title: "",
    content: "",
    source: {
      name: user?.userName ? user.userName : "Anonymous",
    },
    urlToImage: ""
  })
  useEffect(()=>{
    if(user){
      setFormData(value=>({...value, source: {name: user.userName}}))
    }
  },[user])
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(value => ({ ...value, [e.target.name]: e.target.value }))
  }
  const handleUpload = async () => {
    const file = ref.current?.files?.[0]
    if (file) {
      // upload file
      const uploadedData = await UploadImage(file)
      if (uploadedData.success) {
        setFormData(value => ({ ...value, urlToImage: uploadedData.data }))
        alert("Image Uploaded")
        setisUploaded(true)
      }
      else {
        alert("Image Upload Failed")
      }


    }
  }
  const handleSubmit =async()=>{
    const data= await createFunsectionPost({postcontent: FormData})
    if(data.success){
      alert("Post Created Successfully")
      setFormData({
        title: "",
        content: "",
        source: {
          name: user?.userName ? user.userName : "Anonymous",
        },
        urlToImage: ""
      })
    }
    else{
      alert("Post Creation Failed")
    }
  }
  return (
    <div className='flex my-4 flex-col space-y-4 h-full w-full '>
      <div className="flex flex-col space-y-1">
        <Label className='font-semibold text-lg'>
          Image
        </Label>

        <div className="flex w-full space-x-2">


          <Input type='file' ref={ref} />
          <Button variant={"secondary"} onClick={handleUpload} className={`${isUploaded ? "bg-green-400" : "bg-gray-300"} text-yellow-700`}>
            {isUploaded ? "Uploaded" : "Upload Image"}
          </Button>
        </div>
      </div>
      <div className="flex flex-col">

        <Label className='font-semibold text-lg'>
          Title
        </Label>
        <Input value={FormData.title} name="title" onChange={handleOnchange} />
      </div>
      <div className="flex flex-col">
        <Label className='font-semibold text-lg'>
          Content
        </Label>
        <Textarea name="content" value={FormData.content} onChange={handleOnchange} />
        {/* <div className="w-full"> */}

        <Button className='bg-quarternary w-full my-4' onClick={handleSubmit}>
          Submit
        </Button>
        {/* </div> */}
      </div>
    </div>
  )
}

export default InsightCreationForm