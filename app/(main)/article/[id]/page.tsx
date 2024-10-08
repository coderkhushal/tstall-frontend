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
import { Speaker } from '@/lib/speaker'
import { getIsTokenExpired } from '@/hooks/getIsTokenExpired'
import { getGetToken } from '@/hooks/getGetToken'
import { useRouter } from 'next/navigation'
import NewsCardInteractions from '@/components/web/cards/news_card_interactions'
import ShareList from '@/components/web/functionalities/share_button'
import { Dialog } from '@/components/ui/dialog'
import { DialogTrigger, DialogContent } from '@/components/ui/dialog'
import { Link as LinkIcon, Pause,  Volume2 } from 'lucide-react'
import Link from 'next/link'
import { useAuthContext } from '@/context/AuthContext'

const SingleArticle = ({ params }: { params: { id: string } }) => {
  const [article, setarticle] = useState<ArticleType | null>(null)
const {fetchUser, user} = useAuthContext()
  const [listening, setlistening] = useState(false)
  const router = useRouter()
  const handleSpeaking = ()=>{
    if(!article){
      return;
    }
    if(listening){
      Speaker.getInstance().stop()
    }
    else{

      Speaker.getInstance().speak(article.title + "." + article.description + "." + article.content, "hi")
    }
    setlistening(!listening)

  }
  useEffect(() => {


 

    usecheckTokenAndRefresh()


  }, [user])
  const usecheckTokenAndRefresh = async () => {

    if(!user){

      await fetchUser()
    }
    if(user){

      await getSingleArticle()
    }
    
  }
  const getSingleArticle = async () => {
    const article = await getArticleById(params.id)

    setarticle(article[0])
  }
  if (!article) {
    return <Loading />
  }
  else
    return (
      <Drawer>
        <section className=" light relative  py-14 md:py-24 bg-secondary  text-zinc-900 h-full w-full overflow-y-auto  ">
          <div className='rounded-2xl bg-orange-400 text-tertiary p-2 absolute lg:left-32   lg:text-2xl lg:top-7 top-2 left-2'>{article.postType=="FunSection" ? "FunSection Post" : article.category}</div>
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
                  <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-8  items-center mb-6  lg:text-3xl">
                    <div className="flex lg:items-center space-x-2">


                      <div>
                        <p>
                          By<b> {article?.author}</b>
                        </p>
                      </div>
                      <div className="opacity-75 flex-col space-y-2 lg:flex-row flex mx-2 space-x-4 lg:space-x-8 lg:text-3xl items-center">
                        <div className='flex items-center space-x-2'>
                          <SlCalender className='mr-2' />

                          <span>
                            {article?.publishTime.split("T")[0]}
                          </span>
                          <span>

                            {article?.publishTime.split("T")[1].substring(0, 8)}
                          </span>
                        </div>

                      </div>


                    </div>
                    <div className='flex space-x-4 lg:space-x-8 items-center '>
                      <div className='relative '>

                        <NewsCardInteractions articleid={params.id} userDisliked={article.usersDisliked} userLiked={article.usersLiked} classname='space-x-4  lg:space-x-8 lg:text-3xl' />
                      </div>
                      <Dialog>
                        <DialogTrigger>

                          <FaShare className='cursor-pointer transition-all hover:scale-110 lg:text-3xl ' />

                        </DialogTrigger>

                        <ShareList />

                      </Dialog>

                      <DrawerTrigger>

                        <FaComment className='cursor-pointer transition-all hover:scale-110  lg:text-3xl' />
                      </DrawerTrigger>
                      <Comments articleId={params.id} />
                      {article.url && <Link href={article.url} >
                      <LinkIcon />
                      </Link>
}
                      <div className="flex justify-center  cursor-pointer text-xl items-center space-x-2 border-2 border-black lg:p-2 rounded-3xl lg:w-32 w-28" onClick={()=>handleSpeaking()}>

                      <span>{!listening ? "Listen" : "Stop"}</span>
                      {!listening ? <Volume2/> : <Pause/>}
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