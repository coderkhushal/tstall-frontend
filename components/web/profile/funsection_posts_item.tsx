import Link from 'next/link'
import React from 'react'

const FunsectionPostsItem = ({ id, title, image, content }: { id: string, title: string, image?: string, content: string }) => {
    return (
        <div className='rounded-xl  p-2 lg:p-4  w-full h-full  shadow-md bg-white     '>
            <Link href={`/article/${id}`} className='space-y-3 flex-col flex  pt-2 '>
                <img src="https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg" alt="llm" className='w-full rounded-xl h-1/2' />

            <h1 className='text-base lg:text-xl font-bold px-3 '>{title}</h1>
            <div className="flex justify-between items-center lg:px-1">

                <h1 className='text-xs lg:text-base text-gray-500  font-bold lg:px-2 '>{content.substring(0, 40)}</h1>
            </div>
            </Link>
        </div>

    )
}

export default FunsectionPostsItem