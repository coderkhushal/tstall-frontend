import { Coffee } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div className='h-full w-full flex justify-center items-center absolute '>
      Loading
      <Coffee className='my-2 size-5 text-dark'/>
    </div>
  )
}

export default Loading