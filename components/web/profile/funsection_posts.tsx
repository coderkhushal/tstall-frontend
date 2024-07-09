"use client"
import { useAuthContext } from '@/context/AuthContext'
import React, { useEffect, useState } from 'react'
import FunsectionPostsItem from './funsection_posts_item'
import { ArticleType } from '@/types'
import { getFunsectionPostByUser } from '@/actions/citizen-insights'
import Loading from '@/components/ui/loading'

const FunsectionPosts = () => {
    const {user, fetchUser} = useAuthContext()
    const [posts, setposts] = useState<ArticleType[] | null>(null)
    useEffect(()=>{
        fetchFunsectionPosts(0)
    },[user])
    const fetchFunsectionPosts = async (page: number) => {
        if(!user){
            await fetchUser()
        }
        if(user){
            const data= await getFunsectionPostByUser(page)
            if(data?.success){
                setposts(value=>data.data)
            }
            else{
                setposts([])
                alert(data?.error ? data.error : "Some Error Occured")
            }
        }
    }
  return (
    <div>
        <div className="w-4/5 lg:w-3/5 border-2 mx-auto border-gray-400 my-4"></div>
      <div className="flex py-4 flex-col w-4/5 lg:w-3/5 mx-auto ">
        <h1 className='font-semibold text-2xl'>Insights uploaded </h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 py-4 justify-items-center lg:px-10 gap-4 w-full h-[20vh] mx-auto ">
          {(posts && posts.length>0 ) && posts.map((post, index)=>{
            return(
              <FunsectionPostsItem key={index} id={post.id}  title={post.title} image={post.urlToImage} content={post.content} />
            )
        })}
  
      
            {!posts && <Loading/>}
            {posts && posts.length==0 &&
             <h1 className='font-semibold text-lg lg:text-2xl w-full h-full flex justify-center items-center'>No Posts Found</h1>
              }
        </div>
      </div>
    </div>

  )
}

export default FunsectionPosts