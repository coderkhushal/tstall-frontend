"use client"
import React, { useEffect, useState } from 'react'
import { articles as BookmarksList } from '@/constants'
import BookMarkItem from '@/components/web/bookmark/bookmark_item'
import { getBookmarks } from '@/actions/articles'
import { useAuthContext } from '@/context/AuthContext'
import { ArticleType } from '@/types'
import Loading from '@/components/ui/loading'
import { useRouter } from 'next/navigation'
const BookMarksPage = () => {
    const [BookmarksList, setBookmarksList] = useState<ArticleType[]>([])
    const {user} =  useAuthContext()
    const router= useRouter()
    useEffect(()=>{

     
        fetchBookMarks()
    },[user?.id])
    const fetchBookMarks = async () => {    
        const id = user?.id
        if(!user || !id){
            router.push("/auth/login")
            return;
        }

        const res= await getBookmarks(id)
        
        if(res.success){
            setBookmarksList(res.data)
        }
      
    }
    if(!user?.id){
        return(
            <div className='w-full bg-primary h-full flex items-center justify-center'>

            <Loading/>
            </div>

            
        )
    }
    else
  return (
    <section className="h-full w-full light py-14 md:py-24 overflow-y-auto  bg-secondary dark:bg-[#0b1727] text-zinc-900 dark:text-white">
    <div className="container px-4 w-full lg:px-6 mx-auto flex flex-col ">
        <div className="flex items-center justify-center mb-6 sm:mb-12">
            <div className="w-full max-w-xl text-center">
                <h2 className="text-3xl tracking-wider leading-none md:text-[45px] font-extrabold mb-4">
                    BookMarks
                </h2>
            
            </div>
        </div>
        <div className="grid grid-cols-2 h-full overflow-y-auto overflow-x-hidden  w-full gap-10 mt-12  ">
            {BookmarksList.map((bookMark, i) => (
                <div className="col-span-2 md:col-span-1" key={i}>
                    <BookMarkItem article={bookMark} />
                </div>
            ))}
        </div>
    </div>
</section>
  )
}

export default BookMarksPage