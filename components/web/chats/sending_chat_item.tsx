"use client"
import React from 'react'

const SendingChatItem = ({ message, time }: { message: string, time: string }) => {
    
    return (
        <div className="w-full flex justify-end">
            <div className='flex flex-col shadow-xl  bg-[#F3CEA1] max-w-60 min-w-32 lg:max-w-lg  rounded-xl space-x-2'>

                <div className="flex flex-col p-4 lg:p-6 w-full">

                    <p className='text-zinc-900 text-xl'>{message}</p>
                </div>
                <p className='text-gray-500 text-xs w-full flex justify-end pr-4 '>{time.split("T")[0]}</p>
            </div>
        </div>
    )
}

export default SendingChatItem