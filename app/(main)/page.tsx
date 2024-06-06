
"use client"
import NewsCard from '@/components/web/cards/news_card'
import Topbar from '@/components/web/topbar/topbar'
import React from 'react'

const HomePage = () => {
  return (
    <div className="w-full h-4/5 flex flex-col">
      <Topbar />
      <div className='h-[98%] w-full'>
        <NewsCard />
      </div>
    </div>
  )
}

export default HomePage