"use client"

import { getUser, getUserByToken } from "@/actions/user";
import { PublicRoutes } from "@/constants";
import { getGetToken } from "@/hooks/getGetToken";
import { getRemoveToken } from "@/hooks/getRemoveToken";
import { getUserId } from "@/hooks/getUserId";
import { UserType } from "@/types";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
    fetchUser: ()=>Promise<void>
    logout: ()=>void
    user : UserType | null
}

export const AuthContext = createContext<AuthContextType>({
    fetchUser: async()=>{},
    logout: ()=>{},
    user: null
})

const AuthState = ({children}:{children:React.ReactNode})=>{
    const [user, setuser] = useState<UserType | null>(null)
    const router = useRouter()

    const fetchUser=async()=>{

        const token =getGetToken()
        if( !token){
            router.push("/auth/login")
            return;
        }
        const user: UserType | null= await getUserByToken({token})
        if(!user){
            getRemoveToken()

            return;
        }
       
     
        setuser((value)=>user)
    }
    const logout=()=>{
        getRemoveToken()
        router.push("/auth/login")
        setuser(null)
    
    }
    useEffect(()=>{
        fetchUser()
    },[])
    return(
        <AuthContext.Provider value={{fetchUser,user, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthState
export const useAuthContext = ()=> useContext(AuthContext)