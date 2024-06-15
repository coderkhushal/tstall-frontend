import { replyInfoType } from '@/types'
import React, { useState } from 'react'
import CommentReplyItem from './comment_reply_item'
import { Input } from '@/components/ui/input'
import { SendHorizonal } from 'lucide-react'

const CommentItem = ({id, articleId,  userName, Imagesrc, content, replyInfo, handleCommentReply}:{id: string,articleId: string, userName: string,  content: string, Imagesrc?: string, replyInfo: replyInfoType[], handleCommentReply: ({content,commentId}:{content: string, commentId :string})=>void}) => {
  const [replycontent, setreplycontent] = useState<string> ("")
  const [inputhidden, setinputhidden] = useState<boolean> (true)
  return (
           
    <div className="media flex pl-10 my-4 lg:pt-4 pb-4 shadow-xl">
      <a className="mr-4" href="#">
        <img className="rounded-full max-w-none w-12 h-12" src={Imagesrc? Imagesrc: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} />
      </a>
      <div className="media-body">
        <div>
          <a className="inline-block text-base font-bold mr-2" href="#">{userName}</a>
        </div>
        <p>{content}</p>

     
        <div className="mt-2 flex flex-col items-start">
          <div className="flex">

          <Input
          value={replycontent}
          onChange={(e)=>setreplycontent(e.target.value)}
          className={`w-full ${inputhidden ? 'hidden' : 'block'}`}
          />

        <button className={`py-2 px-4  font-medium rounded-lg ${inputhidden ? 'hidden' : 'block'}`} onClick={()=>handleCommentReply({content:replycontent, commentId: id })}>
        <SendHorizonal/>
          </button>
          </div>
        {inputhidden &&<button className="pb-4 px-4 font-medium rounded-lg" onClick={()=>setinputhidden(false)} >
            Reply 
          </button>
}
          <div className='flex flex-col'>

          {replyInfo.map((reply, index) => (
            <CommentReplyItem key={index} replyId={reply.id} userName={reply.userName} content={reply.content} handleCommentReply={handleCommentReply} Imagesrc={reply.urlToImage} reference={userName} />
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentItem