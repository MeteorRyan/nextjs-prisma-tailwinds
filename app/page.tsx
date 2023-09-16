import { Fragment } from 'react'
import Link from 'next/link'
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
            <header className='w-full flex justify-between p-4 pb-8 pt-8 border-black border-b-[0.5px]'>
                <Link href="/">
                    <h1>Caveat Emptor</h1>
                </Link>
                <nav>
                    <Link
                        href={{
                            pathname: '/listings',
                            query: { type: 'business' },
                        }}
                        className="mr-4"
                    >
                        Buy a Business
                    </Link>
                    <Link
                        href={{
                            pathname: '/listings',
                            query: { type: 'franchise' },
                        }}
                        className="mr-4"
                    >
                        Buy a Franchise
                    </Link>
                    <Link
                        href={{
                            pathname: '/sell',
                        }}
                    >
                        Sell a Business
                    </Link>
                </nav>
                <nav>
                    <Link
                        href={{
                            pathname: '/login',
                        }}
                        className="mr-4"
                    >
                        Sign In
                    </Link>
                    <Link
                        href={{
                            pathname: '/sign-up',
                        }}
                    >
                        Join
                    </Link>
                </nav>
            </header>
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