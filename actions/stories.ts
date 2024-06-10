import { getGetAuthHeaders } from "@/hooks/getGetAuthHeaders";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const getStories= async()=>{
    const res= await fetch(`${BASE_URL}/newsapp/auth/getStories`,
        {
            method: 'GET',
            headers: getGetAuthHeaders()
        }
    )
    const data= await res.json()
    console.log(data)
    if( res.status==200){
        return {success: true, stories: data}
    }
    else{
        return {error: data, success: false}
    }
}