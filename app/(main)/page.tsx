
"use client"
import NewsCard from '@/components/web/cards/news_card'
import DottedBg from '@/components/web/style/dotted_bg'
import Topbar from '@/components/web/topbar/topbar'
import React from 'react'

const HomePage = () => {
  return (
    <div className="w-full h-4/5 flex flex-col">
      <Topbar />
      <div className='h-[98%] relative w-full'>
        <DottedBg/>
        <NewsCard />
      </div>
    </div>
  )
}

export default HomePage