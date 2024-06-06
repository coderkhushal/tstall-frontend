
import React from 'react'

import NewsCardInteractions from './news_card_interactions'
import Link from 'next/link'

const NewsCardItemLong = ({ id, title, content, src ,userLiked }: { id: string, title: string, src: string, content: string, userLiked: string[]}) => {

  return (

    // <div className={` border-2 pb-2 h-4/5 lg:h-full  border-black rounded-sm p-2 relative bg-gray-200  w-full"`}>
    //   <Link href={"article/" + id}>

    //     <h1 className='h-1/5 p-8 w-full lg:text-3xl   overflow-x-auto overflow-y-hidden font-extrabold'>
    //       {title.substring(0, 60)}
    //     </h1>
    //     <img alt={title.substring(0, 10) + "..."} src={src} className='h-1/3 lg:h-1/2  w-full' />
    //     <div className='  flex overflow-x-hidden lg:hidden my-2 h-2/5'>
    //       {content.substring(0, 200)+"..."}
    //     </div>
    //     <div className='   overflow-x-hidden hidden lg:flex my-2 h-2/5'>
    //       {content.substring(0, 600)+"..."}
    //     </div>
        

    //     <NewsCardInteractions />
    //   </Link>
    // </div>
    <article>
			<div className="grid grid-cols-12 relative bg-gray-200 border-4 items-center gap-6">
				<div className="col-span-12 lg:col-span-7 lg:order-2">
					<img
						src={src}
						alt={title.substring(0, 10) + "..."}
						className="max-w-full h-auto rounded"
					/>
				</div>
				<div className="col-span-12 lg:col-span-5 lg:order-1">
					<div className="mt-6 lg:mt-0 lg:pl-6">
						<h4 className="font-medium text-2xl md:text-[40px] md:leading-[50px] mb-2">
							{title.substring(0,120)}
						</h4>
						<p className="md:text-lg opacity-60 mt-3 mb-6">
							{content.substring(0,300)}
						</p>
						
					</div>
				</div>
      <NewsCardInteractions articleid={id} userLiked={userLiked}/>
			</div>
		</article>

  )
}


export default NewsCardItemLong