import { getGetAuthHeaders } from "@/hooks/getGetAuthHeaders"


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string
export const getArticles = async (page: number) => {
    const res = await fetch(`${BASE_URL}/newsapp/unauth/getTrendingHeadlinesPaginated?page=${page}&size=9`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            cache:"no-store"
        },
    )
    const data = await res.json()

    return data
}
export const getArticleById = async (id: string) => {
    const res = await fetch(`${BASE_URL}/newsapp/unauth/getArticlesById?articleIds=${id}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            cache:"no-store"
        }

    )
    const data = await res.json()
    return data
}



export const likeArticle = async({articleId, userId}: {articleId: string, userId: string})=>{
    const res = await fetch(`${BASE_URL}/newsapp/auth/likeArticle?userId=${userId}&articleId=${articleId}`,
        {
            method: 'POST',
            headers: getGetAuthHeaders()
        }
    )
    const data = await res.json()
    if(data.status=="failure"){
        return {success:false, error: data.error}
    }
    else if(res.status === 200){
        return {success: true, error: null}

    }
    else{
        return {error: data, success: data.error}
    }
}
export const dislikeArticle = async({articleId, userId}: {articleId: string, userId: string})=>{
    const res = await fetch(`${BASE_URL}/newsapp/auth/dislikeArticle?userId=${userId}&articleId=${articleId}`,
        {
            method: 'POST',
            headers: getGetAuthHeaders()
        },
        
    )
    const data = await res.json()
    if(data.status=="failure"){
        return {success: false, error: data.error}
    }
    if(res.status === 200){
        return {success: true, error: null}

    }
    else{
        return {error: data.error, success: false}
    }
}
export const removeReaction = async({articleId, userId}: {articleId: string, userId: string})=>{
    const res = await fetch(`${BASE_URL}/newsapp/auth/removeReactionForArticle?userId=${userId}&articleId=${articleId}`,
        {
            method: 'POST',
            headers: getGetAuthHeaders()
        }
    )
    const data = await res.json()
    if(data.status=="failure"){
        return {success: false, error: data.error}
    }
    if(res.status === 200){
        return {success: true, error: null}

    }
    else{
        return {error: data.error, success: false}
    }
}
export const bookmarkArticle = async({articleId, userId}: {articleId: string, userId: string})=>{
    const res = await fetch(`${BASE_URL}/newsapp/auth/saveBookmark?userId=${userId}&articleId=${articleId}`,
        {
            method: 'POST',
            headers: getGetAuthHeaders()
        }
    )
    const data = await res.text()
    
    if(res.status === 200){
        return {success: true, error: false}

    }
    else{
        return {error: data, success: false}
    }
}

export const getBookmarks = async (userId: string) => {
    const res = await fetch(`${BASE_URL}/newsapp/auth/getBookmarksForUser?userId=${userId}`,
        {
            method: 'GET',
            headers: getGetAuthHeaders()
        }
    )
    const data = await res.json()
    
    if(res.status === 200){
        return {success: true, error: false, data: data}

    }
    else{
        return {error: data, success: false}
    }


}