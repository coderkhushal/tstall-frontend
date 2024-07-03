import { Button } from '@/components/ui/button'
import { ArticleType } from '@/types'
import Image from 'next/image'
import React from 'react'
import NewsCardInteractions from '../cards/news_card_interactions'
import Link from 'next/link'

const InsightItem = ({LastPostRef, post}: {LastPostRef: React.LegacyRef<HTMLDivElement> , post: ArticleType }) => {
  const [showContent, setShowContent] = React.useState<boolean>(false)
  const handleShowContent = () => {
    setShowContent(!showContent)
  }
  return (
    
    <div ref={LastPostRef} className='lg:w-3/5 lg:mx-auto  flex flex-col space-y-4  bg-[#bdb1aa] rounded-3xl p-4'>
      <Link href={`artcles/${post.id}`} className=' w-full h-full'>
      <div className="flex w-full items-center space-x-2 lg:w-5/6 mx-auto ">
        <img src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} alt="profile" className='h-8 w-8 rounded-full' />
        <div className="flex flex-col ">
          <h1 className='font-semibold text-lg my-0'>{post.source?.name}</h1>
          <h1 className=' text-gray-700 my-0'>Funsection</h1>
        </div>
      </div>
      <div className="h-full w-full flex flex-col space-y-4 ">

      <h1 className={` ${showContent && "hidden" } font-bold text-lg lg:w-4/5 lg:mx-auto text-zinc-950  px-1`}>{(post.title).substring(0,60)}</h1>
      <h1 className={` ${!showContent && "hidden" } font-bold text-lg lg:w-4/5 lg:mx-auto text-zinc-950  px-1`}>{(post.title)}</h1>
        <img src={post.urlToImage ? post.urlToImage :"https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg"} height={20} width={20} alt="article Image" className=' w-full  lg:w-4/5 lg:mx-auto lg:h-[50vh]  rounded-xl'/>
        <p className={` ${showContent && "hidden"} tracking-tightest lg:w-4/5 lg:mx-auto lg:tracking-normal text-sm text-gray-800`}>{(post.content).substring(0,200)} </p>
        <p className={` ${!showContent && "hidden"} tracking-tightest lg:tracking-normal text-sm text-gray-800 lg:w-4/5 lg:mx-auto`}>{(post.content)} </p>
        {post.content.length > 200 && <div className='w-full font-light text-xs text-center text-white underline cursor-pointer' onClick={handleShowContent}>show {showContent ? "Less" : "More"}</div>}
        {/* <div className="flex justify-start lg:w-5/6 mx-auto">

        <NewsCardInteractions articleid={post.id} userDisliked={post.usersDisliked} userLiked={post.usersLiked}  variant={"INSIGHTS"} />
        </div> */}
      </div>
    </Link>
    </div>

  )
}

export default InsightItem