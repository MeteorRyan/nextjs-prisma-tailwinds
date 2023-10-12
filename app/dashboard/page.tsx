import { Fragment } from 'react'
import { cookies } from 'next/headers'

import type { Metadata } from 'next'
import prisma from "@/lib/prisma";
import { redirect } from 'next/navigation'


export const metadata: Metadata = {
    title: 'Caveat Emptor | Dashboard',
    description: 'Do you want to make money? Do you like money? Then buy or sell your business on CE and start swimming in gold like a duck',
}

const HomePage = async () => {
    const userID = cookies().get('user-id')

    const posts = await prisma.post.findMany()
    const user = await prisma.user.findFirstOrThrow({
        where: {
            id: userID.value,
        }
    })

    // if the user has not finished registration - make them go do that.
     if (!user.completedRegistration) {
         redirect('/finishRegistration')
     }


    return (
        <Fragment>
            <main>
                I think that {false ? 'Are' : 'Are Not'} logged in
            </main>
            <footer>
                Copyright &copy; 2023 Caveat Emptor
            </footer>
        </Fragment>
    )
}

export default HomePage