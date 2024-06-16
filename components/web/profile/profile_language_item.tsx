import { Button } from '@/components/ui/button'
import { UserType } from '@/types'
import React from 'react'

const ProfileLanguageItem = ({label , code, userInfo, onClicked}:{label: string, code: string, userInfo: Pick<UserType, "id" | "dateOfBirth" | "gender" | "urlToImage" | "languages" | "region" | "topicsOfInterest">, onClicked: (VARIANT: 'ID' | "DOB" | "GENDER" | "URLTOIMAGE" | "LANGUAGE" | "REGION" | "INTEREST", value: any)=>void}) => {
  return (
    <div className={`w-full rounded-xl lg:p-8 lg:text-xl cursor-pointer transition-all hover:scale-105  border-black border-3 border focus:bg-none py-4 p-5 text-center  font-bold ${userInfo.languages.includes(code)? "bg-black text-white " : "bg-primary text-black "}`} onClick={()=>onClicked("LANGUAGE", code)} >
      {label}
    </div>
  )
}

export default ProfileLanguageItem