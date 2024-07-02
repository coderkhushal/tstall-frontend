import { getGetAuthHeaders } from "@/hooks/getGetAuthHeaders";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const getFunsectionPosts= async(page: number)=>{
    try{
        const res = await fetch(`${BASE_URL}/newsapp/auth/getFunSectionArticlesPaginated?page=${page}&size=10`, {
            method: 'GET',
            headers:getGetAuthHeaders()
        })
        const data= await res.json()
        if(res.status==200){
            return{success: true, data: data}
        }
        return {success: false, error: "Internal Server Error"}
    }   
    catch(err){
        console.log(err)
        return{success: false, error: "Internal Server Error"}
    }
}