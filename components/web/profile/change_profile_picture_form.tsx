"use client"
import { UploadImage } from '@/actions/citizen-insights'
import { updateProfile } from '@/actions/user'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { UserType } from '@/types'
import React from 'react'

const ChangeProilePictureForm = ({user, setshowProfilePicutreForm}:{user: UserType | null, setshowProfilePicutreForm: (x: boolean)=>void}) => {
    const ref= React.useRef<HTMLInputElement>(null)
    const handleUpload = async () => {
      if(!user){
        return;
      }
        const file = ref.current?.files?.[0]
        if (file) {
          // upload file
          const uploadedData = await UploadImage(file)

          if (uploadedData.success && uploadedData.data) {
            const isProfileUpdated = await updateProfile({...user, urlToImage: uploadedData.data})
            if(isProfileUpdated){
              alert("Profile Updated")
            }
            setshowProfilePicutreForm(false)

          }
          else {
            alert(JSON.stringify(uploadedData))
          }
    
    
        }
    }
  return (
    <div className='flex my-4 space-x-4 w-full h-full items-center justify-evenly lg:justify-center'>
      <Input type="file" ref={ref} className='w-1/2'/>
      <Button onClick={handleUpload} variant={"outline"} className='bg-primary'>Upload</Button>
    </div>
  )
}

export default ChangeProilePictureForm