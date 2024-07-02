"use client"
import { getFunsectionPosts } from '@/actions/citizen-insights'
import { Button } from '@/components/ui/button'
import Loading from '@/components/ui/loading'
import InsightItem from '@/components/web/insights/insight-item'
import { useAuthContext } from '@/context/AuthContext'
import { ArticleType } from '@/types'
import { Glasses, Search } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

const CitizenInsightsPage = () => {
    const{ user, fetchUser} = useAuthContext()
    const ref= useRef<HTMLDivElement>(null)
    const [funsectionPosts, setfunsectionPosts] = useState<ArticleType[] | null>(null)
    useEffect(()=>{
        
        fetchFunsectionPosts(0)
    },[user])
    const fetchFunsectionPosts = async (page: number) => {
        if(!user){
            await fetchUser()
        }
        if(user){
            const data= await getFunsectionPosts(page)

            if(data?.success){
                setfunsectionPosts(value=>data.data)
            }
            else{
                setfunsectionPosts([])
                alert(data?.error ? data.error : "Some Error Occured")
            }
        }
    }
    return (
        <div className='h-full w-full light flex flex-col p-2  space-y-2  bg-tertiary dark:bg-[#0b1727] text-zinc-900 dark:text-white'>
            <div className="flex justify-between items-center bg-gray-200  w-full px-4 shadow-lg py-4">
                <h1 className='font-bold  text-xl flex'>
                    <Glasses className='mr-2 '/>
                    Insights
                </h1>
                <Button className='bg-gray-300 text-yellow-700 text-lg font-semibold'>
                    Post
                </Button>
            </div>
            <div className="h-full w-full space-y-4 flex space-x-2 pb-10 lg:pb-2 overflow-y-auto">
            <div className="flex flex-col h-full w-full overflow-y-auto space-y-2">

            {!funsectionPosts && <Loading/>}
            {funsectionPosts && funsectionPosts.length==0 && <h1 className=' font-semibold text-2xl flex w-full h-full justify-center items-center'>No Posts Found</h1>}
            {(funsectionPosts && funsectionPosts.length>0) && funsectionPosts.map((post, index) => (
                <InsightItem key={index} LastPostRef={index == funsectionPosts.length - 1 ? ref : null} post={post} />
            ))}
        
            </div>
            <div className=" bg-secondarydark hidden lg:flex  lg:flex-col w-1/4 ">

            </div>
            </div>
            
        </div>
    )
}

export default CitizenInsightsPage