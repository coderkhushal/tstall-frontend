import ChatSidebar from '@/components/web/chats/chats_sidebar'
import React from 'react'

const ChatLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <div className='flex w-full h-full'>
        <ChatSidebar/>
        {children}
    </div>
  )
}

export default ChatLayout