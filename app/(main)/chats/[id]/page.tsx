"use client"
import ChattingInput from '@/components/web/chats/chatting_input'
import ChattingTopBar from '@/components/web/chats/chatting_topbar'
import RecievingChatItem from '@/components/web/chats/recieving_chat_item'
import SendingChatItem from '@/components/web/chats/sending_chat_item'
import { useAuthContext } from '@/context/AuthContext'
import { useWebsocketContext } from '@/context/websocketContext'
import { getUserId } from '@/hooks/getUserId'

import React, { useEffect } from 'react'

const ChattingPage = ({params}:{params: {id: string}}) => {
  const {user} = useAuthContext()
  const {fetchPrevChats, prevchats} = useWebsocketContext()
  useEffect(()=>{
    fetchPrevChats(params.id)
  })
  return (
    <div className='flex flex-col w-full'>
      <ChattingTopBar userId={params.id}/>
      <div className="flex flex-col space-y-4 p-2 px-4 overflow-y-scroll h-full">
    {prevchats.map((e, i)=>{
      if(e.sender==params.id){
        return <RecievingChatItem key={i} message={e.content? e.content : ""} time={e.sentTime ? e.sentTime :""} />
      }
      else{
        return <SendingChatItem key={i} message={e.content? e.content : ""} time={e.sentTime ? e.sentTime :""} />
      }
    })}
      </div>
        <ChattingInput recieverId={params.id}/>
    </div>
  )
}

export default ChattingPage