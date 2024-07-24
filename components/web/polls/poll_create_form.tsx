import { createPoll } from '@/actions/polls'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Trash } from 'lucide-react'
import React, { useState } from 'react'

const PollCreateForm = () => {
  const [poll, setpoll] =useState<{title: string, description: string, options: string[]}> ({
    title: "",
    description: "",
    options: [""]
  })
  const handleCreatePoll =async ()=>{
    const data = await createPoll(poll)
    if(data.success){
      setpoll({
        title: "",
        description: "",
        options: [""]
      })
      alert("poll created successfully")
    }
    else{
      alert(data.error)
    }
  }
  return (
    <div className='flex my-4 flex-col space-y-4 h-full w-[17vw] '>
      <h1 className='text-2xl tracking-widest font-bold'>Create Poll</h1>
      <Input  placeholder="Title" value={poll.title} onChange={(e)=>setpoll({...poll, title: e.target.value})} className='w-full'/>
      {poll.options.map((option, i)=>(
        <div className='flex space-x-2' key={i}>
        <Input  placeholder={`Option ${i+1}`} value={option} onChange={(e)=>setpoll({...poll, options: poll.options.map((value, index)=>index==i?e.target.value:value)})} className='w-full'/>
        <Trash onClick={()=>setpoll({...poll, options: poll.options.filter((value, index)=>index!=i)})} className='cursor-pointer' />
          </div>
      ))}
      <Button onClick={()=>setpoll({...poll, options: [...poll.options, ""]})} className='p-2 rounded' variant={"outline"} ><Plus/></Button>
      <Button onClick={handleCreatePoll} className='p-2 rounded bg-tertiary hover:bg-quarternary text-white font-bold text-xl' variant={"default"} >Create Poll</Button>
      </div>
  )
}

export default PollCreateForm