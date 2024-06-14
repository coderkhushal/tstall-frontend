
"use client"
import FeedCard from '@/components/web/feed/feed_card'
import { useFeedContext } from '@/context/FeedContext'
import { ArticleType, CategoryType } from '@/types'
import { useInView } from 'react-intersection-observer'
import React, { useEffect, useId, useState } from 'react'
import Loading from '@/components/ui/loading'
import FeedCategorySelect from '@/components/web/feed/feed_category_select'
import { cn } from '@/lib/utils'
import DottedBg from '@/components/web/style/dotted_bg'

const FeedPage = () => {
  // states 
  const { generalArticles, businessArticles, technologyArticles, entertainmentArticles, sportsArticles, scienceArticles, healthArticles, fetchArticles, offset } = useFeedContext()
  const [currentArticles, setcurrentArticles] = useState<ArticleType[]>()
  const [currentCategory, setcurrentCategory] = useState<CategoryType>("general")
  const { ref, inView } = useInView()

  //  useeffects 

  useEffect(() => {
    switch (currentCategory) {
      case "general":
        setcurrentArticles(generalArticles)
        break
      case "business":
        setcurrentArticles(businessArticles)
        break
      case "technology":
        setcurrentArticles(technologyArticles)
        break
      case "entertainment":
        setcurrentArticles(entertainmentArticles)
        break
      case "sports":
        setcurrentArticles(sportsArticles)
        break
      case "science":
        setcurrentArticles(scienceArticles)
        break
      case "health":
        setcurrentArticles(healthArticles)
        break
      default:
        break
    }
  }, [currentCategory, healthArticles, technologyArticles, sportsArticles, scienceArticles, generalArticles, entertainmentArticles, businessArticles])

  useEffect(() => {
    onValueChange(currentCategory)
  }, [])

  useEffect(() => {
    if (inView) {
      LoadMore()
    }
  }, [inView])



  //functions
  const LoadMore = () => {

    fetchArticles({ pageNo: offset, category: currentCategory })
  }
  const onValueChange = async (value: CategoryType) => {
    setcurrentCategory(value)
    switch (value) {
      case "general":
        if (generalArticles.length === 0) {
          await fetchArticles({ pageNo: 1, category: "general" })
        }
        break
      case "business":
        if (businessArticles.length === 0) {
          await fetchArticles({ pageNo: 1, category: "business" })
        }
        break
      case "technology":
        if (technologyArticles.length === 0) {
          await fetchArticles({ pageNo: 1, category: "technology" })
        }
        break
      case "entertainment":
        if (entertainmentArticles.length === 0) {
          await fetchArticles({ pageNo: 1, category: "entertainment" })
        }
        break
      case "sports":
        if (sportsArticles.length === 0) {
          await fetchArticles({ pageNo: 1, category: "sports" })
        }
        break
      case "science":
        if (scienceArticles.length === 0) {
          await fetchArticles({ pageNo: 1, category: "science" })
        }
        break
      case "health":
        if (healthArticles.length === 0) {
          await fetchArticles({ pageNo: 1, category: "health" })
        }
        break
      default:
        break

    }

  }
  
  return (
    <div className='py-32 pt-2  w-full relative overflow-y-hidden '>
     <DottedBg/>
      <div className='flex  w-full flex-col  px-6 py-4 lg:justify-center lg:items-center '>


        <FeedCategorySelect onValueChanging={onValueChange} />
      </div>
      <section className=" py-12 pt-6 px-6 grid grid-cols-1 gap-6 h-full overflow-y-scroll snap-y snap-mandatory text-stone-800 m-0">


        {currentArticles?.map((article, index) => {
          return <FeedCard LastArticleRef={index == currentArticles.length - 1 ? ref : null} key={index} article={article} />
        })}
        <div className='relative'>

          <Loading />
        </div>
      </section>

    </div>

  )
}

export default FeedPage