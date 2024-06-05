import Link from 'next/link'
import React from 'react'

const DeskTopNavigationItem = ({name, Icon, href}:{name: string, Icon: any,href: string}) => {
  return (
    <li className="opcion-con-desplegable">
      <Link href={href}>
          <div className="flex items-center justify-between p-2 hover:bg-gray-700">
            <div className="flex space-x-4 items-center">
              <Icon className="size-6" />
              <span className='text-xl'>{name}</span>
            </div>
            <i className="fas fa-chevron-down text-xs"></i>
          </div>
      </Link>
          
        </li>
  )
}

export default DeskTopNavigationItem