"use client"
import { getCurrentAffairTopcics } from '@/actions/current_affairs'
import Loading from '@/components/ui/loading'
import CurrentAffairItem from '@/components/web/currentaffairs/current_affair_item'
import CurrentAffairTopicItem from '@/components/web/currentaffairs/current_affair_topic_item'
import { useAuthContext } from '@/context/AuthContext'
import { CurrentAffairTopicsType } from '@/types'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const CurrentAffairPage = () => {
  const [topics, settopics] = useState<CurrentAffairTopicsType | null> (null)
    const {user,fetchUser} = useAuthContext()
    const router= useRouter()
    useEffect(()=>{

        fetchCurrentAffairTopics()
    }, [])
    const fetchCurrentAffairTopics = async () => {
        await fetchUser()
        if(!user || !user.id){
            router.push("/auth/login")
        }
        const data= await getCurrentAffairTopcics()
        if(data?.success){
          console.log(data.data)
          settopics((value)=>(data.data))
        }
        else{
          alert(data?.error)
          settopics({})
        }
    }
  return (
    <div className='h-full w-full light flex flex-col space-y-6  p-2 lg:px-5 overflow-y-auto   bg-gray-200 '>
      <h1 className='text-center font-bold tracking-widest text-2xl lg:text-3xl pt-2 '>Current Affairs</h1>
      <h1 className=' text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent '>Hot Topics</h1>
      <div className="flex flex-col lg:grid lg:grid-cols-3  lg:gap-6 space-y-4 lg:space-y-0 pb-10 lg:pb-0">

    {topics && Object.keys(topics).map((topic, index) => (
      <CurrentAffairTopicItem key={index} topic={topic} category={topics[topic]}/>
    ))
  }
  {!topics && <div className='h-full w-full relative flex'><Loading /></div>}
  {(topics && Object.keys(topics).length==0) && <h1 className='text-center font-bold tracking-widest text-2xl lg:text-3xl pt-2 '>No Topics Found</h1>}
  </div>
    </div>
  )
}

export default CurrentAffairPage