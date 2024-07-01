import Image from 'next/image'
import React from 'react'

const InsightItem = () => {
  return (
    <div className='w-full h-2/3 flex flex-col space-y-4 lg:h-1/3 bg-[#bdb1aa] rounded-3xl p-4'>
      <div className="flex w-full items-center space-x-2">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" className='h-8 w-8 rounded-full' />
        <div className="flex flex-col ">
          <h1 className='font-semibold text-lg my-0'>User name</h1>
          <h1 className=' text-gray-700 my-0'>category of post</h1>
        </div>
      </div>
      <h1 className=" font-bold text-lg text-zinc-950 h-12 px-1">Title here in short ...</h1>
        <img src={"https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg"} height={20} width={20} alt="article Image" className='h-1/2  w-full rounded-xl'/>
        <p className=' -tracking-tightest text-sm text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aut itaque totam ullam laborum nisi autem tempore, quae assumenda sequi vel quisquam suscipit! Quia odit sed exercitationem tempora quo et.</p>
    </div>

  )
}

export default InsightItem