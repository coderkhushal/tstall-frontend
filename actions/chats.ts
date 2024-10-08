import { getGetAuthHeaders } from "@/hooks/getGetAuthHeaders"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const getConversationBetweenTwoUsers = async (userId: string, otherUserId: string) => {
    try{
        const res = await fetch(`${BASE_URL}/newsapp/auth/text/conversation?userId1=${userId}&userId2=${otherUserId}`, {
            method: "GET",
            headers: getGetAuthHeaders()
        })
        const data = await res.json()
        if(res.status == 200){
            return {success: true, data: data}
        }
        return {success: false, error: data.error}
    }
    catch(err){
        return {success: false, error: "Internal Server Error"}
    }
}
export const getConversationsOfUserById= async (userId: string)=>{
    try{
        const res = await fetch(`${BASE_URL}/newsapp/auth/text/getContactedUsers?userId=${userId}`, {
            method: "GET",
            headers: getGetAuthHeaders()
        })
        const data = await res.json()
        if(res.status == 200){
            return {success: true, data: data}
        }
        return {success: false, error: data.error}
    }
    catch(err){
        return {success: false, error: "Internal Server Error"}
    }
}