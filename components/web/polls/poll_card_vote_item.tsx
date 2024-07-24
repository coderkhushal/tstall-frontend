"use client"
import { VoteForPoll } from '@/actions/polls'
import { getUserId } from '@/hooks/getUserId'
import { PollVoteType } from '@/types'
import { Circle, CircleCheck } from 'lucide-react'
import React, { useEffect } from 'react'

const PollCardVoteItem = ({ pollvotes,pollId,  optionName, numvoted,totalvoted ,settotalvoted , setnumvoted}: { pollvotes: PollVoteType, optionName: string, numvoted: number, totalvoted: number, pollId:string, settotalvoted: (x: number)=>void, setnumvoted: (x: number)=>void }) => {
  const [isVoted, setIsVoted] = React.useState<boolean>(false)

  useEffect(() => {
    checkUserVoted()
  }, [pollvotes])

  const checkUserVoted = async () => {
    
    const pollvotesForOption = pollvotes[optionName]
    const index = pollvotesForOption.findIndex((e) => e.userId == getUserId())
    if (index == -1) {
      setIsVoted(false)
    }
    else {
      setIsVoted(true)
    }
  }
  const handleVote= async()=>{
    const data= await VoteForPoll(pollId , optionName)
    if(data.success){
      
      if(totalvoted==0){
        settotalvoted(1)
      }
      else{
        settotalvoted(totalvoted+1)
      }
      setnumvoted(numvoted+1)
      setIsVoted(true)
    }
    else{
      alert("failed voting, some error occured")
    }
  }
  return (
    <div className='w-full  h-auto flex flex-col items-center  rounded-2xl bg-white'>
      <h1 className='w-full text-start px-4 font-semibold'>{optionName}</h1>
      <div className="flex h-full w-full p-1 space-x-2">

      {isVoted ? <CircleCheck className='cursor-pointer' /> : <Circle onClick={handleVote} className='cursor-pointer'/>}
      <div className="flex h-full transition-all rounded-2xl bg-tertiary" style={{ width: `${totalvoted == 0 ? 0 : (numvoted / totalvoted) * 100}%` }}>
      </div>
      </div>
    </div>
  )
}

export default PollCardVoteItem