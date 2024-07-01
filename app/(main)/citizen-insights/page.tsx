import { Button } from '@/components/ui/button'
import InsightItem from '@/components/web/insights/insight-item'
import { Glasses, Search } from 'lucide-react'
import React from 'react'

const CitizenInsightsPage = () => {
    return (
        <div className='h-full w-full light flex flex-col p-2 overflow-y-auto space-y-2  bg-primary dark:bg-[#0b1727] text-zinc-900 dark:text-white'>
            <div className="flex justify-between items-center bg-gray-200  w-full px-4 shadow-lg py-4">
                <h1 className='font-bold  text-xl flex'>
                    <Glasses className='mr-2 '/>
                    Insights
                </h1>
                <Button className='bg-gray-300 text-yellow-700 text-lg font-semibold'>
                    Post
                </Button>
            </div>
            <div className="h-full space-y-4 overflow-y-auto">

            <InsightItem/>
            <InsightItem/>
            <InsightItem/>
            <InsightItem/>
            </div>
        </div>
    )
}

export default CitizenInsightsPage