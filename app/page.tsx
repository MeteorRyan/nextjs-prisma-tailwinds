import { Fragment } from 'react'
import { cookies } from 'next/headers'

import type { Metadata } from 'next'



export const metadata: Metadata = {
    title: 'Caveat Emptor | Your Path To Financial Success',
    description: 'Do you want to make money? Do you like money? Then buy or sell your business on CE and start swimming in gold like a duck',
}

const HomePage = () => {
    const userID = cookies().get('user-id')
    return (
        <Fragment>
            <main>
                I think that {userID ? 'Are' : 'Are Not'} logged in
            </main>
            <footer>
                Copyright &copy; 2023 Caveat Emptor
            </footer>
        </Fragment>
    )
}

export default HomePage