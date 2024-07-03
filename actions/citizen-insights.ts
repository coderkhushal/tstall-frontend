import { getGetAuthHeaders } from "@/hooks/getGetAuthHeaders";
import { getGetToken } from "@/hooks/getGetToken";
import { ArticleType } from "@/types";
const S3_URL = process.env.NEXT_PUBLIC_S3_BASE_URL;
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

export const createFunsectionPost= async ({postcontent}:{postcontent: Partial<ArticleType>})=>{

    try{
        const res = await fetch(`${BASE_URL}/newsapp/auth/saveFunSectionArticle`, {
            method: 'POST',
            headers:getGetAuthHeaders(),
            body: JSON.stringify([postcontent])
        })
        const data= await res.json()
        if(res.status==200){
            return{success: true, data: data[0]}
        }
        return {success: false, error: "Internal Server Error"}
    }   
    catch(err){
        console.log(err)
        return{success: false, error: "Internal Server Error"}
    }
}
export const UploadImage =async(data: File)=>{
    try{
        
        const formData = new FormData()
        formData.append('file', data)
        const response = await fetch(`${BASE_URL}/newsapp/auth/upload`, {
            method: 'POST',
            headers:{
                
                "Authorization": "Bearer "+getGetToken()
            },
            body: formData
        })
        const responseData = await response.text()
        console.log(responseData)
        if(response.status!=200){
            return {success: false, error: "Internal Server Error"}
        }
        return {success: true, data: S3_URL+"/"+responseData}
    }
    catch(err){
        return {success: false, error: "Internal Server Error"}
    }
    }