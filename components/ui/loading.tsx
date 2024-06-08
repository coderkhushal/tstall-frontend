import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div className='h-full w-full flex justify-center items-center absolute '>
      <Image unoptimized src='/assets/loading.gif' alt='loading' height={100} width={100} />
    </div>
  )
}

export default Loading