"use client"
import { bookmarkArticle, dislikeArticle, likeArticle } from '@/actions/articles'
import { useAuthContext } from '@/context/AuthContext'
import { getUserId } from '@/hooks/getUserId'
import React, { Suspense, useEffect, useState } from 'react'
import { FaBookmark, FaThumbsDown, FaThumbsUp } from 'react-icons/fa'
import { set } from 'zod'

const NewsCardInteractions = ({ articleid, userLiked, userDisliked , classname}: {classname?:string,  articleid: string, userLiked: string[], userDisliked: string[] }) => {
  const {user} = useAuthContext()
  const [liked, setliked] = useState(false)
  const [disliked, setdisliked] = useState(false)
  const [bookmarked, setbookmarked] = useState(false)
  const [numLiked, setnumLiked] = useState<number> (userLiked.length)
  const [numDisliked, setnumDisliked] = useState<number> (userDisliked.length)
  useEffect(() => {

    let userId = getUserId()
    if (!userId) {
      return;
    }
    
    if (userLiked.includes(userId)) {
      setliked(true)
    }
    if (userDisliked.includes(userId)) {
      setdisliked(true)
    }
    if(user?.bookmarks.includes(articleid)){
      setbookmarked(true)
    }
  }, [])

  const handleClick = async ({ type }: { type: "LIKE" | "DISLIKE" | "BOOKMARK" }) => {

    let userId = getUserId()
    console.log(userId, articleid)
    if (!userId) {
      alert("user id not found");
      return;
    }
    let result;
    switch (type) {
      case "LIKE":
        result = await likeArticle({ articleId: articleid, userId: userId })
        if (result.success) {
          setliked(true)
          setnumLiked(value=>(value+1))
        }
        else {
          alert(result.error)
        }
        break;
        case "DISLIKE":
          result = await dislikeArticle({ articleId: articleid, userId: userId })
          if (result.success) {
            setdisliked(true)
            setnumDisliked(value=>(value+1))
          
        }
        else {
          alert(result.error)
        }
        break;

      case "BOOKMARK":
        result = await bookmarkArticle({ articleId: articleid, userId: userId })
        // console.log(result)
        if (result.success) {
          setbookmarked(true)
        }
        else {
          alert(result.error)
        }
        break;
    }

  }

  return (
    <Suspense>

      <div className={` ${classname} flex  bg-secondary  justify-around  py-2 `}>
      <div className="flex items-center justify-center space-x-1">

        <FaThumbsUp className={`cursor-pointer transition-all hover:scale-110 ${liked && " text-red-400"}`} onClick={() => handleClick({ type: "LIKE" })} />
        <span>

        {numLiked}
        </span>
      </div>
      <div className="flex items-center justify-center">

        <FaBookmark className={`cursor-pointer transition-all hover:scale-110 ${bookmarked && " text-yellow-700"}`}  onClick={() => handleClick({ type: "BOOKMARK" })} />
      </div>
      <div className="flex items-center justify-center space-x-1">

        <FaThumbsDown className={`cursor-pointer transition-all hover:scale-110 ${disliked && " text-red-400"}`} onClick={() => handleClick({ type: "DISLIKE" })} />
        <span>
        {numDisliked}
          </span>
      </div>
      </div>
    </Suspense>
  )
}

export default NewsCardInteractions 