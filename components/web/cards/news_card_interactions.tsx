import { Bookmark, ThumbsDown, ThumbsUp, ThumbsUpIcon } from 'lucide-react'
import React from 'react'
import { FaBookmark, FaThumbsDown, FaThumbsUp } from 'react-icons/fa'

const NewsCardInteractions = () => {
  return (
    <div className='flex text-xl   w-full justify-around absolute bottom-2 left-0'>

    <FaThumbsUp className='cursor-pointer transition-all hover:scale-110'/>
    <FaBookmark className='cursor-pointer transition-all hover:scale-110'/>
    <FaThumbsDown className='cursor-pointer transition-all hover:scale-110'/>
    </div>
  )
}

export default NewsCardInteractions 