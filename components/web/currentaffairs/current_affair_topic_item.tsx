
import { Forward } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CurrentAffairTopicItem = ({ topic, category  }: { topic: string, category: string }) => {
  return (
    <Link href={`/current-affairs/category=${category}&topic=${topic}`} className='w-full h-full'>

    <div className='w-full transition-all hover:scale-105 flex justify-between px-4 lg:h-20 lg:px-6 bg-secondarydark  text-tertiary shadow-lg  rounded-xl p-3'>
      <h1 className='text-lg lg:text-2xl font-semibold rounded-xl'>{topic}</h1>
      <Forward />
    </div>
    </Link>
  )
}

export default CurrentAffairTopicItem