import { routes } from '@/constants'
import React from 'react'
import DeskTopNavigationItem from './desktop_navigationitem'

const DeskTopNavigation = () => {
  return (
    <aside className="bg-gray-800 hidden lg:block text-white w-64 min-h-screen p-4">
    <nav>
        
        <h1 className='my-10  text-3xl text-center w-full logo-font'>Logo</h1>
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