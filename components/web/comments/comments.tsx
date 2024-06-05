"use client"
import { getArticlesComments } from '@/actions/articles'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import { CommentType } from '@/types'
import React, { useEffect, useState } from 'react'
import CommentItem from './comment_item'
import { comments as newcomments } from '@/constants'
const Comments = ({ id }: { id: string }) => {
    const [comments, setcomments] = useState<CommentType[]>([])
    useEffect(() => {
        const fetchComments = async () => {
            let newcomments = await getArticlesComments({ id: id })
            setcomments([...comments, ...newcomments])
        }
        fetchComments()
    }, [])
    return (
        <DrawerContent className='h-3/4 bg-secondary'>

            <div className="mx-auto lg:mx-20 w-full  h-full px-2 overflow-y-auto">
                <DrawerHeader>

                    <DrawerTitle className=' text-3xl'>Comments</DrawerTitle>
                </DrawerHeader>
                
                {
                    comments.map((comment, index) => (
                        <CommentItem key={index} url={comment.url} userid={comment.userId} content={comment.content} publishTime={comment.publishTime} />
                    ))
                }




            </div>
        </DrawerContent>
    )
}

export default Comments