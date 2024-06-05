import { useGetToken } from "./useGetToken"

export const useGetAuthHeaders = () => {
    const token = useGetToken() ? useGetToken() : null
    if(token){
        return {
            'Content-Type': 'application/json',
            Authorization : `Bearer ${token}`
        }

    }
    
}