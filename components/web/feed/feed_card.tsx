
import { ArticleType } from '@/types'
import Link from 'next/link'

import React from 'react'
import NewsCardInteractions from '../cards/news_card_interactions'
import Comments from '../comments/comments'
import { Drawer, DrawerTrigger } from '@/components/ui/drawer'
import { FaComment } from 'react-icons/fa'
import { SlCalender } from 'react-icons/sl'

const FeedCard = ({ article, LastArticleRef }: {
	article: ArticleType, LastArticleRef:
	React.LegacyRef<HTMLDivElement>
}) => {
	return (
		<article className="rounded-lg shadow-lg z-10 snap-always snap-center  flex-col w-full lg:w-1/2 mx-auto bg-primary pb-3 " ref={LastArticleRef}>
			<div className="relative ">
				<img src={(article.urlToImage && article.urlToImage != "") ? article.urlToImage : "https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt={"article image"} className="text-center flex items-center justify-center h-40 lg:h-64 w-full" />

			</div>
			<div className="p-3 md:p-6 ">
				<div className="flex space-x-4 items-center ">

				<p className="text-sm  mb-3">
					{article.author && "By"}
					<span
						className="text-yellow-800 ml-1  font-light hover:text-opacity-90"
						>
						{article.author ? article.author : ""}

					</span>
				</p>
				<div className='flex items-center space-x-2 mb-3'>
					<SlCalender className='mr-2' />

					<span>
						{article?.publishTime.split("T")[0]}
					</span>
					<span>

						{article?.publishTime.split("T")[1].substring(0, 8)}
					</span>
				</div>
						</div>
				<h4 className="font-medium text-md lg:text-2xl leading-0 mb-4">
					{article.title}
				</h4>
				<p className="opacity-60 mb-8 text-sm">
					{article.description && article.description.substring(0, 200)}
				</p>
				<div className='flex px-2 justify-evenly space-x-8'>

					<Link href={`/article/${article.id}`}

						className="bg-transparent w-48 hover:bg-yellow-600 border border-yellow-600 hover:text-white py-2 px-5 rounded transition"
					>

						More
					</Link>
					<Drawer>
						<DrawerTrigger>

							<FaComment className='cursor-pointer transition-all hover:scale-110  size-4 lg:size-5' />
						</DrawerTrigger>
						<Comments articleId={article.id} />
					</Drawer>
					<NewsCardInteractions articleid={article.id} userDisliked={article.usersDisliked} userLiked={article.usersLiked} classname=' lg:text-xl space-x-6 justify-around w-full text-md' />

				</div>
			</div>
		</article>
	)
}

export default FeedCard