'use client'

import login from "@/actions/login"
import signUp from "@/actions/sign-up"
import Link from "next/link"

export const LoginForm = ({handleChange}) => (
    <div className="shadow p-5 self-center ">
        <form action={login} className="w-96">
            <div className="flex flex-col justify-between">
                <h1 className="text-xl font-bold text-slate-700 self-center">Login</h1>
                <label htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    className="mb-4 border border-gray-300 py-2 px-4 text-gray-700 focus:ring-green-900 focus:border-green-900 block w-full"
                />
                <label htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="mb-4 border border-gray-300 py-2 px-4 text-gray-700 focus:ring-green-900 focus:border-green-900 block w-full"
                />
                <div className="flex gap-2 flex-row">
                    <button
                        type="submit"
                        className="w-1/2 bg-green-900 text-white font-bold py-2 px-4"
                    >
                        Login
                    </button>
                    <button onClick={handleChange} className="text-center w-1/2 border py-2 px-4 font-bold hover:text-green-900">
                        Sign Up
                    </button>
                </div>
            </div>
        </form>
    </div>
)

export const SignUpForm = ({handleChange}) => (
    <div className="shadow p-5 self-center ">
        <form action={signUp} className="w-96">
            <div className="flex flex-col justify-between">
                <h1 className="text-xl font-bold text-slate-700 self-center">Sign Up</h1>
                <label htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    className="mb-4 border border-gray-300 py-2 px-4 text-gray-700 focus:ring-green-900 focus:border-green-900 block w-full"
                />
                <label htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="mb-4 border border-gray-300 py-2 px-4 text-gray-700 focus:ring-green-900 focus:border-green-900 block w-full"
                />
                <div className="flex gap-2 flex-row">
                    <button
                        type="submit"
                        className="w-1/2 bg-green-900 text-white font-bold py-2 px-4"
                    >
                        Sign Up
                    </button>
                    <button onClick={handleChange} className="text-center w-1/2 border py-2 px-4 font-bold hover:text-green-900">
                        Login
                    </button>
                </div>
            </div>
        </form>
    </div>
)