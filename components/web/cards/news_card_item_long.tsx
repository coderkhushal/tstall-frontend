
import React from 'react'

import NewsCardInteractions from './news_card_interactions'
import Link from 'next/link'

const NewsCardItemLong = ({ id, title, content, src }: { id: string, title: string, src: string, content: string}) => {

  return (

    <div className={` border-2 pb-2 h-4/5 lg:h-full  border-black rounded-sm p-2 relative bg-gray-200  w-full"`}>
      <Link href={"article/" + id}>

        <h1 className='h-1/5 p-8 w-full lg:text-3xl   overflow-x-auto overflow-y-hidden font-extrabold'>
          {title.substring(0, 60)}
        </h1>
        <img alt={title.substring(0, 10) + "..."} src={src} className='h-1/3 lg:h-1/2  w-full' />
        <div className='  flex overflow-x-hidden lg:hidden my-2 h-2/5'>
          {content.substring(0, 200)+"..."}
        </div>
        <div className='   overflow-x-hidden hidden lg:flex my-2 h-2/5'>
          {content.substring(0, 600)+"..."}
        </div>
        

        <NewsCardInteractions />
      </Link>
    </div>

  )
}


export default NewsCardItemLong