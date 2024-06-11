import { getGetAuthHeaders } from "@/hooks/getGetAuthHeaders"
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string
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