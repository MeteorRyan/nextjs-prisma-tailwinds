'use server'

import bcrypt from 'bcrypt'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import prisma from "@/lib/prisma";

export const signUp = async (formData: FormData) => {
    const email = formData.get('email') as string
    const plainTextPassword = formData.get('password') as string

    const password = await bcrypt.hash(plainTextPassword, 10)
    const saved = await prisma.user.create({
        data: {
            email,
            password,
            completedRegistration: false,
        }
    })

    // Set cookie for future us to know
    cookies().set('user-id', saved.id)
    redirect('/example')
}

export default signUp