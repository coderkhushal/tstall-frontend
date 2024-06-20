"use client"
import { getUserByName } from '@/actions/user'
import { Input } from '@/components/ui/input'
import Loading from '@/components/ui/loading'
import UserItem from '@/components/web/search/user_item'
import { useAuthContext } from '@/context/AuthContext'
import { getGetToken } from '@/hooks/getGetToken'
import { UserType } from '@/types'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchPage = () => {
    const [SearchedUsers, setSearchedUsers,] = useState<UserType[]>([])
    const [loading, setloading] = useState<boolean>(false)
    const [Username, setUsername] = useState<string>("")
    const {user} =useAuthContext()
    const router= useRouter()
    useEffect(() => {

        if(!user){
            router.push('/auth/login')

        }
        
      }, [user])
      const handleSearch=async()=>{
            setloading(true)
            
            const users= await getUserByName({Username})
            setSearchedUsers(value=>(users))
            setloading(false)
        }

    return (
        <div className="py-4  w-full h-4/5 overflow-y-hidden bg-secondary  select-none">
            <div className=" w-full flex flex-col items-center px-4 relative mx-auto ">
                <div className="bg-primary w-4/5  mb-8 space-x-4 items-center  rounded-xl flex shadow-lg p-2">
                    <Input type="text" placeholder="Enter username" className="w-full text-xl bg-primary  rounded-lg" value={Username} onChange={(e)=>setUsername(e.target.value)} />
                    <FaSearch className='size-8' onClick={handleSearch} />
                </div>
                

                {loading && 
                <div className="h-full w-full items-center justify-center border-none">

                <Loading/>
                </div>
                }
                {
                    !loading && ( SearchedUsers.length==0 ? <h1 className='text-center mt-10'>No Users Found</h1> : 
                    <div className="flow-root w-4/5  h-[60rem]  overflow-y-scroll">
                    <ul role="list" className="divide-y  h-full divide-gray-200 dark:divide-gray-700 w-full">


                    { SearchedUsers.map((user, index) => (
                        <UserItem key={index} user={user}/>
                        
                    ))  }
                    </ul>
                    </div> )
                }
                



            </div>
        </div>
    )
}

export default SearchPage