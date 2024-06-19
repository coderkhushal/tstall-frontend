import { Button } from '@/components/ui/button'

import Link from 'next/link'
import React from 'react'


const TopAuthBar = () => {  
  return (
    <div className=' fixed top-18 left-0 lg:relative lg:h-full lg:flex lg:flex-col w-full '>

      
    <div className=' w-full lg:h-full lg:mr-0 m-auto '>

        <div className="px-7  bg-quarternary shadow-lg h-24 lg:h-full  opacity-80 rounded-2xl mb-2 lg:mb-0 lg:w-full">
            <div className="flex lg:flex-col lg:justify-around justify-between items-center h-full">

              <Link href="/auth/register">
               <Button variant={"outline"} className='p-6'>
                Signup
                </Button>
              </Link>
              <Link href="/auth/login">
               <Button variant={"outline"} className='p-6' >Signin</Button>
            
              </Link>

            </div>
        </div>
    </div>
    </div>
  )
}

export default TopAuthBar