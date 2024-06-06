"use client"
import { likeArticle } from '@/actions/articles'
import { getUserId } from '@/hooks/getUserId'
import React, { Suspense, useEffect, useState } from 'react'
import { FaBookmark, FaThumbsDown, FaThumbsUp } from 'react-icons/fa'

const NewsCardInteractions = ({articleid ,userLiked }:{articleid:string, userLiked: string[]}) => {
  const [liked, setliked] = useState(false)
  useEffect(()=>{
    let userId= getUserId()
    if(!userId){
      return;
    }
    if(userLiked.includes(userId)){
      setliked(true)
    }
  }, [])
 
  const  handleClick= async ({type}:{type:"LIKE"|"DISLIKE"|"BOOKMARK"}) => {

    let userId = getUserId()
    console.log(userId, articleid)
    if(!userId){
      alert("user id not found");
      return ;
    }
    switch(type){
      case "LIKE":
        const result = await likeArticle({articleId: articleid , userId: userId})
        if(result.success){
          setliked(true)
        }
        break;
      case "DISLIKE":
        break;
      case "BOOKMARK":
        break;
    }

  }

  return (
    <Suspense>

    <div className='flex text-xl   w-full justify-around absolute bottom-2 left-0'>

    <FaThumbsUp className={`cursor-pointer transition-all hover:scale-110 ${liked &&  " text-red-400"}`} onClick={()=>handleClick({type:"LIKE"})}/>
    <FaBookmark className='cursor-pointer transition-all hover:scale-110' onClick={()=>handleClick({type:"BOOKMARK"})}/>
    <FaThumbsDown className='cursor-pointer transition-all hover:scale-110' onClick={()=>handleClick({type:"DISLIKE"})}/>
    </div>
    </Suspense>
  )
}

export default NewsCardInteractions 