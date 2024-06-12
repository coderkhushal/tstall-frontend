import { ArticleType } from '@/types'
import Link from 'next/link'
import React from 'react'

const BookMarkItem = ({article}:{article: ArticleType}) => {
  return (
    <Link href={`/article/${article.id}`}>
    <div className="flex p-4 xl:p-6 hover:scale-110 transition-all">
    <div className="mr-4">
        <span
            className={`w-[60px] h-[60px] rounded-full text-3xl inline-flex justify-center items-center  text-white mb-6`}
            >
            <img src={article.urlToImage} alt="news" className="w-full h-full object-cover rounded-full" />
        </span>
    </div>
    <div>
        <h4 className="text-2xl font-medium mb-4">{article.title}</h4>
        <p className="opacity-80">{article.description}</p>
    </div>
</div>
            </Link>
  )
}

export default BookMarkItem