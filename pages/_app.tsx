import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useStore } from '../lib/store'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const { isLoading } = useStore()
  const router = useRouter()

  // List of valid routes
  const validRoutes = ['/', '/login', '/dashboard']

  // Check if the current route is valid
  const isValidRoute = validRoutes.includes(router.pathname)

  return (
    <Layout>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : isValidRoute ? (
        <Component {...pageProps} />
      ) : (
        <Component {...pageProps} />  // This will render the 404 or catch-all page
      )}
    </Layout>
  )
}

export default MyApp