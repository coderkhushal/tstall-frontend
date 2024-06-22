"use client"
import { DesktopRoutes } from '@/constants'
import React, { useState } from 'react'
import DeskTopNavigationItem from './desktop_navigationitem'
import Image from 'next/image'
import Link from 'next/link'

const DeskTopNavigation = () => {
  const [expand, setexpand] = useState<boolean>(false)
  return (
    
    <aside onMouseEnter={()=>{setexpand(true)}} onMouseLeave={()=>{setexpand(false)}} className={`bg-dark hidden lg:block text-white ${expand ? "w-64" : "w-20"} min-h-screen transition-all p-4`} >
    <nav>
        <Link href="/" className='flex space-x-2 my-3 mb-6 items-start h-14 justify-start'>

    <Image src="/assets/logo.jpeg" alt="logo" width={50} height={50} className='   h-full rounded-xl' />
    {expand && <h1 className='w-full text-center specialtext h-full py-2'>TSTALL</h1>}
        </Link>
      <ul className="space-y-4">
     {DesktopRoutes.map((e, index)=>
        <DeskTopNavigationItem isExpanded={expand} name= {e.name} key= {index} Icon={e.Icon} href={e.href}/>
    )}
        
        
        
 
      </ul>
    </nav>
  </aside>
  )
}

export default DeskTopNavigation