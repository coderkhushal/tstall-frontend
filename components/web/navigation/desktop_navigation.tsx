import { routes } from '@/constants'
import React from 'react'
import DeskTopNavigationItem from './desktop_navigationitem'
import Image from 'next/image'
import Link from 'next/link'

const DeskTopNavigation = () => {
  return (
    <aside className="bg-gray-800 hidden lg:block text-white w-64 min-h-screen p-4">
    <nav>
        <Link href="/" className='flex space-x-2 my-3 mb-6 items-center justify-center'>

    <Image src="/assets/logo.jpeg" alt="logo" width={50} height={50} className=' mx-auto  rounded-xl' />
    <h1 className='w-full text-center specialtext h-full py-2'>TSTALL</h1>
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