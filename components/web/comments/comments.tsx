"use client"
import { getArticlesComments, postComment, postCommentReply } from '@/actions/comments'
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

import { getUserId } from '@/hooks/getUserId'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { SendHorizonal } from 'lucide-react'
const Comments = ({ articleId }: { articleId: string }) => {
    const [comments, setcomments] = useState<CommentType[]>([])
    const [content, setcontent] = useState<string>("")
    const handleComment = async (content: string) => {
        const userId = getUserId()
        if (!userId) {
            alert("user id not found")
            return;
        }
        const result = await postComment({ articleId: articleId, userId: userId, content: content, url: "" })
        if (result.success) {
            setcomments([])
            fetchComments()
        }
        else {
            alert(JSON.stringify(result.error))
        }
        setcontent("")

    }
    const handleCommentReply = async ({content, commentId}:{content: string, commentId: string}) => {
        const userId = getUserId()
        if (!userId) {
            alert("user id not found")
            return;
        }
        const result = await postCommentReply({ articleId: articleId, commentId: commentId, userId: userId, content: content, url: "" })
        if (result.success) {
            setcomments((value)=>[])
            fetchComments()
        }
        else {
            alert(JSON.stringify(result.error))
        }
        setcontent("")

    }
    const fetchComments = async () => {
        
        let newcomments = await getArticlesComments({ articleId: articleId })
        
        setcomments([ ...newcomments])
    }
    useEffect(() => {
     
        fetchComments()
    }, [])
    
    return (
        <DrawerContent className='h-3/4 bg-secondary'>

            <div className="mx-auto lg:mx-10 w-full  h-full px-2 overflow-y-auto">
                <DrawerHeader>
                    <div className="flex items-center justify-start">
                        <Input
                            value={content}
                            onChange={(e) => setcontent(e.target.value)}
                            className='w-3/4'
                            placeholder='Write a comment...'
                        />
                        <Button className="py-2 px-4 font-medium rounded-lg text-black" onClick={() => handleComment(content)} variant={"secondary"}>
                            <SendHorizonal/>
                        </Button>
                    </div>
                    <DrawerTitle className=' text-3xl mt-2'>Comments</DrawerTitle>
                </DrawerHeader>

                {
                    comments.map((comment, index) => (
                        <CommentItem key={index} id={comment.id} articleId={articleId} Imagesrc={comment.urlToImage} userName={comment.userName} content={comment.content} replyInfo={comment.replyInfo} handleCommentReply={handleCommentReply} />
                    ))
                }





            </div>
        </DrawerContent>
    )
}

export default Comments