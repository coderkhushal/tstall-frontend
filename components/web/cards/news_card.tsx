"use client"

import React, { useEffect, useState } from 'react'


import { useArticleContext } from '@/context/ArticlesContext'
import { useInView } from 'react-intersection-observer'
import Loading from '@/components/ui/loading'
import NewsCardItemLong from './news_card_item_long'
import NewsCardItemShort from './new_card_item_short'

const NewsCard = () => {
   const {articles,reload ,fetchArticles,offset} = useArticleContext()
   const { ref, inView } = useInView()
   useEffect(()=>{
      reload()
   },[])
   const LoadMore=()=>{
      fetchArticles(offset)
    }

  useEffect(() => {
    if (inView) {
      LoadMore()
    }
  }, [inView])

  if(articles.length==0){
    return(
      <div className='h-full w-full flex items-center justify-center'>
        <Loading/>
      </div>
    )
  }
  return (
    <div className='flex flex-col p-2  lg:p-10 h-full overflow-y-auto'>
      {articles.map((item, index) => {

        if(index%3 ==0 ){
          let item2= articles[index+1]
          return(
            <div key={index} className="grid grid-cols-2 space-x-2 my-4  lg:my-6 lg:space-x-7 h-full">

            <NewsCardItemShort publishTime={item.publishTime} id={item.id} title={item.title} src={item.urlToImage? item.urlToImage : "https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}  userDisliked={item.usersDisliked} content={item.content ? item.content : ""} userLiked={item2.usersLiked}  />
            <NewsCardItemShort publishTime={item2.publishTime} id={item2.id} title={item2.title} src={item2.urlToImage? item2.urlToImage :"https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}  content={item2.content ? item2.content:""} userLiked={item2.usersLiked} userDisliked={item2.usersDisliked} />
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
            
            <NewsCardItemLong LastArticleRef={index==articles.length-1 ? ref : null} id={item.id} userLiked={item.usersLiked} userDisliked= {item.usersDisliked} title={item.title} src={item.urlToImage ? item.urlToImage :"https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} key={index} content={item.content ?  item.content : ""} />

          )
        }
      })}
      
    </div>
  )
}

export default NewsCard