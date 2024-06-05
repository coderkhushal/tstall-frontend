"use client"
import React from 'react'
import TopbarStories from './topbar_stories'
import { SearchIcon } from 'lucide-react'
import { CgProfile } from 'react-icons/cg'
import { FaUserCircle } from 'react-icons/fa'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

const Topbar = () => {
  const session = useSession()
  const user = session.data?.user
  return (
    <div className='w-full relative h-82 bg-primary shadow-md justify-end rounded-b-xl  flex flex-col'>
      <div className='flex px-3 h-full items-center  justify-between'>
        <SearchIcon className='size-8' />
        <h1 className='w-full text-center specialtext h-full py-2'>TSTALL</h1>
        {user?.image ? <Image src={user.image} height={40} width={40} className='rounded-full' alt='profile' /> : <FaUserCircle className='size-8'/>}
      </div>
        
        <TopbarStories/>

    </div>
  )
}

export default Topbar