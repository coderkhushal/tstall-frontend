"use client"
import React from 'react'
import TopbarStories from './topbar_stories'
import { SearchIcon } from 'lucide-react'

import { FaUserCircle } from 'react-icons/fa'



const Topbar = () => {


  return (
    <div className='w-full relative h-82 bg-primary shadow-md justify-end rounded-b-xl  flex flex-col'>
      <div className='flex px-3 h-full items-center  justify-between'>
        <SearchIcon className='size-8' />
        <h1 className='w-full text-center specialtext h-full py-2'>TSTALL</h1>
        <FaUserCircle className='size-8'/>
      </div>
        
        <TopbarStories/>

    </div>
  )
}

export default Topbar