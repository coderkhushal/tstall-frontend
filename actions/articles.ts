import { getGetAuthHeaders } from "@/hooks/getGetAuthHeaders"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string
export const getArticles = async (page: number) => {
    const res = await fetch(`${BASE_URL}/newsapp/unauth/getTrendingHeadlinesPaginated?page=${page}&size=9`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
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
            }
        }

    )
    const data = await res.json()
    return data
}

export const getArticlesComments = async({id}: {id: string})=>{
    const res = await fetch(`${BASE_URL}/newsapp/auth/getCommentsForArticle?articleId=${id}`,
        {
            method: 'GET',
            headers: getGetAuthHeaders()
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
    const data = await res.text()
    console.log(data)
    if(res.status === 200){
        return {success: true, error: false}

    }
    else{
        return {error: data, success: false}
    }
}