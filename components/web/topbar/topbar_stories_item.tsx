"use client"
import { getGetToken } from '@/hooks/getGetToken'
import { DialogTrigger } from '@radix-ui/react-dialog'
import React from 'react'

const TopbarStoriesItem = ({storyNumber, handleOpenStory, src , title}: {storyNumber: number, handleOpenStory: (n: number)=>void, src: string, title: string}) => {
  return (
    <DialogTrigger onClick={()=>handleOpenStory(storyNumber)}>

    <div className=" flex flex-col mx-3 justify-center items-center ">
    <div className="rounded-full  p-1 bg-gradient-to-r w-16 h-16 from-purple-400 via-pink-500 to-red-500">
      <div className=" bg-white rounded-full h-full w-full ">
        <img src={src!="" ? src: "https://media.assettype.com/sentinelassam-english%2F2024-06%2Fbd7021c0-5cc6-4de0-a725-d01b905f4b0c%2Fwomen.png?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100"} className='h-full w-full rounded-full bg-contain ' alt=""/>
      </div>
    </div>
    <div className="user-name text-center pt-1  w-18">
      <div className="text-[#f0eae7] tracking-widest  text-sm w-18">
        {title}
        
      </div>
    </div>
  </div>
    </DialogTrigger>
  )
}

export default TopbarStoriesItem