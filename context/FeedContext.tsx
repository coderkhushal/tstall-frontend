"use client"
import { getArticles } from "@/actions/articles";
import { getFeed } from "@/actions/feed";
import { ArticleType, CategoryType } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

type FeedContextType = {
    healthArticles: ArticleType[]
    entertainmentArticles: ArticleType[]
    businessArticles: ArticleType[]
    sportsArticles: ArticleType[]
    technologyArticles: ArticleType[]
    generalArticles: ArticleType[]
    scienceArticles: ArticleType[]
    offset: number
    fetchArticles: ({pageNo,category}:{pageNo: number, category: CategoryType})=>Promise<void> // Update the return type to Promise<JSX.Element>
    reload: ()=>Promise<void>
}

export const FeedContext = createContext<FeedContextType>({
    healthArticles: [],
    entertainmentArticles: [],
    businessArticles: [],
    sportsArticles: [],
    technologyArticles: [],
    generalArticles: [],
    scienceArticles: [],
    offset: 1,
    fetchArticles: async()=>{},
    reload: async()=>{}
})

const FeedState = ({children}:{children:React.ReactNode})=>{
    const [healthArticles, sethealthArticles] = useState<ArticleType[]>([])
    const [businessArticles, setbusinessArticles] = useState<ArticleType[]>([])
    const [sportsArticles, setsportsArticles] = useState<ArticleType[]>([])
    const [technologyArticles, settechnologyArticles] = useState<ArticleType[]>([])
    const [scienceArticles, setscienceArticles] = useState<ArticleType[]>([])
    const [entertainmentArticles, setentertainmentArticles] = useState<ArticleType[]>([])
    const [currentArticles, setcurrentArticles] = useState<ArticleType[]>()
    const [generalArticles, setgeneralArticles] = useState<ArticleType[]>([])
    const [offset, setoffset] = useState<number>(1)
    const fetchArticles=async({pageNo, category}:{pageNo: number, category: CategoryType})=>{
        let result :{ success: boolean, feed: ArticleType[]} = {success: false, feed: [] }
        switch(category){
            case "health":
                result= await getFeed({PageNo: pageNo, category: category})
                if(result.success){

                    sethealthArticles([...healthArticles,...result.feed ])
                }
                setoffset((value)=>pageNo+1)
                
                break
            case "business":
                 result= await getFeed({PageNo: pageNo, category: category})
                if(result.success){
                    setbusinessArticles([...businessArticles,...result.feed ])
                }
                setoffset((value)=>pageNo+1)
                
                break
            case "sports":
                result= await getFeed({PageNo: pageNo, category: category})
                if(result.success){
                    setsportsArticles([...sportsArticles,...result.feed ])
                }
                setoffset((value)=>pageNo+1)
                
                break
            case "technology":
                 result= await getFeed({PageNo: pageNo, category: category})
                if(result.success){
                    settechnologyArticles([...technologyArticles,...result.feed ])
                }
                setoffset((value)=>pageNo+1)
                
                break
            case "science":
                 result= await getFeed({PageNo: pageNo, category: category})
                if(result.success){
                    setscienceArticles([...scienceArticles,...result.feed ])
                }
                setoffset((value)=>pageNo+1)
                
                break
            case "entertainment":
                result= await getFeed({PageNo: pageNo, category: category})
                if(result.success){
                    setentertainmentArticles([...entertainmentArticles,...result.feed ])
                }
                setoffset((value)=>pageNo+1)
                
                break
            case "general":
                result= await getFeed({PageNo: pageNo, category: category})
                if(result.success){
                    setgeneralArticles([...generalArticles,...result.feed ])
                }
                setoffset((value)=>pageNo+1)
                
                break
            default:
                
                break
            }
            
      }
      const reload = async()=>{
        // setoffset( 1)
        
        // let newArticles= await getArticles(1)
        // setarticles([...newArticles])
        // setoffset((value)=>2)
        return;
      }
   
    return(
        <FeedContext.Provider value={{fetchArticles, offset, reload,healthArticles, scienceArticles, technologyArticles, entertainmentArticles, sportsArticles, businessArticles, generalArticles }}>
            {children}
        </FeedContext.Provider>
    )
}
export default FeedState
export const useFeedContext = ()=> useContext(FeedContext)