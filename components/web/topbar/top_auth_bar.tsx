import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import React from 'react'


const TopAuthBar = () => {  
  return (
    <div className=' fixed top-18 left-0  lg:flex lg:justify-end  w-full '>

      
    <div className=' w-full lg:w-[86%] lg:mr-0 m-auto '>

        <div className="px-7 bg-dark shadow-lg h-24 opacity-80 rounded-2xl mb-2">
            <div className="flex justify-between items-center h-full">


               <Button variant={"outline"} className='p-6'>Signup</Button>
               <Button variant={"outline"} className='p-6' onClick={()=>signIn("google")}>Signin</Button>
            

            </div>
        </div>
    </div>
    </div>
  )
}

export default TopAuthBar