import { MobileRoutes } from '@/constants'
import React from 'react'
import MobileNavigationItem from './mobile_navigation_item'

const MobileNavigation = () => {

    return (
        <div className='lg:hidden fixed bottom-0 w-full '>

      
        <div className='lg:hidden w-full m-auto '>

            <div className=" bg-dark shadow-lg rounded-2xl mb-2">
                <div className="flex">


                    {MobileRoutes.map((e, index) =>
                        <MobileNavigationItem key={index} Icon={e.Icon} href={e.href} />
                    )}

                </div>
            </div>
        </div>
        </div>
    )
}

export default MobileNavigation