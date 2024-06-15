"use client"

import { z } from "zod"

export const LoginSchema = z.object({
  userName: z.string().min(1,{
    message: "UserName cannot be empty",
  }),
  password: z.string().min(1,{
    message: "Password cannot be empty",
  })
})


export const RegisterSchema = z.object({
  mailId: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().min(8,{
    message: "Password must be at least 8 characters",
  }),
  userName: z.string().min(1,{
    message: "Username cannot be empty",
  })
  
})


export const ProfileSchema = z.object({

  dateOfBirth: z.string(),
  gender: z.string(),
  languages: z.array(z.string()),
  region: z.array(z.string()),
  topicsOfInterest: z.array(z.string())

})