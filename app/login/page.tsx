'use client'

import login from "@/actions/login"

const Page = () => (
    <form action={login}>
        <div>
            <label htmlFor="email">
                Email
            </label>
            <input  type="email" name="email" id="email" className="border-2"/>
        </div>
        <div>
            <label htmlFor="password">
                Password 
            </label>
            <input  type="password" name="password" id="password" className="border-2"/>
        </div>
        <div>
            <button type="submit">
                Login
            </button>
            <button type="reset">
                Reset
            </button>
        </div>
    </form>
)

export default Page