"use client"

import { getUserId } from "@/hooks/getUserId";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import { ChatType } from "@/types";
import { getConversationBetweenTwoUsers } from "@/actions/chats";

type WebsocketContextType = {
    ws: WebSocket | null
    sendmessage: (message: string, content: string)=>void
    fetchPrevChats: (otheruserId: string)=>void
    prevchats: Partial<ChatType>[]
}

export const WebsocketContext = createContext<WebsocketContextType>({
    ws:null,
    sendmessage: ()=>{},
    fetchPrevChats: ()=>{},
    prevchats: []

})

const WebsocketState = ({children}:{children:React.ReactNode})=>{
    const [ws, setws] = useState<WebSocket | null>(null)
    const [prevchats, setprevchats] = useState<Partial<ChatType>[]>([])
    const {user, fetchUser} = useAuthContext()
    const sendmessage = (message: string, content: string)=>{
        if(ws){

            ws.send(message)
            setprevchats(prev=>[...prev, {content: content, sender: user?.id, reciever: message.split(":")[0]}])
        }
    }
    useEffect(()=>{
     
        if(user){

            const ws = new WebSocket(process.env.NEXT_PUBLIC_WS_URL+user.id)
            ws.onopen =()=>{
                console.log("connected")
            }
            ws.onmessage = (e)=>{
                let x= e.data.split(":")
                x.shift()
                let message = x.join()
                setprevchats(prev=>[...prev, {content: message, sender: e.data.split(":")[0], reciever: user.id}])
                
            }
            setws(ws)
            return ()=>{
                ws.close()
                setws(null)
            }
        }
        },[user])
        const fetchPrevChats = async(otheruserId: string)=>{
            if(!user){
                await fetchUser()
            }
            if(user){

                const data= await getConversationBetweenTwoUsers(user.id, otheruserId)
                if(data.success){
                    setprevchats(data.data)
                }
                else{
                    alert("something went wrong while fetching older chats")
                }
            }
        }
    return(
        <WebsocketContext.Provider value={{ws, sendmessage, fetchPrevChats, prevchats}}>
            {children}
        </WebsocketContext.Provider>
    )
}
export default WebsocketState
export const useWebsocketContext = ()=> useContext(WebsocketContext)