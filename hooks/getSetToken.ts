"use client"
export const getSetToken = (token: string) => {
    localStorage.setItem("token", token)
}