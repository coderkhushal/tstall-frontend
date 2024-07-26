"use client"
import { getUserById } from '@/actions/user'
import { useAuthContext } from '@/context/AuthContext'
import { getGetToken } from '@/hooks/getGetToken'
import { UserType } from '@/types'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const ChattingTopBar = ({userId}:{userId: string}) => {
  const [userProfile, setUserProfile] = React.useState<UserType | null>(null)
  const router = useRouter()
  const {user, fetchUser} = useAuthContext()
  useEffect(() => {

    fetchuserProfile()

  }, [user])
  const fetchuserProfile = async () => {
    if(!user){
      await fetchUser()
    }
    if(user){

      const data = await getUserById({ id:userId });
      
      setUserProfile(value => data)
    }
  }
  return (
    <div className='flex w-full bg-tertiary h-12 shadow-xl '>
      <div className='flex items-center justify-between w-full px-4'>
        <div className='flex items-center space-x-2'>
          <img src={userProfile?.urlToImage ? userProfile.urlToImage : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} className='h-8 w-8 rounded-full' />
          <h1 className='text-white text-lg font-bold'>{userProfile?.userName}</h1>
        </div>
        
      </div>
    </div>
  )
}

export default ChattingTopBar