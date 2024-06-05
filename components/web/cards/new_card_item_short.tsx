
import React from 'react'

import NewsCardInteractions from './news_card_interactions'
import Link from 'next/link'

const NewsCardItemShort = ({ id, title, content, src }: { id: string, title: string, src: string, content: string }) => {

  return (

    <div className={` border-2 pb-10   border-black rounded-sm p-2 relative bg-gray-200 "w-full flex-1 h-[70vh]" `}>
      <Link href={"article/" + id}>

        <h1 className='h-1/4 p-2 w-full lg:text-3xl overflow-x-auto font-extrabold'>
          {title.substring(0, 30)+"..."}
        </h1>
        <img alt={title.substring(0, 10) + "..."} src={src} className='h-1/2 w-full' />
        <div className='h-2/5  flex overflow-x-hidden my-2 lg:hidden md:flex '>
          { content.substring(0,40)+"..."}
        </div>
        <div className='h-2/5 text-2xl  overflow-x-hidden my-2 hidden md:hidden lg:flex '>
          { content.substring(0,300)+"..."}
        </div>

        <NewsCardInteractions />
      </Link>
    </div>

  )
}


export default NewsCardItemShort