"use client"
import React, { useEffect } from 'react'
import ChatSidebarItem from './chat_sidebar_item'
import { useAuthContext } from '@/context/AuthContext'
import { getConversationsOfUserById } from '@/actions/chats'
import { UserType } from '@/types'

const ChatSidebar = () => {
    const {user, fetchUser} = useAuthContext()
    const [conversations, setConversations] = React.useState<UserType[] | null>(null)
    useEffect(()=>{
        fetchConversations()
    },[user])
    const fetchConversations = async()=>{
        if(!user){
            await fetchUser()
        }
        if(user){
            
            const data= await getConversationsOfUserById(user.id)
            if(data.success){
                setConversations(data.data)
            }
            else{
                setConversations([])
            }
        }
    }
  return (
    <div className='flex flex-col space-y-3 w-1/3 shadow-2xl p-5'>
        <h1 className='text-2xl font-bold '>Chats</h1>
        <h1 className='w-full border border-black'></h1>
        {!conversations && <p>Loading...</p>}
        {(conversations && conversations.length>0) && conversations.map((e, i)=>{
            return <ChatSidebarItem key={i} user={e}/>

        })}
    {user && <ChatSidebarItem user={user}/>}
        {/* <ChatSidebarItem/>
        <ChatSidebarItem/>
        <ChatSidebarItem/> */}
    </div>
  )
}

export default ChatSidebar