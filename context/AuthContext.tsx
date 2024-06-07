"use client"

import { getUser } from "@/actions/user";
import { getGetToken } from "@/hooks/getGetToken";
import { getRemoveToken } from "@/hooks/getRemoveToken";
import { getUserId } from "@/hooks/getUserId";
import { UserType } from "@/types";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
    fetchUser: ()=>Promise<void>
    user : UserType | null
}

export const AuthContext = createContext<AuthContextType>({
    fetchUser: async()=>{},
    user: null
})

const AuthState = ({children}:{children:React.ReactNode})=>{
    const [user, setuser] = useState<UserType | null>(null)
    const router = useRouter()
    const fetchUser=async()=>{
        const userId: string | null = getUserId()
        if(!userId){
            return;
        }
        const result: UserType | null = await getUser({id: userId})
        if(result === null){
            getRemoveToken()
            router.push("/auth/login");
        }
        setuser((value)=>result)
    }
    useEffect(()=>{
        fetchUser()
    },[])
    return(
        <AuthContext.Provider value={{fetchUser,user}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthState
export const useAuthContext = ()=> useContext(AuthContext)