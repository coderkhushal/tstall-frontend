"use client"
import { getFunsectionPosts } from '@/actions/citizen-insights'
import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
import { IoIosCloseCircle } from "react-icons/io";
import Loading from '@/components/ui/loading'
import InsightItem from '@/components/web/insights/insight-item'
import { useAuthContext } from '@/context/AuthContext'
import { ArticleType } from '@/types'
import { Glasses, Search } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import InsightCreationForm from '@/components/web/insights/insight_creation_form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const CitizenInsightsPage = () => {
    const{ user, fetchUser} = useAuthContext()
    const [ showCreationForm , setshowCreationForm] = useState<boolean>(false)
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
        <div className='h-full w-full transition-all light flex flex-col p-2  space-y-2  bg-tertiary dark:bg-[#0b1727] text-zinc-900 dark:text-white'>
            <div className="flex justify-between items-center bg-gray-200  w-full px-4 shadow-lg py-4">
                <h1 className='font-bold  text-xl flex'>
                    <Glasses className='mr-2 '/>
                    Insights
                </h1>
            

                <Button className='bg-yellow-800 text-gray-300 hover:bg-yellow-700 text-lg font-semibold' onClick={()=>setshowCreationForm(true)}>
                    Post Insight
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

            <div className={` bg-secondarydark transition-all hidden ${showCreationForm ? "w-1/3 p-4" : "w-0"}  lg:flex  rounded-2xl lg:flex-col relative `}>
            <div className={`${showCreationForm ? "flex":"hidden"}  flex-col w-full h-full relative`}>
                <div className="flex justify-end w-full">

                    <IoIosCloseCircle onClick={()=>setshowCreationForm(false)} className='size-10  cursor-pointer '/>
                </div>
                    <InsightCreationForm/>
                </div>
            </div>
            <div className={` bg-secondarydark  lg:hidden ${showCreationForm ? "flex":"hidden"} w-[95%] absolute flex-col top-0 left-0 rounded-2xl p-4 lg:flex-col h-full  `}>
                <div className={` ${showCreationForm ? "flex": "hidden"}  flex-col w-full h-full relative`}>
                    <div className="  justify-end flex w-full">

                    <IoIosCloseCircle onClick={()=>setshowCreationForm(false)} className='size-7 cursor-pointer  '/>
                    </div>
           
                    <InsightCreationForm/>
                </div>
                
                
            </div>
            </div>
            
        </div>
    )
}

export default CitizenInsightsPage