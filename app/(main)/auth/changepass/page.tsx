"use client"
import React, { useState } from 'react'
import { ChangePassSchema } from '@/schemas'
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import CardWrapper from '@/components/web/auth/card_wrapper'
import { Input } from '@/components/ui/input'
import { changePassword } from '@/actions/user'
import { useRouter } from 'next/navigation'
import FormSuccess from '@/components/web/auth/form_success'
import FormError from '@/components/web/auth/form_error'
const ChangePassPage = () => {
  const router = useRouter()
  const [error, seterror] = useState<string | undefined>(undefined)
  const [success, setsuccess] = useState<string | undefined>(undefined)
  const [Pending, setPending] = useState(false)
  const form = useForm<z.infer<typeof ChangePassSchema>>({
    resolver: zodResolver(ChangePassSchema),
    defaultValues: {
      userName: "",
      existingPassword: "",
      password: ""
    }
  })
  async function onSubmit(values: z.infer<typeof ChangePassSchema>) {
    setsuccess("")
    seterror("")
    setPending(true)

    const result = await changePassword(values)
    console.log(result)
    seterror(result.error)
    setsuccess(result.success)
    setPending(false)
    if (result.success) {

      router.push("/")
    }

  }
  return (
    <div className='h-full w-full bg-tertiary flex justify-center items-center'>
      <CardWrapper heading='Reset your password !' backbuttonhref='/auth/register' backbuttonlabel={`Don't have an account?`}>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-8'
          >
            <FormField
              disabled={Pending}
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='John Doe'
                      disabled={Pending}
                      {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>

              )}
            />
            <FormField
              disabled={Pending}
              control={form.control}
              name="existingPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Existing Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='John Doe'
                      disabled={Pending}
                      {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>

              )}
            />
            <FormField
              disabled={Pending}
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='John Doe'
                      disabled={Pending}
                      type='text'
                      {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>

              )}
            />
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button type="submit" className='w-full bg-orange-300' variant={"secondary"} disabled={Pending}>Submit</Button>

          </form>

        </Form>
      </CardWrapper>
    </div>


  )
}

export default ChangePassPage