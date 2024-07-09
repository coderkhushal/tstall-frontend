"use client"
import React from 'react'
import TopbarStories from './topbar_stories'
import { SearchIcon } from 'lucide-react'

import { FaUserCircle } from 'react-icons/fa'
import Link from 'next/link'



const Topbar = ({classname}:{classname?:string}) => {


  return (
    <div className={`${classname}  bg-dark shadow-md rounded-b-xl   `}>
      <div className='flex px-3 h-full items-center  justify-between lg:hidden'>
        <Link href="/search">
        <SearchIcon className='size-8 text-primary' />
        </Link>
        <h1 className='w-full text-center specialtext h-full pt-2'>TSTALL</h1>
        <FaUserCircle className='size-8 text-primary'/>
      </div>
        
        <TopbarStories/>

    </div>
  )
}

export default Topbar