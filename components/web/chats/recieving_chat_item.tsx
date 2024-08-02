"use client"
import React from 'react'

const RecievingChatItem = ({ message, time , lastMessageRef }: { message: string, time: string, lastMessageRef: React.LegacyRef<HTMLDivElement> }) => {
  return (

    <div className='flex flex-col shadow-xl  bg-[#F3CEA1] max-w-60 lg:max-w-lg  rounded-xl space-x-2'>

      <div className="flex flex-col p-4 lg:p-6 w-full">

      <p className='text-zinc-900 text-xl'>{message}</p>
      </div>
      <p className='text-gray-500 text-xs w-full flex justify-end pr-4 '>{time}</p>
    </div>


  )
}

export default RecievingChatItem