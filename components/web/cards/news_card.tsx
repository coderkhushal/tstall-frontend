"use client"
import { articles } from '@/constants'
import React, { useEffect, useState } from 'react'


import { useArticleContext } from '@/context/ArticlesContext'
import { useInView } from 'react-intersection-observer'
import Loading from '@/components/ui/loading'
import NewsCardItemLong from './news_card_item_long'
import NewsCardItemShort from './new_card_item_short'

const NewsCard = () => {
   const {articles, fetchArticles,offset} = useArticleContext()
   const { ref, inView } = useInView()
   useEffect(()=>{
      fetchArticles(offset);
   },[])
   const LoadMore=()=>{
      fetchArticles(offset)
    }

  useEffect(() => {
    if (inView) {
      LoadMore()
    }
  }, [inView])
  return (
    <div className='flex flex-col p-2  lg:p-10 h-full overflow-y-auto'>
      {articles.map((item, index) => {

        if(index%3 ==0 ){
          let item2= articles[index+1]
          return(
            <div key={index} className="flex space-x-2 my-4  lg:my-6 lg:space-x-7 h-full">

            <NewsCardItemShort id={item.id} title={item.title} src={item.urlToImage? item.urlToImage : "https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}   content={item.content ? item.content : ""} />
            <NewsCardItemShort id={item2.id} title={item2.title} src={item2.urlToImage? item2.urlToImage :"https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}  content={item2.content ? item2.content:""} />
            </div>
          )
        }
        else if( index%3==1){
          return (
            <div key={index}></div>
          )
        }
        else{ 
          return (
            <NewsCardItemLong id={item.id} title={item.title} src={item.urlToImage ? item.urlToImage :"https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} key={index} content={item.content ?  item.content : ""} />

          )
        }
      })}
      <div ref={ref} className='relative'><Loading/></div>
    </div>
  )
}

export default NewsCard