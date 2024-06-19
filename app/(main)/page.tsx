
"use client"
import NewsCard from '@/components/web/cards/news_card'
import DottedBg from '@/components/web/style/dotted_bg'
import Topbar from '@/components/web/topbar/topbar'
import React from 'react'

const HomePage = () => {
  return (
    <div className="w-full h-4/5 lg:h-full flex flex-col">
      <Topbar classname='justify-end w-full lg:hidden relative h-82 flex flex-col' />
      <div className='h-[98%] lg:h-full flex relative w-full'>
        
        <NewsCard />
        <Topbar classname="h-full hidden lg:flex lg:flex-col "/>
      </div>
    </div>
  )
}

export default HomePage