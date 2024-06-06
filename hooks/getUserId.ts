"use client"
import {jwtDecode} from 'jwt-decode'


export const getUserId= (token: string) => {
    
    if (token) {
        try{

            const {sub}= jwtDecode(token)
            if(sub){
                return sub;
            }
            else{
                return null;
            }
            
        }
        catch(err){
            console.log("token decode error")
            return false;
        }
    }
    console.log("token not found")
    return false;
}