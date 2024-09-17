import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})

const LazyComponent: React.FC = () => {
  const [showComponent, setShowComponent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowComponent(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Lazy Loaded Component</h2>
      {showComponent ? (
        <HeavyComponent />
      ) : (
        <p className="text-gray-600">Component will load in 2 seconds...</p>
      )}
    </div>
  )
}

export default LazyComponent