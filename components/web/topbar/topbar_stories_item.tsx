import React from 'react'

const TopbarStoriesItem = () => {
  return (
    <div className="storie-item flex flex-col mr-6">
    <div className="rounded-full p-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="rounded-full bg-tertiary wrapper overflow-hidden h-16 w-16">
        <img src="https://media.assettype.com/sentinelassam-english%2F2024-06%2Fbd7021c0-5cc6-4de0-a725-d01b905f4b0c%2Fwomen.png?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100" className='bg-contain h-full w-full  bg-no-repeat' alt=""/>
      </div>
    </div>
    <div className="user-name text-center pt-1">
      <span className="text-gray-700 text-sm">
        Article
      </span>
    </div>
  </div>
  )
}

export default TopbarStoriesItem