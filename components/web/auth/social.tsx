"use client"
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Button } from '@/components/ui/button'


const SERVER = process.env.NEXT_PUBLIC_SERVER

const Social =() => {

  
  return (
    <div className='flex w-full gap-x-4'>
        <Button variant={"outline"} className='w-full' >
            <FcGoogle className='text-2xl w-full'/>

        </Button>
        
    </div>
  )
}

export default Social