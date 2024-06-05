"use client"
import React from 'react'
import TopbarStoriesItem from './topbar_stories_item'
import TopAuthBar from './top_auth_bar'

const TopbarStories = () => {

    return (
        <div>
            <div className="stories bg-secondary p-5 py-2  rounded-b-2xl w-full overflow-x-auto flex ">
                {
                <TopAuthBar/>
                }
                {Array.from({ length: 5 }, (_, i) => (
                    <TopbarStoriesItem key={i} />
                ))}

            </div>
        </div>
    )
}

export default TopbarStories