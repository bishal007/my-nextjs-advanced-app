import React from 'react'
import LazyComponent from '../components/LazyComponent'

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our Next.js App</h1>
      <LazyComponent />
    </div>
  )
}

export default Home