"use client"
import { followUser, getUserById, getUserByToken, reportUser, unfollowUser } from '@/actions/user'
import { Button } from '@/components/ui/button'


import { useAuthContext } from '@/context/AuthContext'
import { getGetToken } from '@/hooks/getGetToken'

import { UserType } from '@/types'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { MessageCircleMore, ReceiptPoundSterling, UserRoundIcon, UserRoundX, Verified } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import ProfileSkeleton from '@/components/web/profile/profile_skeleton'
import { AlertDialog, AlertDialogFooter, AlertDialogHeader } from '@/components/ui/alert-dialog'
import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from '@radix-ui/react-alert-dialog'

const PublicProfilePage = ({ params }: { params: { id: string } }) => {
  const router = useRouter()
  const [showReportingModal, setshowReportingModal] = useState(false)
  const { user, logout } = useAuthContext()
  const [userProfile, setUserProfile] = React.useState<UserType | null>(null)
  useEffect(() => {

    fetchuserProfile()

  }, [user])

  const fetchuserProfile = async () => {
    const token = getGetToken()
    if (!token) {
      router.push("/auth/login")
      return;
    }
    const data = await getUserById({ id: params.id });

    setUserProfile(value => data)
  }

  const handleFollow = async (VARIANT: "Follow" | "Unfollow") => {
    if (!userProfile || !user) {
      return;
    }
    if (VARIANT === "Follow") {

      let result = await followUser({ id: userProfile?.id })
      if (result.success) {
        setUserProfile({ ...userProfile, followers: [...userProfile.followers, user.id] })

      }
    }
    else {
      let result = await unfollowUser({ id: userProfile?.id })
      if (result.success) {
        setUserProfile({ ...userProfile, followers: userProfile.followers.filter(e => e != user.id) })

      }
    }

  }
  const handleReport = async () => {
    if (!userProfile || !user) {
      return;
    }


    let result = await reportUser({ id: userProfile?.id })

    if (result.success) {
      setUserProfile({ ...userProfile, reportedByUsers: [...userProfile.followers, user.id] })
      alert("Reported Successfully")
      setshowReportingModal(false)
    }
    else {
      alert("Error Reporting User")
    }


  }

  return (



    <div className='w-full   lg:py-20 flex h-full bg-secondary justify-center'>
      <Link href={`/chats/${params.id}`} className='absolute top-5 right-5 cursor-pointer'>

      <MessageCircleMore />
      </Link>
      {userProfile ? <header >
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_2fr] gap-8 lg:gap-7 p-3.5 lg:p-0">
          <div className="flex justify-center items-center h-40 lg:h-auto">
            <img
              src={userProfile?.urlToImage ? userProfile.urlToImage : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
              alt="profile-logo"
              className="w-40 h-40 lg:w-32 lg:h-32 rounded-full border border-primary"
            />
          </div>
          <div>
            <div className="mb-5">

              <div className="flex flex-col space-y-1 ">
                <div className="flex items-center w-full justify-center space-x-3 lg:items-start">

                  <h2 className="text-xl lg:text-2xl font-light  text-center">{userProfile?.userName ? userProfile.userName : "username"}</h2>
                  <span className='lg:mt-1'>
                    <Verified />
                  </span>
                  <br className="lg:hidden" />

                  {(user && userProfile && user.id != userProfile.id) &&
                    <Button className={` tracking-wide font-bold hover:bg-tertiary bg-tertiary text-secondarydark text-md w-24 ${userProfile.followers.includes(user.id) ? "" : "shadow-lg bg-tertiary text-secondarydark"}`} variant={"secondary"} onClick={() => {
                      handleFollow(userProfile?.followers.includes(user?.id) ? "Unfollow" : "Follow")
                    }}>
                      {(user?.id && userProfile?.followers.includes(user?.id)) ? "Unfollow" : "Follow"}
                    </Button>}


                  {(user && userProfile && user.id != userProfile.id && !userProfile.reportedByUsers.includes(user.id)) &&

                    <Button className={` tracking-wide font-bold  text-md w-auto  shadow-lg`} variant={"secondary"} onClick={() => { setshowReportingModal(true) }}>
                      <UserRoundX />
                    </Button>



                  }
                  {showReportingModal && 
                  <div className="flex absolute w-full left-0 top-0 h-full">
                    
                  <div className='w-full bg-gray-100 z-50 h-1/3 lg:h-1/5 lg:w-1/4 flex flex-col  items-center rounded-3xl p-4 m-auto space-y-6 '>
                    <h1 className='font-semibold  text-center text-xl '>Do you really want to Report this user?</h1>
                    <h2 className='font-semibold  text-gray-500 '>This action is irreversible</h2>
                    <div className="flex w-full justify-evenly">
                      <Button variant={"outline"} onClick={()=>setshowReportingModal(false)}>Cancel</Button>
                      <Button className='bg-red-400 hover:bg-red-500' onClick={handleReport}>Confirm</Button>
                    </div>
                  </div>
                  </div>

                  }
                  {(user && userProfile && user.id != userProfile.id && userProfile.reportedByUsers.includes(user.id)) &&
                    <Button className={` tracking-wide font-bold  text-md w-auto text-gray-400  shadow-lg`} variant={"secondary"} onClick={() => {
                      if (userProfile.reportedByUsers.includes(user.id)) {
                        alert("Already Reported")
                        return;
                      }
                      handleReport()
                    }}
                      disabled={true}
                    >
                      <UserRoundX />
                    </Button>}



                </div>

                <div className="flex items-center w-full justify-center space-x-2 lg:items-start">

                  <h1 className='font-semibold tracking-widest '>{userProfile?.dateOfBirth && userProfile?.dateOfBirth.split("T")[0]} </h1>

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
            {(userProfile?.topicsOfInterest && userProfile?.topicsOfInterest.length > 0 )&& user?.topicsOfInterest.map((e, index) => {

              return (
                <Button key={index} variant={"outline"} className='w-full' >{e}</Button>
              )
            })}
            {!userProfile?.topicsOfInterest && <h1 className='px-2'>No Interests</h1>}

          </div>
        </div>
      </header> : <div className="flex w-full justify-center items-start py-20 h-full">
        <ProfileSkeleton />
      </div>}


    </div>
  )
}

export default PublicProfilePage