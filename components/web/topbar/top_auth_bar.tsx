import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'


const TopAuthBar = () => {  
  return (
    <div className=' fixed top-18 left-0  lg:flex lg:justify-end  w-full '>

      
    <div className=' w-full lg:w-[86%] lg:mr-0 m-auto '>

        <div className="px-7 bg-dark shadow-lg h-24 opacity-80 rounded-2xl mb-2">
            <div className="flex justify-between items-center h-full">

              <Link href="/auth/signup">
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