import { getGetAuthHeaders } from "@/hooks/getGetAuthHeaders"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const getCurrentAffairTopcics = async()=>{
    try{
      
        const res = await fetch(`${BASE_URL}/newsapp/auth/getCurrentAffairsWords`, {
            method: 'GET',
            headers: getGetAuthHeaders()
        })
        let data= await res.json()
        if(res.status==200){
            return {success: true, data: data}
        }
    }
    catch(err){
        console.log(err)
        return {success: false, error: "Internal Server Error"}
    }
}

export const getSingleCurrentAffairArticles = async(query: string)=>{
    try{
        
        const res = await fetch(`${BASE_URL}/newsapp/auth/getCurrentAffairsForTopic?${query}`, {
            method: 'GET',
            headers: getGetAuthHeaders()
        })
        let data= await res.json()

        if(res.status==200){
            return {success: true, data: data}
        }
    }
    catch(err){
        console.log(err)
        return {success: false, error: "Internal Server Error"}
    }
}