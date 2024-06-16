"use client"

import React, { useState } from 'react'

import Link from "next/link"


import { Button } from "@/components/ui/button"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input'
import { UserType } from '@/types'
import { useAuthContext } from '@/context/AuthContext'
import { Languages, topicsOfInterest } from '@/constants'
import ProfileLanguageItem from '@/components/web/profile/profile_language_item'
import ProfileTopicsItem from '@/components/web/profile/profile_topics_item'
import { updateProfile } from '@/actions/user'
import { useRouter } from 'next/navigation'




const ProfileEditCard = () => {
    const [page, setpage] = useState(1)
    const router= useRouter()
    const [userInfo, setUserInfo] = useState<Pick<UserType, "id" | "dateOfBirth" | "gender" | "urlToImage" | "languages" | "region" | "topicsOfInterest">>({
        id: "",
        dateOfBirth: "",
        gender: "male",
        urlToImage: "",
        languages: ["en"],
        region: ["in"],
        topicsOfInterest: []

    })
    const handleValueChange = async (VARIANT: 'ID' | "DOB" | "GENDER" | "URLTOIMAGE" | "LANGUAGE" | "REGION" | "INTEREST", value: any) => {
        switch (VARIANT) {
            case "LANGUAGE":
                if (userInfo.languages.includes(value)) {
                    if (value == "en") {
                        return;
                    }
                    setUserInfo({ ...userInfo, languages: userInfo.languages.filter((language) => language !== value) })
                } else {
                    setUserInfo({ ...userInfo, languages: [...userInfo.languages, value] })
                }
                break;
            case "INTEREST":
                if (userInfo.topicsOfInterest.includes(value)) {
                    setUserInfo({ ...userInfo, topicsOfInterest: userInfo.topicsOfInterest.filter((topic) => topic !== value) })
                } else {
                    setUserInfo({ ...userInfo, topicsOfInterest: [...userInfo.topicsOfInterest, value] })
                }
                break;
            case "GENDER":
                setUserInfo({ ...userInfo , gender: value})
                break;
            case "DOB":
                setUserInfo({ ...userInfo, dateOfBirth: value })
                break;
            
        }

    }
    const handleSubmit = async()=>{
        const isUpdated=await updateProfile(userInfo)
        if(isUpdated){
            alert("Profile Updated")
            router.push("/auth/login")
        }
        else{
            alert("Error Occured While Updating Proile")
        }

    }
    if (page == 1)
        return (

            <div className="flex flex-col bg-gradient-to-b  from-orange-300 to-slate-50 items-center p-5 lg:py-20 w-full h-full">
                <h1 className='text-zinc-900 font-bold text-3xl overflow-y-scroll'>Languages</h1>
                <div className='grid grid-cols-1  lg:grid-cols-2 lg:gap-6 lg:mt-20 w-4/5 py-8  items-center space-y-4'>
                    {Languages.map((language, index) => <ProfileLanguageItem key={index} label={language.language} code={language.code} userInfo={userInfo} onClicked={handleValueChange} />)}
                </div>



                <Button onClick={() => setpage(2)} variant={"default"} className='w-4/5 lg:w-40 hover:bg-zinc-600 lg:p-6 bg-black text-white'>Next</Button>


            </div>


        )
    else if (page == 2)
        return (
            <div className='flex flex-col py-8 bg-gradient-to-b lg:py-40  from-orange-300 to-slate-50 items-center p-5 w-full h-full'>
                <h1 className='font-bold text-xl text-center'>Select your favourite topics</h1>
                <h2 className='text-center my-2 font-medium text-black'>Select some of your favorite topics to let us suggest better news for you</h2>
                <div className={`w-1/2 rounded-xl border-dark border-2 cursor-pointer hover:scale-105  transition-all  focus:bg-none py-4 p-3 mt-10 lg:mb-10  text-center  font-bold ${userInfo.topicsOfInterest.includes("general") ? "bg-black text-white " : "bg-primary text-black "}`} onClick={() => handleValueChange("INTEREST", "general")} >
                    General
                </div>
                <div className='grid grid-cols-2  gap-3 pb-4 px-2 mb-10 mt-3 lg:gap-20 lg:grid-cols-3   '>
                    {topicsOfInterest.map((topic, index) => <ProfileTopicsItem key={index} topic={topic} userInfo={userInfo} onClicked={handleValueChange} />)}
                </div>
                <div className='flex space-x-4 w-1/2 mx-auto  justify-center'>

                    <Button onClick={() => setpage(1)} variant={"default"} className='flex-1 lg:w-20 hover:bg-zinc-600 lg:p-6 bg-black text-white'>Prev</Button>
                    <Button onClick={() => setpage(3)} variant={"default"} className='flex-1 lg:w-20 hover:bg-zinc-600 lg:p-6 bg-black text-white'>Next</Button>
                </div>
            </div>
        )
    if (page == 3) {
        return (
            <div className='flex flex-col py-8 bg-gradient-to-b lg:py-20  from-orange-300 to-slate-50 px-10 w-full h-full '>
                <h1 className='w-full text-center font-extrabold text-3xl mb-5  '>
                    Details
                </h1>
                <div className="flex flex-col space-y-4 lg:bg-secondary lg:p-5 rounded-2xl">

                <h2 className='mt-2 font-bold lg:text-2xl'>
                    Date of Birth
                </h2>
                <Input type="date" onChange={(e) => handleValueChange("DOB", e.target.value.toString())} className='w-4/5 lg:w-1/6 my-4 '  />
                </div>
                <div className="flex flex-col space-y-2 my-4 lg:bg-secondary lg:p-5 rounded-2xl">
                <h2 className='mt-2 font-bold lg:text-2xl'>
                    Gender
                </h2>
                <Select defaultValue='male' onValueChange={(value: string)=>{handleValueChange("GENDER", value)}}>
                    <SelectTrigger className="w-[180px] my-6 bg-orange-300 ">
                        <SelectValue placeholder="Male" />
                    </SelectTrigger>
                    <SelectContent className='bg-secondary'>
                        <SelectGroup>

                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>

                        </SelectGroup>
                    </SelectContent>
                </Select>
                </div>
                <div className='flex space-x-4 lg:w-1/2 mx-auto my-10  justify-center'>

                    <Button onClick={() => setpage(2)} variant={"default"} className='w-full flex-1 lg:w-20 hover:bg-zinc-600 lg:p-6 bg-black text-white'>Prev</Button>
                    <Button onClick={() => handleSubmit()} variant={"default"} className='flex-1  lg:w-20 hover:bg-zinc-600 lg:p-6 bg-black text-white'>Save</Button>
                </div>


            </div>
        )
    }
}

export default ProfileEditCard