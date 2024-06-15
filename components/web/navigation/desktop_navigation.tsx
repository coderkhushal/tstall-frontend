import { routes } from '@/constants'
import React from 'react'
import DeskTopNavigationItem from './desktop_navigationitem'
import Image from 'next/image'
import Link from 'next/link'

const DeskTopNavigation = () => {
  return (
    <aside className="bg-gray-800 hidden lg:block text-white w-64 min-h-screen p-4">
    <nav>
        <Link href="/">

    <Image src="/assets/logo.jpeg" alt="logo" width={150} height={50} className='mb-7 mx-auto  rounded-xl' />
        </Link>
      <ul className="space-y-4">
     {routes.map((e, index)=>
        <DeskTopNavigationItem name= {e.name} key= {index} Icon={e.Icon} href={e.href}/>
    )}
        
        
        
 
      </ul>
    </nav>
  </aside>
  )
}

export default DeskTopNavigation