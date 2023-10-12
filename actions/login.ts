'use server'

import bcrypt from 'bcrypt'
import { cookies } from 'next/headers'
import prisma from "@/lib/prisma";
import { redirect } from 'next/navigation'


export const login = async (formData: FormData) => {
    const email = formData.get('email') as string
    const plainTextPassword = formData.get('password') as string

    const user = await prisma.user.findFirstOrThrow({
        where: {
            email
        }
    })
    
    const match = await bcrypt.compare(plainTextPassword, user.password)

    if (!match) {
        // handle with error
    }

    // Set cookie for future us to know
    cookies().set('user-id', user.id)

    // ! REMOVE CONSOLE LOG
    console.log('user', user)
    console.log('user.completedRegistration', user.completedRegistration)

    if (user.completedRegistration) {
        redirect('/dashboard')
    } else {
        redirect('/finishRegistration')
    }
}

export default login