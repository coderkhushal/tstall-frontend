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
import TopBarStoriesTrackerItem from './topbar_stories_tracker_item'

const TopbarStories = () => {

    const [storydata, setstorydata] = useState<StoryDataType[] | null>(null)
    const [StoryDataNumber, setStoryDataNumber] = useState<number>(0)
    const [storyNumber, setstoryNumber] = useState<number>(0)
    const [expanded, setexpanded] = useState<boolean>(false)
    const [storyInterval, setstoryInterval] = useState<NodeJS.Timeout | null>(null)
    const [IntervalStarted, setIntervalStarted]= useState<boolean> (false)
    const { user } = useAuthContext()
    useEffect(() => {
        if (user && !storydata) {
            fetchStories().then(()=>{setIntervalStarted(true)})
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
    const handleMoveStoryDataforward = () => {
        if (!storydata) {
            return
        }
        if (StoryDataNumber < storydata.length - 1) {
            setStoryDataNumber(value => (StoryDataNumber + 1))
        }
        else {
            setStoryDataNumber(0)
        }
    }
    const handleMoveStoryforward = () => {
        if (!storydata) {
            return
        }
        if (storyNumber < storydata[StoryDataNumber].stories.length - 1) {
            console.log(storyNumber)
            setstoryNumber(value => (storyNumber + 1))
        }
        else {
            setstoryNumber(0)
            handleMoveStoryDataforward()
        }
    }
    const handleMoveStoryDatabackward = () => {
        if (!storydata) {
            return
        }
        let newstorydatanumber = StoryDataNumber;
        if (StoryDataNumber > 0) {
            newstorydatanumber = StoryDataNumber - 1;
            setStoryDataNumber(value => (newstorydatanumber))
            setstoryNumber(value => (storydata[newstorydatanumber].stories.length - 1))
        }
        else {
            newstorydatanumber = storydata.length - 1;
            setStoryDataNumber(value => (newstorydatanumber))
            setstoryNumber(value => (storydata[newstorydatanumber].stories.length - 1))
        }
    }
    const handleMoveStorybackward = () => {
        if (!storydata) {
            return
        }
        if (storyNumber > 0) {
            setstoryNumber(value => (storyNumber - 1))
        }
        else {

            handleMoveStoryDatabackward()
        }
    }
    // add a timer to move the story forward
    useEffect(() => {
        if (!storydata) {
            return
        }
        if (!IntervalStarted) {
            
            return
        }
        const interval = setInterval(() => {
            if (storyNumber < storydata[StoryDataNumber].stories.length - 1) {
                setstoryNumber(value => (value + 1))
            }
            else {
                setstoryNumber(0)
                handleMoveStoryDataforward()
            }
        }, 3000)

        setstoryInterval(interval)
        setIntervalStarted(true)
        return () => {
            clearInterval(interval)
        }
    }, [storydata, storyNumber, StoryDataNumber])

    if (!storydata) {
        return (
            <div className='h-32 w-full relative lg:flex lg:w-36  lg:h-full    bg-tertiary flex items-center lg:flex-col  justify-start'>
                <h1 className='text-2xl py-2 font-bold tracking-wider text-primary h-20  hidden lg:flex'>Catchup</h1>
                <Suspense >
                    {
                        user ? null :

                            <TopAuthBar />

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
            <div className="stories bg-dark p-5 py-2 lg:p-1 lg:w-20 hover:lg:w-40  transition-all  overflow-y-auto  relative rounded-b-2xl w-full overflow-x-auto flex lg:flex-col lg:h-full lg:space-y-6 " onMouseEnter={()=>{setexpanded(true)}} onMouseLeave={()=>{setexpanded(false)}}>
                <Suspense>
                    {
                        user ? null : <TopAuthBar />
                    }

                </Suspense>
                    <h1 className={`${expanded ? "lg:flex" :"lg:hidden"} text-3xl py-2 font-bold tracking-wider text-primary h-20  hidden  items-center justify-center w-full `}>Catchup</h1>
                    {!expanded && <div className='h-16 w-full'></div>}

                <Dialog >

                    <div className='flex lg:flex-col lg:overflow-y-auto lg:h-[80vh] lg:space-y-3 lg:overflow-x-hidden '>


                    {
                        storydata.map((storydataitem, index) => (
                            
                            <TopbarStoriesItem isExpanded={expanded} key={index} storyNumber={index} handleOpenStory={handleOpenStory} src={ "/assets/"+storydataitem.title+".jpeg"} title={storydataitem.title} />
                        ))
                    }

                    </div>
                    

                    <DialogContent className="h-full max-w-lg w-full p-0 border-black " onClick={handleClick}>

                        <div className={`absolute top-0 flex w-full gap-1 z-20 pt-1`}>
                            { Array.from({length: storydata[StoryDataNumber].stories.length}).map((e , index)=><TopBarStoriesTrackerItem current={index==storyNumber} highlight={index<=storyNumber} key={index}/>)}
                        </div>
                        <DialogHeader className='w-full text-center  text-2xl font-extrabold text-zinc-900 bg-black'>

                            <DialogDescription className='w-full h-full flex items-center flex-col justify-between flex-1 '>
                                <h1 className='px-2 z-30 absolute bottom-56 font-medium py-4 text-2xl text-white bg-zinc-950 text-center flex itemce justify-center '>

                                    {(storydata.length > StoryDataNumber && storydata[StoryDataNumber].stories.length>0) ? storydata[StoryDataNumber].stories[storyNumber].title.substring(0, 130) + "..." : ""}
                                </h1>
                                <img src={(storydata.length > StoryDataNumber && storydata[StoryDataNumber].stories.length>0) ? storydata[StoryDataNumber].stories[storyNumber].urlToImage : "https://media.assettype.com/sentinelassam-english%2F2024-06%2Fbd7021c0-5cc6-4de0-a725-d01b905f4b0c%2Fwomen.png?w=120"} className='bg-cover h-full  w-full rounded-b-3xl ' />

                                {/* <Button className='z-40' variant={"outline"} onClick={handleMoveStorybackward}><ArrowLeft/></Button>
                                <Button className='z-40' variant={"outline"} onClick={handleMoveStoryforward}><ArrowRight/></Button> */}


                                <Button className='w-full  z-50 bg-dark text-white' variant={"outline"}>
                                    <Link href={(storydata && storydata.length > 0 && storydata[StoryDataNumber].stories.length>0 ) ? "/article/" + storydata[StoryDataNumber].stories[storyNumber].id : "/"} className='flex justify-center w-full items-center ' >
                                        Read More <Forward className='mx-3' />
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