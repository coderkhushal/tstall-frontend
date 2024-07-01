import React, { useEffect, useState } from 'react'

const TopBarStoriesTrackerItem = ({highlight, current}: {highlight: boolean, current: boolean}) => {
  // const [progress, setProgress] = useState<number>(0)
  // useEffect(() => {
  //   if (!current) {
  //     return;
  //   }
  //   const interval = setInterval(() => {
  //     setProgress(prevProgress => (prevProgress + 100 / (3000 / 100)) % 100);
  //   }, 100);

  //   return () => clearInterval(interval);
  // }, [current]);

  return (
    <div className={` border-[1px] rounded-sm  border-black  flex-1 h-2 ${(highlight && !current) && "bg-white"} `}>
      {current && 
      <div className={`flex bg-white h-full rounded-sm`}   style={{
        width: `100%`,
        transition: 'width 0.1s linear',
      }}></div>
      }
    </div>
  )
}

export default TopBarStoriesTrackerItem