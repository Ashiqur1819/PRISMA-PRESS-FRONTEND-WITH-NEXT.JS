"use server"
import { cookies } from "next/headers"

export const getMe = async () => {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value

    if(!accessToken){
        return {
            success: false,
            message: "User not logged In"
        }

        // throw new Error("User not logged In")
    }

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/users/me`, {
        headers : {
            Authorization: `${accessToken}`
        }
    })

    const result = res.json()

    return result
}