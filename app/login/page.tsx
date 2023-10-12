'use client'

import { LoginForm, SignUpForm } from "app/components/UserForms"
import Image from "next/image"
import { Fragment, useState } from "react"


const Page = () => {
    const [displayLogin, setDisplayLogin] = useState(true)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDisplayLogin(!displayLogin);
    };

    return (
    <div className="flex flex-grow justify-center">
        <Image src="/2bmen.png" alt="me" width="512" height="512" />
        { displayLogin ? <LoginForm handleChange={handleChange} /> : <SignUpForm handleChange={handleChange}/> }
    </div>

    
)}

export default Page