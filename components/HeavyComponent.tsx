import React, { useEffect, useState } from 'react'

const HeavyComponent: React.FC = () => {
  const [data, setData] = useState<number[]>([])

  useEffect(() => {
    // Simulate heavy computation
    const heavyComputation = () => {
      const result: number[] = []
      for (let i = 0; i < 1000000; i++) {
        result.push(Math.random())
      }
      return result
    }

    const computedData = heavyComputation()
    setData(computedData.slice(0, 10)) // Only display first 10 items
  }, [])

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Heavy Component</h2>
      <p className="mb-2">This component simulates a heavy computation.</p>
      <ul className="list-disc list-inside">
        {data.map((item, index) => (
          <li key={index}>{item.toFixed(6)}</li>
        ))}
      </ul>
    </div>
  )
}

export default HeavyComponent