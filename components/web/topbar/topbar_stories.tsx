"use client"
import React, { Suspense, useEffect, useState } from 'react'
import TopbarStoriesItem from './topbar_stories_item'
import TopAuthBar from './top_auth_bar'
import { getGetToken } from '@/hooks/getGetToken'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,

} from "@/components/ui/dialog"
import { StoryDataType } from '@/types'
import { getStories } from '@/actions/stories'
import Loading from '@/components/ui/loading'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Forward } from 'lucide-react'
import Link from 'next/link'
import { useAuthContext } from '@/context/AuthContext'

const TopbarStories = () => {
  
    const [storydata, setstorydata] = useState<StoryDataType[] | null>(null)
    const [StoryDataNumber, setStoryDataNumber] = useState<number>(0)
    const [storyNumber, setstoryNumber] = useState<number>(0)
    const {user}= useAuthContext()
    useEffect(() => {
        if(user){
            fetchStories()
        }
    }, [user])
    const fetchStories = async () => {
        const data = await getStories()
        if (data.success) {
            setstorydata(data.stories)
        }
        else {
            alert(JSON.stringify(data.error))
            setstorydata([])
        }
    }
    const handleOpenStory = (n: number) => {
        setStoryDataNumber(n)
        setstoryNumber(0)
    }
    const handleMoveStoryDataforward = ()=>{
        if(!storydata){
            return
        }
        if(StoryDataNumber<storydata.length-1){
            setStoryDataNumber(value=>(StoryDataNumber+1))
        }
        else{
            setStoryDataNumber(0)
        }
    }
    const handleMoveStoryforward=()=>{
        if(!storydata){
            return
        }
        if( storyNumber< storydata[StoryDataNumber].stories.length-1){
            setstoryNumber(value=>(storyNumber+1))
        }
        else{
            setstoryNumber(0)
            handleMoveStoryDataforward()
        }
    }
    const handleMoveStoryDatabackward = ()=>{
        if(!storydata){
            return
        }
        let newstorydatanumber= StoryDataNumber;
        if(StoryDataNumber>0){
             newstorydatanumber= StoryDataNumber-1;
            setStoryDataNumber(value=>(newstorydatanumber))
            setstoryNumber(value=>(storydata[newstorydatanumber].stories.length-1))
        }
        else{
            newstorydatanumber= storydata.length-1;
            setStoryDataNumber(value=>(newstorydatanumber))
            setstoryNumber(value=>(storydata[newstorydatanumber].stories.length-1))
        }
    }
    const handleMoveStorybackward=()=>{
        if(!storydata){
            return
        }
        if( storyNumber>0){
            setstoryNumber(value=>(storyNumber-1))
        }
        else{
            
            handleMoveStoryDatabackward()
        }
    }
    if (!storydata) {
        return (
            <div className='h-32 w-full  bg-primary flex items-center justify-center'>
                
                <Suspense>
                    {
                        user ? null : <TopAuthBar />
                    }

                </Suspense>
            </div>
        )
    }

    const handleClick = (event: any) => {
        // Get the bounding rectangle of the element
        const rect = event.currentTarget.getBoundingClientRect();
        
        // Calculate the midpoint of the element
        const midpoint = rect.left + rect.width / 2;
    
        // Get the x-coordinate of the click
        const clickX = event.clientX;
    
        // Determine if the click was on the left or right half
        if (clickX < midpoint) {
          handleMoveStorybackward()
        } else {
          handleMoveStoryforward();
        }
      };
    return (
        <div>
            <div className="stories bg-secondary p-5 py-2 h-28 relative rounded-b-2xl w-full overflow-x-auto flex ">
                <Suspense>
                    {
                        user ? null : <TopAuthBar />
                    }

                </Suspense>
                <Dialog >



                    {
                        storydata.map((storydataitem, index) => (

                            <TopbarStoriesItem key={index} storyNumber={index} handleOpenStory={handleOpenStory} src={storydataitem.urlToImage} title={storydataitem.title} />
                        ))
                    }


                    <DialogContent className="h-full w-full p-0 border-black " onClick={handleClick}>


                        <DialogHeader className='w-full text-center  text-2xl font-extrabold text-zinc-900 bg-primary'>
                            <h1 className='pt-7 px-2   h-52 text-center flex itemce justify-center  '>

                                {storydata.length > StoryDataNumber ? storydata[StoryDataNumber].stories[storyNumber].title.substring(0,130)+"..." : ""}
                            </h1>
                            <DialogDescription className='w-full h-full flex items-center justify-between flex-1 relative'>
                               
                                <img src={storydata.length > StoryDataNumber ? storydata[StoryDataNumber].stories[storyNumber].urlToImage : "https://media.assettype.com/sentinelassam-english%2F2024-06%2Fbd7021c0-5cc6-4de0-a725-d01b905f4b0c%2Fwomen.png?w=120"} className='bg-cover h-96 lg:h-[32rem] w-full absolute top-0' />
                            
                                {/* <Button className='z-40' variant={"outline"} onClick={handleMoveStorybackward}><ArrowLeft/></Button>
                                <Button className='z-40' variant={"outline"} onClick={handleMoveStoryforward}><ArrowRight/></Button> */}


                                <Button className='w-full absolute bottom-2 z-50 bg-dark text-white' variant={"outline"}>
                                <Link href={(storydata && storydata.length>0) ?  "/article/"+storydata[StoryDataNumber].stories[storyNumber].id: "/"} className='flex justify-center w-full items-center ' >
                                    Read More <Forward className='mx-3'/>
                                </Link>
                                </Button>
                            </DialogDescription>

                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default TopbarStories