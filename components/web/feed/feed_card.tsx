
import { ArticleType } from '@/types'
import Link from 'next/link'

import React from 'react'

const FeedCard = ({article, LastArticleRef}:{article : ArticleType, LastArticleRef: 
	  React.LegacyRef<HTMLDivElement>
}) => {
  return (
    <article className="rounded-lg shadow-lg snap-always snap-center  flex-col w-full lg:w-1/2 mx-auto bg-white pb-3 " ref={LastArticleRef}>
			<div className="relative ">
				<img src={(article.urlToImage && article.urlToImage!="")? article.urlToImage : "https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt={"article image"} className="text-center flex items-center justify-center h-40 lg:h-64 w-full" />
				<div className="absolute top-0 left-0 px-6 py-3 font-bold bg-white dark:bg-[#1E2735] text-xl leading-6 rounded-br-lg">
                {article.publishTime.split("T")[0]}
				</div>
			</div>
			<div className="p-3 md:p-6">
				<p className="text-sm  mb-3">
					By
					<span
						
						className="text-blue-600 ml-1  font-light hover:text-opacity-90"
					>
						{article.author ? article.author : ""}
					</span>
				</p>
				<h4 className="font-medium text-md lg:text-2xl leading-1 mb-4">
					{article.title}
					</h4>
				<p className="opacity-60 mb-8">
                {article.description && article.description.substring(0,20)}
                </p>
				<Link href={`/article/${article.id}`}
					
					className="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white py-2 px-5 rounded transition"
				>
				
					Read More
				</Link>
			</div>
		</article>
  )
}

export default FeedCard