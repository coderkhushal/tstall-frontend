"use client"
import { useAuthContext } from '@/context/AuthContext'
import { useWebsocketContext } from '@/context/websocketContext'


import React, { useEffect, useState } from 'react'

const ChattingInput = ({recieverId}: {recieverId: string}) => {
  const [message, setmessage] = useState("")
  const {user, fetchUser} = useAuthContext()

  const {ws, sendmessage} = useWebsocketContext()
  const onsubmit = async(e: React.FormEvent<HTMLFormElement >) => {
    if(!user){
      await fetchUser()
    }
    if(!ws){
      alert("you are not connected , please try refreshing the page")
      return;
    }
    if(user){
      
      e.preventDefault()
      sendmessage(recieverId + ":" + message, message)
    }
    setmessage("")
  }
  return (
    <div>
      <div className="flex w-full py-2">
        <form action="" className='flex w-full items-center space-x-2' onSubmit={onsubmit}>

        <input type="text" value={message} onChange={(e)=>setmessage(prev=>e.target.value)} placeholder="Type a message" className="w-full p-2 rounded-xl bg-secondarydark text-zinc-900" />
        <button className="p-2 rounded-xl bg-tertiary text-white font-bold" type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ChattingInput