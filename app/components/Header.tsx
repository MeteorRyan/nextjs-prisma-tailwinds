import React from 'react';
import Link from 'next/link';
import { cookies } from 'next/headers'

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const userID = cookies().get('user-id')

  console.log("userID", userID)

  return (
    <header className="flex flex-row justify-between w-screen items-center shadow text-slate-700 py-3 px-5 mb-3">
      <div className="flex flex-row flex-grow justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold">{title}</span>
        </Link>
        <nav className="flex flex-row space-x-4">
          <Link href="/about">
            <span className="hover:underline hover:text-green-900">About</span>
          </Link>
          <Link href="/businesses">
            <span className="hover:underline hover:text-green-900">Businesses</span>
          </Link>
          <Link href="/buyers">
            <span className="hover:underline hover:text-green-900">Buyers</span>
          </Link>
          <Link href="/advisors">
            <span className="hover:underline hover:text-green-900">Advisors</span>
          </Link>
          { userID ? 
            <Link href="/dashboard">
              <span className="hover:underline hover:text-green-900">Dashboard</span>
            </Link>
            :  <Link href="/login">
            <span className="hover:underline hover:text-green-900">Log In</span>
          </Link>
          }
        </nav>
      </div>
    </header>
  );
};

export default Header;