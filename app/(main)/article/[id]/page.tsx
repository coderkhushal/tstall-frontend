"use client"
import { getArticleById } from '@/actions/articles'
import { DrawerTrigger } from '@/components/ui/drawer'
import Loading from '@/components/ui/loading'
import Comments from '@/components/web/comments/comments'

import { ArticleType } from '@/types'
import React, { useEffect, useState } from 'react'
import { FaBookmark, FaComment, FaShare, FaThumbsDown, FaThumbsUp } from 'react-icons/fa'
import { SlCalender } from 'react-icons/sl'
import { Drawer } from "@/components/ui/drawer"

import { getIsTokenExpired } from '@/hooks/getIsTokenExpired'
import { getGetToken } from '@/hooks/getGetToken'
import { useRouter } from 'next/navigation'
import NewsCardInteractions from '@/components/web/cards/news_card_interactions'

const SingleArticle = ({ params }: { params: { id: string } }) => {
  const [article, setarticle] = useState<ArticleType | null>(null)
  const router = useRouter()

  useEffect(() => {
    const getSingleArticle = async () => {
      const article = await getArticleById(params.id)

      setarticle(article[0])
    }
    const token = getGetToken()
    if(!token){
      router.push("/auth/login")
      return;
    }
    const isExpired = getIsTokenExpired(token)
   
      const usecheckTokenAndRefresh = async () => {


          if (token && isExpired) {
              
                  router.push("/auth/login")

              
          }
          else if (!token) {
              router.push("/auth/login")
          }
          else{
            getSingleArticle()
          }
      }

      usecheckTokenAndRefresh()
  
    
  }, [])
  if (!article) {
    return <Loading />
  }
  else
    return (
      <Drawer>
      <section className=" light relative  py-14 md:py-24 bg-secondary  text-zinc-900 h-full w-full overflow-y-auto  ">
        <div className='rounded-2xl bg-orange-400 p-2 absolute lg:left-6 lg:text-2xl top-2 left-2'>{article.category}</div>
        <div className="container px-4 w-full">
          <div className="grid grid-cols-12 w-full">

            <div className="col-span-12 md:col-span-10 w-full">
              <h2 className="text-2xl w-full leading-none font-bold md:text-6xl md:leading-none mb-6">
                {article?.title}
              </h2>


            </div>

            <div className="col-span-12">
              <div className="my-6 md:my-12 w-full">
                <img
                  src={article?.urlToImage ? article.urlToImage : "https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                  alt=""
                  className="w-full max-h-[700px] object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 justify-center">
            <div className="col-span-12 md:col-span-10 md:col-start-2">
              <div className="md:px-20">
                <div className="flex items-center mb-6">

                  <div>
                    <p>
                      By<b> {article?.author}</b>
                    </p>
                  </div>
                  <div className="opacity-75 flex-col space-y-2 lg:flex-row flex mx-2 space-x-4 items-center">
                    <div className='flex items-center space-x-2'>
                      <SlCalender className='mr-2' />

                      <span>
                        {article?.publishTime.split("T")[0]}
                      </span>
                      <span>

                        {article?.publishTime.split("T")[1].substring(0, 8)}
                      </span>
                    </div>
                    <div className='flex space-x-4 items-center '>
                      <div className='relative '>

                      <NewsCardInteractions articleid={params.id} userDisliked={article.usersDisliked} userLiked={article.usersLiked} classname='space-x-4'/>
                      </div>
                      <FaShare className='cursor-pointer transition-all hover:scale-110' />
                    
                        <DrawerTrigger>

                          <FaComment className='cursor-pointer transition-all hover:scale-110  size-4' />
                        </DrawerTrigger>
                        <Comments articleId={params.id} />
                 

                    </div>
                  </div>
                </div>

                <>
                  <h3 className="text-2xl md:text-3xl leading-snug font-medium mb-6">
                    {article?.description}
                  </h3>
                  <p className="text-lg leading-relaxed opacity-75">
                    {article?.content}
                  </p>
                </>
              </div>
            </div>
          </div>

        </div>
      </section>
      </Drawer>

    )
}

export default SingleArticle