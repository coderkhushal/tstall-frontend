"use client"
import { getArticles } from "@/actions/articles";
import { ArticleType } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

import { set } from "zod";
type ArticleContextType = {
    articles: ArticleType[]
    offset: number
    fetchArticles: (pageNo:number)=>Promise<void>
    reload: ()=>Promise<void>
}

export const ArticleContext = createContext<ArticleContextType>({
    articles:[],
    offset: 1,
    fetchArticles: async()=>{},
    reload: async()=>{}
})

const ArticleState = ({children}:{children:React.ReactNode})=>{
    const [articles, setarticles] = useState<ArticleType[]>([])
    const [offset, setoffset] = useState<number>(1)
    const fetchArticles=async(pageNo: number)=>{
        
        let newArticles= await getArticles(pageNo)
        
        setarticles([...articles,...newArticles ])
        setoffset((value)=>pageNo+1)
      }
      const reload = async()=>{
        setoffset( 1)
        setarticles([])
        let newArticles= await getArticles(1)
        setarticles([...newArticles])
        setoffset((value)=>2)
      }
    return(
        <ArticleContext.Provider value={{articles,fetchArticles, offset, reload}}>
            {children}
        </ArticleContext.Provider>
    )
}
export default ArticleState
export const useArticleContext = ()=> useContext(ArticleContext)