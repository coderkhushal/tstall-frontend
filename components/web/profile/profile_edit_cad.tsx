"use client"
import { DialogContent } from '@/components/ui/dialog'
import React from 'react'
 
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ProfileSchema } from '@/schemas'
import { updateProfile } from '@/actions/user'
import { FancyMultiSelect } from './profile_language_selector'


   
const ProfileEditCard = () => {
    const form = useForm<z.infer<typeof ProfileSchema>>({
        resolver: zodResolver(ProfileSchema),
      })
     
      async function onSubmit(data: z.infer<typeof ProfileSchema>) {
        const response = await updateProfile(data)
      }
    return (

        <DialogContent className="sm:max-w-[425px]">
             <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={"male"}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="others">Others</SelectItem>
                </SelectContent>
              </Select>
        
              <FormMessage />
            </FormItem>
            

          )}
        />
        
            

        <Button type="submit">Submit</Button>
      </form>
    </Form>
        </DialogContent>


    )
}

export default ProfileEditCard