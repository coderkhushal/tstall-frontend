import { getGetAuthHeaders } from "@/hooks/getGetAuthHeaders"
import { getUserId } from "@/hooks/getUserId"
import { ChangePassSchema } from "@/schemas"
import { UserType } from "@/types"

import { User } from "lucide-react"
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string
import { z } from "zod"
 
export const getUser = async({id}:{id:string})=>{
    try{

        const res = await fetch(`${BASE_URL}/newsapp/auth/getUsersById?userIds=${id}`,
        {
            method: 'GET',
            headers: getGetAuthHeaders()
        }
    )
    const data = await res.json()
    if(res.status === 200){
        return data[0]
    }
    return null
}
catch(err){
    return null

}
}
export const getUserByToken= async({token}:{token:string})=>{
    try{

        const res = await fetch(`${BASE_URL}/newsapp/onboard/getUser?token=${token}`,
        {
            method: 'GET',
            headers: getGetAuthHeaders()
        }
    )
    const data = await res.json()
    
    if(res.status === 200){
        return data
    }
    return null
}
catch(err){
    return null

}
}
type UpdateProfileType =Pick<UserType, "id" | "dateOfBirth" | "gender" | "urlToImage" | "languages" | "region" | "topicsOfInterest">
export const updateProfile = async(data:UpdateProfileType)=>{
    try{
        const res = await fetch(`${BASE_URL}/newsapp/auth/editUserProfile`,
        {
            method: 'POST',
            headers: getGetAuthHeaders(),
            body: JSON.stringify({...data, id: getUserId()})
        }
    )
    const result: UpdateProfileType  = await res.json()
    console.log(result)
    if(res.status === 200){
        return true
    }
    return false
}
catch(err){
    return false
}
}
export const changePassword= async(data: z.infer<typeof ChangePassSchema>)=>{
    try{
        const res = await fetch(`${BASE_URL}/newsapp/onboard/changePassword`,
        {
            method: 'POST',
            headers: getGetAuthHeaders(),
            body: JSON.stringify(data)
        }
    )
    
    
    if(res.status === 200){
        return {success: "Password Changed Successfully"}
    }
    return { error: "Invalid Username or Password"}
}
catch(err){
    console.log(err)
    return { error:"Internal Server Error"}

}
}
export const getUserByName= async({Username}:{Username:string})=>{
    try{
        const res = await fetch(`${BASE_URL}/newsapp/auth/getUsersByName?userName=${Username}`,
        {
            method: 'GET',
            headers: getGetAuthHeaders()
        }
    )
    const data = await res.json()
    if(res.status === 200){
        return data
    }
    return []
}
catch(err){
    return []

}
}

export const getUserById= async({id }: {id: string})=>{
    try{
        const res = await fetch(`${BASE_URL}/newsapp/auth/getUsersById?userIds=${id}`,
        {
            method: 'GET',
            headers: getGetAuthHeaders()
        }
    )
    const data = await res.json()
    if(res.status === 200){
        return data[0]
    }
    return null
}
catch(err){
    return null

}
}

export const followUser= async({id}:{id:string})=>{
    try{
        const res = await fetch(`${BASE_URL}/newsapp/auth/followUser?followerId=${getUserId()}&followingId=${id}`,
        {
            method: 'POST',
            headers: getGetAuthHeaders(),

        }
    )
    const data= await res.json()
    if(res.status === 200){
        return {success: true, error:null}
    }
    return {success: false, error:data.error}
}
catch(err){
    return {success: false, error:"Internal Server Error"}

}
}

export const unfollowUser= async({id}:{id:string})=>{
    try{
        const res = await fetch(`${BASE_URL}/newsapp/auth/unfollowUser?followerId=${getUserId()}&followingId=${id}`,
        {
            method: 'POST',
            headers: getGetAuthHeaders(),

        }
    )
    const data= await res.json()
    if(res.status === 200){
        return {success: true, error:null}
    }
    return {success: false, error:data.error}
}
catch(err){
    return {success: false, error:"Internal Server Error"}

}
}

export const reportUser = async({id}: {id: string})=>{
    try{
        
        const res = await fetch(`${BASE_URL}/newsapp/auth/reportUser?reportingId=${id}&reportedId=${getUserId()}`,
        {
            method: 'POST',
            headers: getGetAuthHeaders(),

        }
    )
    const data= await res.json()

    if(res.status === 200){
        return {success: true, error:null}
    }
    return {success: false, error:"Internal Server Error"}
}
catch(err){
    return {success: false, error:"Internal Server Error"}

}
}