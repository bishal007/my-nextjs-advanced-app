import React from 'react'
import Link from 'next/link'
import { useStore } from '../lib/store'
import { useRouter } from 'next/router'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useStore()
  const router = useRouter()

  // List of routes where we want to show the navigation
  const routesWithNav = ['/', '/dashboard']

  const showNav = routesWithNav.includes(router.pathname)

  return (
    <div className="min-h-screen bg-gray-100">
      {showNav && (
        <nav className="bg-white shadow-sm">
          <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex-shrink-0 flex items-center">
                Logo
              </Link>
              <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                <Link href="/" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium">
                  Home
                </Link>
                <Link href="/dashboard" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">
                  Dashboard
                </Link>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              {user ? (
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                  Logout
                </button>
              ) : (
                <Link href="/login" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
        </nav>
      )}
      <main>{children}</main>
    </div>
  )
}

export default Layout