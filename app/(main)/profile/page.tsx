"use client"
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import { LuLogOut } from 'react-icons/lu'

const ProfilePage = () => {
  const session = useSession()
  const user = session.data?.user

  return (
    <div className='h-full bg-primary w-full relative '>
<Button className='absolute top-2 right-2' onClick={()=>signOut()} ><LuLogOut className='text-black size-5'/></Button>
      <div className='lg:w-1/2 mx-auto flex flex-col space-y-4 h-2/3 bg-primary'>
        <h1 className=' font-extrabold w-full h-10 items-center flex justify-center'>{user?.name ? user.name : "User"}</h1>
        <div className='flex  justify-between space-x-2 items-center w-full lg:mx-auto px-6'>


          <div className='flex flex-col items-center justify-center space-y-2  '>

            <div className='rounded-full  h-24 w-24 bg-white'>
              <Image src={user?.image ? user.image : "https://images.news18.com/ibnlive/uploads/2024/06/reuters-devils-comet-pons-brooks-2024-06-9b96acd16c54d0c2088f9a608989ad40-16x9.jpg?impolicy=website&width=1200&height=675"} height={40} width={40} alt='profile' className='w-full bg-contain h-full rounded-full' />
            </div>
            <h1 className='font-bold text-center'>{user?.name ? user.name : "User"}</h1>
            <h1>{user?.email ? user.email : "user@gmail.com"}</h1>
          </div>


          <div className='flex text-center flex-col'>
            <span>
              345
            </span>
            <h2>Followers</h2>
          </div>
          <div className='flex text-center flex-col'>
            <span>
              345
            </span>
            <h2>Following</h2>
          </div>

        </div>
        <h1 className='px-4 font-extrabold'>Interests</h1>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-2  px-2 '>

        <Button variant={"outline"} className='w-full' >Education</Button>
        <Button variant={"outline"} className='w-full' >Sports</Button>
        <Button variant={"outline"} className='w-full' >Technology</Button>
        <Button variant={"outline"} className='w-full' >Politics</Button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage