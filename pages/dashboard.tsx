import { useEffect } from 'react'
import { useStore } from '../lib/store'
import { useRouter } from 'next/router'

const Dashboard = () => {
  const { user } = useStore()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  if (!user) {
    return null
  }

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      <p className="mt-4 text-gray-600">Welcome, {user.email}!</p>
    </div>
  )
}

export default Dashboard