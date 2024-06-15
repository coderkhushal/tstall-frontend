"use client";

import * as z from "zod";
import bcrypt from "bcryptjs";
import { RegisterSchema } from "@/schemas/index";



export const  register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalids Fields!" };
  }

  const { userName, mailId, password } = validatedFields.data;
  let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/newsapp/onboard/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({mailId , userName, password }),
  });
  
  const data = await res.text();

  if (res.status !== 200 || data=="Email already exists" || data=="UserName already exists") {
    return { error: data };
  }
   
  // TODO: send verification email token
  return { success: "User Created" , id : data };
};