import { getGetAuthHeaders } from "@/hooks/getGetAuthHeaders"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string
export const getArticlesComments = async({articleId}: {articleId: string})=>{
    const res = await fetch(`${BASE_URL}/newsapp/auth/getCommentsAndRepliesForArticle?articleId=${articleId}`,
        {
            method: 'GET',
            headers: getGetAuthHeaders()
        }
    )
    const data = await res.json()
    return data
}
export const postComment = async({articleId,userId, content,url}: {articleId: string,userId: string, url: string, content: string})=>{
    console.log({articleId,userId, content,url})
    const res = await fetch(`${BASE_URL}/newsapp/auth/saveMessages`,
        {
            method: 'POST',
            headers: getGetAuthHeaders(),
            body: JSON.stringify([{messageType: 0, articleId, userId, content, url}])
        }
    )
    const data = await res.json()
    console.log(data)
    if(res.status === 200){
        return {success: true, comment:data[0], error: false}
    }
    else{
        return {error: data, success: false}
    }
}

export const postCommentReply = async({articleId,  commentId,userId, content,url}: {articleId: string, commentId: string,userId: string, url: string, content: string})=>{
    const res = await fetch(`${BASE_URL}/newsapp/auth/saveMessages`,
        {
            method: 'POST',
            headers: getGetAuthHeaders(),
            body: JSON.stringify([{articleId, messageType: 1, commentId, userId, content, url}])
        }
    )
    const data = await res.json()
    if(res.status === 200){
        return {success: true, comment:data[0], error: false}
    }
    else{
        return {error: data, success: false}
    }
}
export const getRepliesForReply = async({commentId}: {commentId: string})=>{
    const res = await fetch(`${BASE_URL}/newsapp/auth/getRepliesForComment?commentId=${commentId}`,
        {
            method: 'GET',
            headers: getGetAuthHeaders()
        }
    )
    const data = await res.json()
    
    if(res.status === 200){
        return {success: true, replies: data, error: false}
    }
    else{
        return {error: data, success: false}
    }
}