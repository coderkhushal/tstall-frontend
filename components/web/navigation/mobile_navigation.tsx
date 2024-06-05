import { routes } from '@/constants'
import React from 'react'
import MobileNavigationItem from './mobile_navigation_item'

const MobileNavigation = () => {

    return (
        <div className='lg:hidden fixed bottom-0 w-full '>

      
        <div className='lg:hidden w-5/6 m-auto '>

            <div className="px-7 bg-dark shadow-lg rounded-2xl mb-2">
                <div className="flex">


                    {routes.map((e, index) =>
                        <MobileNavigationItem key={index} Icon={e.Icon} href={e.href} />
                    )}

                </div>
            </div>
        </div>
        </div>
    )
}

export default MobileNavigation