"use client"
import { PollType, PollVoteType } from '@/types'
import React, { useEffect, useState } from 'react'
import PollCardVoteItem from './poll_card_vote_item'
import { useAuthContext } from '@/context/AuthContext'
import { getPollVotesFromPollId } from '@/actions/polls'
import { Antic_Slab } from 'next/font/google'


const PollCard = ({poll, lastref}:{poll: PollType, lastref: React.LegacyRef<HTMLDivElement>}) => {
  const {user , fetchUser} = useAuthContext()
  const [pollvotes, setpollvotes]= useState<PollVoteType | null>(null)
  const [totalVotes, settotalVotes]= useState<number>(0)
  useEffect(()=>{
    fetchPollsVotes(poll.id);
  },[user])
  const increasenumvotes= (value: number)=>{
    fetchPollsVotes(poll.id)
  }
  const fetchPollsVotes= async(pollid: string)=>{
    if(!user){
      fetchUser()
    }
    if(user){
      const data = await getPollVotesFromPollId(pollid)
      if(data.success){

        let total = 0;
        let ans: PollVoteType = {} // Initialize ans as an empty object
        if(poll.options){

          for(let i of poll.options){
            ans[i] = []
          }
        }
        
        for (let i of data.data){
          if(ans[i.option]){

            ans[i.option].push(i)
            total++;
          }
          
        }
        
        setpollvotes(ans)
        settotalVotes(total)

      }
      else{
        setpollvotes({})
        alert(data.error)
      }

    }
  }
  return (  
    <div ref={lastref} className='rounded-3xl border border-black bg-[#F3CEA1]  w-4/5 flex flex-col items-center p-2'>
        <h1 className='font-extrabold text-2xl text-tertiary w-full text-start p-5'>{poll.title}</h1>
        
        <div className="flex w-full flex-col space-y-6 ">

        { (pollvotes && Object.keys(pollvotes).length>0) && Object.keys(pollvotes).map((key, i)=>(
          
          <PollCardVoteItem key={i} pollId={poll.id} settotalvoted={settotalVotes} setnumvoted={increasenumvotes} pollvotes={pollvotes} optionName={key} numvoted={pollvotes[key].length} totalvoted={totalVotes} />
          
        ))}
        </div>
        
    </div>
  )
}

export default PollCard