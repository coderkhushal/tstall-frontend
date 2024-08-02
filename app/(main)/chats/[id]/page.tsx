"use client"
import ChattingInput from '@/components/web/chats/chatting_input'
import ChattingTopBar from '@/components/web/chats/chatting_topbar'
import RecievingChatItem from '@/components/web/chats/recieving_chat_item'
import SendingChatItem from '@/components/web/chats/sending_chat_item'
import { useAuthContext } from '@/context/AuthContext'
import { useWebsocketContext } from '@/context/websocketContext'
import { getUserId } from '@/hooks/getUserId'

import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const ChattingPage = ({params}:{params: {id: string}}) => {
  const {user} = useAuthContext()
  const {fetchPrevChats, prevchats} = useWebsocketContext()
  const lastMessageRef = React.useRef<HTMLDivElement>(null)
  const { ref, inView } = useInView()
  useEffect(() => {
    if (inView) {
      
    }
  }, [inView])
  useEffect(()=>{
    fetchPrevChats(params.id)
  },[user])
  return (
    <div className='flex flex-col w-full pb-14 lg:pb-0'>
      <ChattingTopBar userId={params.id}/>
      <div className="flex flex-col space-y-8 p-2 px-4 overflow-y-scroll h-full">
    {prevchats.map((e, i)=>{
      if(e.sender==params.id){
        return <RecievingChatItem  key={i} lastMessageRef={(i==prevchats.length-1 || i==prevchats.length-2)  ?  lastMessageRef: null} message={e.content? e.content : ""} time={e.sentTime ? e.sentTime :""} />
      }
      else{
        return <SendingChatItem read={e.read} key={i} message={e.content? e.content : ""} time={e.sentTime ? e.sentTime :""} />
      }
    })}
      </div>
        <ChattingInput recieverId={params.id}/>
    </div>
  )
}

export default ChattingPage