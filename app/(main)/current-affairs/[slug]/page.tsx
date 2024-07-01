"use client"
import { getSingleCurrentAffairArticles } from '@/actions/current_affairs'
import Loading from '@/components/ui/loading'
import CurrentAffairItem from '@/components/web/currentaffairs/current_affair_item'
import { useAuthContext } from '@/context/AuthContext'
import { ArticleType } from '@/types'
import React, { useEffect } from 'react'

const SingleCurrentAffair = ({params}:{params: { slug: string }}) => {
  const [currentAffairs , setCurrentAffairs] = React.useState<ArticleType[] | null> (null)
  const {user, fetchUser} = useAuthContext()
  useEffect(()=>{
    fetchCurrentAffairsArticles()
  }, [])
  const fetchCurrentAffairsArticles = async()=>{
    await fetchUser()
    const data= await getSingleCurrentAffairArticles(params.slug.replace("category%3D", "category=").replace("topic%3D", "topic=").replace("%26", "&"))
    if(data?.success){
      setCurrentAffairs(data.data)

    }
    else{
      alert(data?.error)
      setCurrentAffairs([])
    }
  }
  return (
    <div className='h-full w-full light flex space-x-2  p-2 overflow-y-auto   bg-primary  text-zinc-900 '>
        <div className="flex flex-col w-full space-y-4 overflow-y-auto">

        <img src= "https://static.toiimg.com/thumb/msid-109637737,width-1070,height-580,imgsize-72880,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" className='w-full h-full' alt="topic image" />
        <div className="flex   w-full my-4 flex-col px-2">

        </div>  
        <div className="flex flex-col space-y-4 h-1/2">

          {(currentAffairs && currentAffairs.length>0) && currentAffairs.map((article, index)=>(
            <CurrentAffairItem article={article} key={index} />
          ))}
          {!currentAffairs && <div className='relative'><Loading/></div>}
          {(currentAffairs && currentAffairs.length==0) && <h1 className='text-xl text-center'>No articles found</h1>}
        </div>
          </div>
        <div className=" rounded-3xl bg-[#D9D0BE] w-1/4 hidden lg:flex flex-col">

        </div>
    </div>
  )
}

export default SingleCurrentAffair