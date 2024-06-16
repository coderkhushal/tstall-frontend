import { Button } from '@/components/ui/button'
import { UserType } from '@/types'
import React from 'react'

const ProfileTopicsItem = ({topic, userInfo, onClicked}:{ topic: string, userInfo: Pick<UserType, "id" | "dateOfBirth" | "gender" | "urlToImage" | "languages" | "region" | "topicsOfInterest">, onClicked: (VARIANT: 'ID' | "DOB" | "GENDER" | "URLTOIMAGE" | "LANGUAGE" | "REGION" | "INTEREST", value: any)=>void}) => {
  return (
    <div className={`w-full rounded-xl border-dark border-2 cursor-pointer hover:scale-105  transition-all  focus:bg-none py-4 p-3 lg:p-10 text-center  font-bold ${userInfo.topicsOfInterest.includes(topic)? "bg-black text-white " : "bg-primary text-black "}`} onClick={()=>onClicked("INTEREST", topic)} >
      {topic}
    </div>
  )
}

export default ProfileTopicsItem