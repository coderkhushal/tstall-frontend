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
    user : UserType | null
}

export const AuthContext = createContext<AuthContextType>({
    fetchUser: async()=>{},
    user: null
})

const AuthState = ({children}:{children:React.ReactNode})=>{
    const [user, setuser] = useState<UserType | null>(null)
    const router = useRouter()
    const pathname = usePathname()
    const fetchUser=async()=>{
        if(PublicRoutes.includes(pathname)){
            return;
        }
        const token =getGetToken()
        if( !token){
            router.push("/auth/login")
            return;
        }
        const user: UserType | null= await getUserByToken({token})
        if(!user){
            getRemoveToken()
            router.push("/auth/login")
            return;
        }
       
     
        setuser((value)=>user)
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