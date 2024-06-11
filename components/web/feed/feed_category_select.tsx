import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { CategoryType } from '@/types'
const FeedCategorySelect = ({onValueChanging}:{onValueChanging: (value:CategoryType)=>void}) => {
  return (
    <Select onValueChange={onValueChanging} >
      <SelectTrigger className="w-[180px] bg-primary ">
        <SelectValue placeholder="Select Category "  />
      </SelectTrigger>
      <SelectContent className='bg-primary '>
        <SelectGroup >
          <SelectLabel>Categories</SelectLabel>
          <SelectItem  value="technology">Technology</SelectItem>
          <SelectItem  value="general">General</SelectItem>
          <SelectItem  value="sports">Sports</SelectItem>
          <SelectItem  value="entertainment">Entertainment</SelectItem>
          <SelectItem  value="science">Science</SelectItem>
          <SelectItem  value="health">Health</SelectItem>
          <SelectItem  value="business">Business</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default FeedCategorySelect