import { useRouter } from 'next/router'
import Custom404 from './404'

const CatchAllRoute: React.FC = () => {
  const router = useRouter()
  const { slug } = router.query

  // You can add custom logic here based on the slug if needed
  console.log('Attempted to access:', slug)

  // For now, we'll just render the 404 page
  return <Custom404 />
}

export default CatchAllRoute