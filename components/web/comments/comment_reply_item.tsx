
"use client"
import { getRepliesForReply } from '@/actions/comments'
import { Input } from '@/components/ui/input'
import { CommentType } from '@/types'
import React, { useEffect, useState } from 'react'

const CommentReplyItem = ({ replyId, userName, Imagesrc, content, handleCommentReply, reference }: { reference: string, replyId: string, userName: string, content: string, Imagesrc?: string, handleCommentReply: ({ content, commentId }: { content: string, commentId: string }) => void }) => {
  const [replies, setreplies] = useState<CommentType[]>([])
  const [replycontent, setreplycontent] = useState<string>("")
  useEffect(() => {
    fetchReplies()
  }, [])
  const fetchReplies = async () => {
    const result = await getRepliesForReply({ commentId: replyId })
    if (result.success) {
      setreplies(result.replies)
    }
  }
  return (
    <>
      <div className="media flex pb-4">
        <a className="mr-4" href="#">
          <img className="rounded-full max-w-none w-12 h-12" src={Imagesrc ? Imagesrc : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} />
        </a>
        <div className="media-body">
          <div>
            <div className="inline-block text-base font-bold mr-2" >
              {userName}
              </div>
              <div className='font-medium'>
                Reply to {reference}
              </div>
          </div>
          <p>{content}</p>
          <div className="mt-2 flex   items-center">
            <Input
              value={replycontent}
              onChange={(e) => setreplycontent(e.target.value)}
            />
            <button className="py-2 px-4 font-medium bg-zinc-900 text-white hover:bg-zinc-800  rounded-lg" onClick={() => handleCommentReply({ content: replycontent, commentId: replyId })}>
              Reply
            </button>

          </div>
        </div>
      </div>
      {/* reply of replies  */}
      {replies.map((reply, index) => (
        <CommentReplyItem key={index} replyId={reply.id} userName={reply.userId} content={reply.content} Imagesrc={reply.urlToImage} handleCommentReply={handleCommentReply} reference={userName} />
      ))}
    </>
  )
}

export default CommentReplyItem