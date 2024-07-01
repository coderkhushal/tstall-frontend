"use client"
import { ArticleType } from '@/types'
import Link from 'next/link'
import React from 'react'

const CurrentAffairItem = ({article}: {article: ArticleType}) => {
  return (
    
      <Link href={`/article/${article.id}`} className='h-full w-full'>
    <div className='flex items-center w-full h-32  space-x-4 bg-[#D9D0BE] p-4 rounded-2xl'>
        <img src={article.urlToImage ? article.urlToImage : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} alt="source" className=' h-full w-12 lg:w-32' />
        <div className="flex flex-col justify-center">
            <h1 className='text-xl text-gray-400 font-semibold'>{article.source?.name}</h1>
            <h1 className='text-lg h-20  flex  overflow-y-scroll lg:text-2xl font-bold'>{article.title}</h1>
        </div>
    </div>
      </Link>
  )
}

export default CurrentAffairItem