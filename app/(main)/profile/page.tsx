"use client"
import { getUserNameById } from '@/actions/comments'
import { getUser, getUserByToken } from '@/actions/user'
import { Button } from '@/components/ui/button'

import { useAuthContext } from '@/context/AuthContext'
import { getGetToken } from '@/hooks/getGetToken'
import { getUserId } from '@/hooks/getUserId'
import { UserType } from '@/types'
import { Verified } from 'lucide-react'


import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { LuLogOut } from 'react-icons/lu'

const ProfilePage = () => {
  const router = useRouter()
  const { user, logout } = useAuthContext()
  const [userProfile, setUserProfile] = React.useState<UserType | null>(user)
  useEffect(() => {

    fetchuserProfile()

  }, [user])

  const fetchuserProfile = async () => {
    const token = getGetToken()
    if (!token) {
      router.push("/auth/login")
      return;
    }
    const data = await getUserByToken({ token });
    setUserProfile(value => data)
  }
  return (
    // <div className='h-full bg-gradient-to-b from-orange-300 to-slate-50 w-full relative overflow-y-hidden overflow-x-hidden'>
    //   <Button className='absolute top-2 right-2' onClick={logout} ><LuLogOut className='text-black size-5' /></Button>
    //   <div className='lg:w-1/2 mx-auto flex flex-col space-y-4 h-2/3 '>
    //     <div className="flex space-x-6 justify-center items-center">
    //     <h1 className=' font-extrabold '>{userProfile?.userName ? userProfile.userName : "User"}</h1>
    //       <Button variant='outline' className='bg-dark hover:bg-white border-none hover:border-none text-white hover:text-black' >
    //     <Link href="/auth/details">
    //         Edit Profile
    //     </Link>
    //         </Button>
    //     </div>
    //     <div className='flex  justify-between  space-x-2 items-center w-full lg:mx-auto  pl-2 pr-4'>


    //       <div className='flex flex-col items-center justify-center space-y-2  '>

    //         <div className='rounded-full  h-24 w-24 bg-white'>
    //           <Image src={userProfile?.urlToImage ? userProfile.urlToImage : "https://images.news18.com/ibnlive/uploads/2024/06/reuters-devils-comet-pons-brooks-2024-06-9b96acd16c54d0c2088f9a608989ad40-16x9.jpg?impolicy=website&width=1200&height=675"} height={40} width={40} alt='profile' className='w-full bg-contain h-full rounded-full' />
    //         </div>
    //         <div className='flex space-x-2 items-center '>

    //         <h1 className='font-bold text-center'>{userProfile?.userName ? userProfile.userName : "User"}</h1>

    //         </div>
    //         <h1>{userProfile?.mailId ? userProfile.mailId : "user@gmail.com"}</h1>
    //       </div>


    //       <div className='flex text-center flex-col'>
    //         <span>
    //           {userProfile?.followers.length}
    //         </span>
    //         <h2>Followers</h2>
    //       </div>
    //       <div className='flex text-center flex-col'>
    //         <span>
    //           {userProfile?.following.length}
    //         </span>
    //         <h2>Following</h2>
    //       </div>

    //     </div>

    //   </div>
    // </div>
    <div className='w-full relative lg:py-20 flex h-full bg-gradient-to-b from-orange-300 to-slate-50 justify-center'>
      <Button className='absolute top-2 right-2' variant={"secondary"} onClick={logout} ><LuLogOut className='text-black size-5' /></Button>
      <header >
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_2fr] gap-8 lg:gap-7 p-3.5 lg:p-0">
          <div className="flex justify-center items-center h-40 lg:h-auto">
            <img
              src={userProfile?.urlToImage ? userProfile.urlToImage : "https://images.news18.com/ibnlive/uploads/2024/06/reuters-devils-comet-pons-brooks-2024-06-9b96acd16c54d0c2088f9a608989ad40-16x9.jpg?impolicy=website&width=1200&height=675"}
              alt="profile-logo"
              className="w-40 h-40 lg:w-32 lg:h-32 rounded-full border border-primary"
            />
          </div>
          <div>
            <div className="mb-5">

              <div className="flex flex-col space-y-1 ">
                <div className="flex items-center w-full justify-center space-x-2 lg:items-start">

                  <h2 className="text-2xl font-light  text-center">{userProfile?.userName ? userProfile.userName : "username"}</h2>
                  <span className='lg:mt-1'>
                    <Verified />
                  </span>
                  
                    {/* <Button variant={"secondary"}>Follow</Button> */}
                  
                </div>

                <div className="flex items-center w-full justify-center space-x-2 lg:items-start">

                  <h1 className='font-semibold leading-6  lg:leading-7 '>{userProfile?.dateOfBirth.split("T")[0]}</h1>
                </div>

              </div>
            </div>

            <div className="mb-5  flex justify-around w-full space-x-4">
              <li className="text-base font-normal  list-none lg:text-sm lg:font-normal lg:text-gray-600 lg:leading-6 lg:text-center text-center lg:mr-0">
                <span className="font-semibold lg:font-semibold  block">
                  {"followers"}
                </span>
                {userProfile?.followers.length}
              </li>
              <li className="text-base font-normal  list-none lg:text-sm lg:font-normal lg:text-gray-600 lg:leading-6 lg:text-center text-center lg:mr-0">
                <span className="font-semibold lg:font-semibold  block">
                  {"following"}
                </span>
                {userProfile?.following.length}
              </li>

            </div>

          </div>

        </div>

        <div>

          <h1 className='px-4 my-2 font-extrabold'>Interests</h1>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-2  px-2 '>
            {userProfile?.topicsOfInterest && userProfile?.topicsOfInterest.length > 0 && user?.topicsOfInterest.map((e, index) => {

              return (
                <Button key={index} variant={"outline"} className='w-full' >{e}</Button>
              )
            })}
            {!userProfile?.topicsOfInterest && <h1 className='px-2'>No Interests</h1>}

          </div>
        </div>
      </header>
    </div>
  )
}

export default ProfilePage