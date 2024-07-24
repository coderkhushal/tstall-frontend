"use client"
import PollCard from '@/components/web/polls/poll_card'



import React, { useEffect, useState } from 'react'
import InsightCreationForm from '@/components/web/insights/insight_creation_form'
import { useAuthContext } from '@/context/AuthContext'
import { getPolls } from '@/actions/polls'
import { PollType } from '@/types'
import Loading from '@/components/ui/loading'
import { useInView } from 'react-intersection-observer'
import PollCreateForm from '@/components/web/polls/poll_create_form'

const PollingPage = () => {
  const [offset, setoffset] = useState<number>(0)
  const [polls, setpolls] = useState<PollType[] | null>(null)
  const { user, fetchUser } = useAuthContext()
  const { ref, inView } = useInView()
  useEffect(() => {
    fetchPolls(0)
  }, [user])
  const LoadMore = () => {
    fetchPolls(offset)
  }

  useEffect(() => {
    if (inView) {
      console.log("loading more")
      LoadMore()
    }
  }, [inView])

  const fetchPolls = async (page: number) => {
    if (!user) {
      await fetchUser()
    }
    if (user) {

      const data = await getPolls(page)
      if (data?.success) {
        
        if (polls) {
          console.log("here")
          console.log(polls)
          setpolls((value) => (value != null ? [...value, ...data.data] : null))
        } else {
          console.log("here2")
          setpolls(data.data)
        }
      }
      else {
        setpolls([])
        alert(data?.error)
      }
    }
    setoffset(value=>value+1)
  }

  return (
    <div className='w-full p-14 bg-secondary h-full flex   '>
      <div className="w-full p-4 grid grid-cols-2 gap-4 justify-items-center overflow-y-auto  relative h-full">
        {!polls && <Loading />}
        {(polls && polls.length == 0) && <h1 className='text-2xl text-tertiary '>No Polls Available</h1>}
        {(polls && polls.length > 0) && polls.map((poll, i) => (
          <PollCard poll={poll} key={i} lastref={i==polls.length-1 ? ref : null} />
        ))
        }
      </div>
      <div className={` bg-[#F3CEA1] border border-black transition-all hidden "w-1/3 p-4  lg:flex  rounded-2xl lg:flex-col relative `}>
        <div className={`flex  flex-col w-full h-full relative`}>

          <PollCreateForm />
        </div>
      </div>
    </div>
  )
}

export default PollingPage