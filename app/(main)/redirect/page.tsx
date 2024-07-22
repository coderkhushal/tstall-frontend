"use client"
import Loading from '@/components/ui/loading'
import { useAuthContext } from '@/context/AuthContext'
import { getSetToken } from '@/hooks/getSetToken'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const RedirectedPage = () => {
  const {fetchUser} = useAuthContext()
  
  useEffect(()=>{
    fetchtokenAndRedirect()

  },[])
  const fetchtokenAndRedirect = async ()=>{
    const url = window.location.href
    const query = url.split("?")[1]
    const token = query.split("=")[1]
    getSetToken(token)
    await fetchUser()
    alert("logged in ")
    window.location.href = "/"
  }
  return (
    <div className='h-full w-full'>
      <Loading/>
    </div>
  )
}

export default RedirectedPage