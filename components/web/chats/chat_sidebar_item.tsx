"use client"
import { UserType } from '@/types'
import Link from 'next/link'
import React from 'react'

const ChatSidebarItem = ({user}:{user: UserType}) => {
  return (
  
    <Link href={`/chats/${user.id}`}>
    <div className="py-3 sm:py-4 w-full  hover:bg-primary px-4">
    <div className="flex items-center space-x-4 w-full">
        <div className="flex-shrink-0">
            <img className="w-8 h-8 rounded-full" src={user.urlToImage?  user.urlToImage : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} alt="profile"/>
        </div>
        <div className="flex-1 min-w-0">
            <p className="lg:text-xl text-sm font-bold  text-gray-900 truncate ">
                {user.userName}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                {user.mailId}
            </p>
        </div>
       
    </div>
</div>
    </Link>

  )
}

export default ChatSidebarItem