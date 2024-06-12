"use client"
import React, { useEffect, useState } from 'react'
import { articles as BookmarksList } from '@/constants'
import BookMarkItem from '@/components/web/bookmark/bookmark_item'
import { getBookmarks } from '@/actions/articles'
import { useAuthContext } from '@/context/AuthContext'
import { ArticleType } from '@/types'
import Loading from '@/components/ui/loading'
const BookMarksPage = () => {
    const [BookmarksList, setBookmarksList] = useState<ArticleType[]>([])
    const {user} =  useAuthContext()
    useEffect(()=>{

     
        fetchBookMarks()
    },[user?.id])
    const fetchBookMarks = async () => {    
        const id = user?.id
        if(!id){
            
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
    <section className="h-full w-full light py-14 md:py-24 overflow-y-auto bg-primary dark:bg-[#0b1727] text-zinc-900 dark:text-white">
    <div className="container px-4 lg:px-6 mx-auto ">
        <div className="flex items-center justify-center mb-6 sm:mb-12">
            <div className="w-full max-w-xl text-center">
                <h2 className="text-3xl leading-none md:text-[45px] font-bold mb-4">
                    BookMarks
                </h2>
            
            </div>
        </div>
        <div className="grid grid-cols-2 h-full overflow-y-auto  w-full gap-6 mt-12 max-w-8xl ">
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