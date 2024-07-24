import { getGetAuthHeaders } from "@/hooks/getGetAuthHeaders"
import { getUserId } from "@/hooks/getUserId"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
export const getPolls = async(page: number)=>{
    try{
        const res = await fetch(`${BASE_URL}/newsapp/auth/getAllPollsPaginated?page=${page}&size=10`,{
            method: 'GET',
            headers: getGetAuthHeaders()
        })
        const data = await res.json()
        if(res.status==200){
            return {success: true, data: data}
        }
        return {success :false, error: "Internal server Error"}
    }
    catch(er){
        console.log(er)
        return {success: false, error: "Internal server Error"}
    }
}

export const getPollVotesFromPollId= async(pollid: string)=>{
    try{
        const res = await fetch(`${BASE_URL}/newsapp/auth/getAllPollsVotesForPoll?pollId=${pollid}`,{
            method: 'GET',
            headers: getGetAuthHeaders()
        })
        const data = await res.json()
        if(res.status==200){
            return {success: true, data: data}
        }
        return {success :false, error: "Internal server Error"}
    }
    catch(err){

        return {success: false, error: "Internal Server Error"}
    }
}

export const VoteForPoll= async(pollId: string, option: string)=>{
    try{
        const res = await fetch(`${BASE_URL}/newsapp/auth/savePollVotes`,{
            method: 'POST',
            headers: getGetAuthHeaders(),
            body: JSON.stringify([{
                userId: getUserId(),
                option: option,
                pollId: pollId

            }])
        })
        const data = await res.json()
        if(res.status==200){
            return {success: true, data: data}
        }
        return {success :false, error: "Internal server Error"}
    }
    catch(err){

        return {success: false, error: "Internal Server Error"}
    }
}