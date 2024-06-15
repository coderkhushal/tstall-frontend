"use client"
import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
import ProfileEditCard from '@/components/web/profile/profile_edit_cad'
import { useAuthContext } from '@/context/AuthContext'
import { getRemoveToken } from '@/hooks/getRemoveToken'
import { DialogTrigger } from '@radix-ui/react-dialog'


import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { FaEdit } from 'react-icons/fa'
import { LuLogOut } from 'react-icons/lu'

const ProfilePage = () => {
  const router = useRouter()
  const { user, logout } = useAuthContext()
  useEffect(() => {
    if (!user) {
      router.push('/auth/login')
    }

  }, [])

  return (
    <div className='h-full bg-primary w-full relative overflow-y-hidden overflow-x-hidden'>
      <Button className='absolute top-2 right-2' onClick={logout} ><LuLogOut className='text-black size-5' /></Button>
      <div className='lg:w-1/2 mx-auto flex flex-col space-y-4 h-2/3 bg-primary'>
        <h1 className=' font-extrabold w-full h-10 items-center flex justify-center'>{user?.userName ? user.userName : "User"}</h1>
        <div className='flex  justify-between  space-x-2 items-center w-full lg:mx-auto  pl-2 pr-4'>


          <div className='flex flex-col items-center justify-center space-y-2  '>

            <div className='rounded-full  h-24 w-24 bg-white'>
              <Image src={user?.urlToImage ? user.urlToImage : "https://images.news18.com/ibnlive/uploads/2024/06/reuters-devils-comet-pons-brooks-2024-06-9b96acd16c54d0c2088f9a608989ad40-16x9.jpg?impolicy=website&width=1200&height=675"} height={40} width={40} alt='profile' className='w-full bg-contain h-full rounded-full' />
            </div>
            <div className='flex space-x-2 items-center '>

            <h1 className='font-bold text-center'>{user?.userName ? user.userName : "User"}</h1>
            {/* <Dialog>
    <DialogTrigger>

            <FaEdit className='size-5'/>
    </DialogTrigger>
    <ProfileEditCard/>
            </Dialog> */}
            </div>
            <h1>{user?.mailId ? user.mailId : "user@gmail.com"}</h1>
          </div>


          <div className='flex text-center flex-col'>
            <span>
              {user?.followers.length}
            </span>
            <h2>Followers</h2>
          </div>
          <div className='flex text-center flex-col'>
            <span>
              {user?.following.length}
            </span>
            <h2>Following</h2>
          </div>

        </div>
        <h1 className='px-4 font-extrabold'>Interests</h1>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-2  px-2 '>
          {user?.topicsOfInterest && user?.topicsOfInterest.length>0 && user?.topicsOfInterest.map((e, index) => {

            return (
              <Button key={index} variant={"outline"} className='w-full' >{e}</Button>
            )
          })}
          {!user?.topicsOfInterest && <h1 className='px-2'>No Interests</h1>}

        </div>
      </div>
    </div>
  )
}

export default ProfilePage