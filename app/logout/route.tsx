import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export const GET = () => {
    cookies().delete('user-id')

    redirect('/')
}