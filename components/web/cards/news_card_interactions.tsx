"use client"
import { bookmarkArticle, dislikeArticle, likeArticle, removeReaction, unBookmarkArticle } from '@/actions/articles'
import  ConfettiButton  from '@/components/magicui/confetti'
import { useAuthContext } from '@/context/AuthContext'
import { getUserId } from '@/hooks/getUserId'
import { BookMarked } from 'lucide-react'
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

    if (!userId) {
      alert("user id not found");
      return;
    }
    let result;
    switch (type) {
      case "LIKE":
        if(liked){
          result = await removeReaction({ articleId: articleid, userId: userId })
          if (result.success) {
            setliked(false)
            setnumLiked(value=>(value-1))
          }
          else {
            alert(result.error)
          }
        } 
        else{

          result = await likeArticle({ articleId: articleid, userId: userId })
          console.log(result)
          if (result.success) {
            setliked(true)
            setnumLiked(value=>(value+1))
          }
          else {
            alert(result.error)
          }
        }
        break;
        case "DISLIKE":
          if(disliked){
            result = await removeReaction({ articleId: articleid, userId: userId })
            if (result.success) {
              setdisliked(false)
              setnumDisliked(value=>(value-1))
            }
            else {
              alert(result.error)
            }
          } 
          else{
            result = await dislikeArticle({ articleId: articleid, userId: userId })
            if (result.success) {
              setdisliked(true)
              setnumDisliked(value=>(value+1))
            
          }
          else {
            alert(result.error)
          }
        }
        break;

      case "BOOKMARK":
        if(bookmarked){
          result = await unBookmarkArticle({ articleId: articleid, userId: userId })
          if (result.success) {
            setbookmarked(false)
          }
          else {
            alert(result.error)
          }

        }
        else{
          result = await bookmarkArticle({ articleId: articleid, userId: userId })
          // console.log(result)
          if (result.success) {
            setbookmarked(true)
          }
          else {
            alert(result.error)
          }
        }
          break;
    }

  }

  return (
    <Suspense>

      <div className={` ${classname} flex   justify-around  py-2 `}>
      <div className="flex items-center justify-center space-x-1">
      {(!liked && !disliked) ?  <ConfettiButton >


        <FaThumbsUp className={`cursor-pointer transition-all hover:scale-110 ${liked && " text-red-400"}`} onClick={() => handleClick({ type: "LIKE" })} />
      </ConfettiButton> : 
        <FaThumbsUp className={`cursor-pointer transition-all hover:scale-110 ${liked && " text-red-400"}`} onClick={() => handleClick({ type: "LIKE" })} />
      }
        <span>

        {numLiked}
        </span>
      </div>
      <div className="flex items-center justify-center">
      {!bookmarked ? <ConfettiButton>

        <FaBookmark className={`cursor-pointer transition-all hover:scale-110 ${bookmarked && " text-yellow-700"}`}  onClick={() => handleClick({ type: "BOOKMARK" })} />
      </ConfettiButton>:
          <FaBookmark className={`cursor-pointer transition-all hover:scale-110 ${bookmarked && " text-yellow-700"}`}  onClick={() => handleClick({ type: "BOOKMARK" })} />
      }
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