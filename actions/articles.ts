import { useGetAuthHeaders } from "@/hooks/useGetAuthHeaders"

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
            headers: useGetAuthHeaders()
        }
    )
    const data = await res.json()
    return data
}