"use client"
import { getUserByToken } from '@/actions/user'
import { Button } from '@/components/ui/button'


import { useAuthContext } from '@/context/AuthContext'
import { getGetToken } from '@/hooks/getGetToken'

import { UserType } from '@/types'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { Verified } from 'lucide-react'
import { LuLogOut } from 'react-icons/lu'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SlCalender } from 'react-icons/sl'
import { Switch } from '@/components/ui/switch'

const ProfilePage = () => {
  const router = useRouter()
  const { user, logout ,showCitizenInsights, setShowCitizenInsights} = useAuthContext()
  
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



    <div className='w-full  lg:py-20 flex h-full bg-secondary justify-center'>
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

                  <h2 className="text-2xl font-bold text-center">{userProfile?.userName ? userProfile.userName : "username"}</h2>
                  <span className='lg:mt-1'>
                    <Verified />
                  </span>


                  <Sheet >
                    <SheetTrigger>
                      <svg
                        className="h-8 w-8"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </SheetTrigger>
                    <SheetContent className='bg-primary'>
                      <SheetHeader>
                        <SheetTitle className='mb-4 w-full py-2 text-center font-bold text-2xl'>{userProfile?.userName ? userProfile.userName : ""}</SheetTitle>
                        <SheetDescription className='flex flex-col space-y-4 '>
                          <Link href="/auth/details" className='w-full'>
                            <Button className='w-full shadow-md rounded-xl font-semibold' variant={"outline"}>
                              Edit Profile
                            </Button>
                          </Link>
                          <Link href="/auth/changepass" className='w-full'>
                            <Button className='w-full shadow-md rounded-xl font-semibold' variant={"outline"}>
                              Change Password
                            </Button>
                          </Link>
                          <div className="flex">
<h1 className='font-semibold text-lg mr-2'>Show Citizen Insights</h1>
                          <Switch checked={showCitizenInsights}  onCheckedChange={(e)=>{setShowCitizenInsights(e)}} />
                          </div>
                        </SheetDescription>
                      </SheetHeader>
                    </SheetContent>
                  </Sheet>



                </div>

                <div className="flex items-center flex-col space-y-2 w-full justify-center space-x-2 lg:items-start">

                  <h1 className='font-semibold text-gray-500 tracking-widest '>{userProfile?.mailId && userProfile?.mailId} </h1>
                  {userProfile?.dateOfBirth &&
                    <div className="flex space-x-2 items-center">
                      <SlCalender />
                      <h1 className='font-semibold tracking-widest '>{userProfile?.dateOfBirth.split("T")[0]} </h1>
                    </div>
                  }

                </div>

              </div>
            </div>

            <div className="mb-5  flex justify-around w-full space-x-4">
              <li className="text-base font-normal  list-none lg:text-sm lg:font-normal lg:text-gray-600 lg:leading-6 lg:text-center text-center lg:mr-0">
                <span className="font-semibold lg:font-semibold  block">
                  {"Followers"}
                </span>
                {userProfile?.followers.length}
              </li>
              <li className="text-base font-normal  list-none lg:text-sm lg:font-normal lg:text-gray-600 lg:leading-6 lg:text-center text-center lg:mr-0">
                <span className="font-semibold lg:font-semibold  block">
                  {"Following"}
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
                <div key={index} className='w-full bg-gray-100 rounded-3xl text-center font-semibold text-gray-500 py-2' >{e}</div>
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