"use client"
import { getArticles } from "@/actions/articles";
import { ArticleType } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";
import { articles as a } from "@/constants";
type ArticleContextType = {
    articles: ArticleType[]
    offset: number
    fetchArticles: (pageNo:number)=>Promise<void>
}

export const ArticleContext = createContext<ArticleContextType>({
    articles:[],
    offset: 1,
    fetchArticles: async()=>{}
})

const ArticleState = ({children}:{children:React.ReactNode})=>{
    const [articles, setarticles] = useState<ArticleType[]>([])
    const [offset, setoffset] = useState<number>(1)
    const fetchArticles=async(pageNo: number)=>{
        
        let newArticles= await getArticles(pageNo)
        
        setarticles([...articles,...newArticles ])
        setoffset((value)=>offset+1)
      }

    return(
        <ArticleContext.Provider value={{articles,fetchArticles, offset}}>
            {children}
        </ArticleContext.Provider>
    )
}
export default ArticleState
export const useArticleContext = ()=> useContext(ArticleContext)