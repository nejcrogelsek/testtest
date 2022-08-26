import { Category, Sport } from 'models/Sports'
import { FC, useEffect, useState } from 'react'

const categories = [
  { id: 0, name: 'Set sports' },
  { id: 1, name: 'Competition sports' },
  { id: 2, name: 'Other' },
]

const sports = [
  { id: 2, name: 'Golf', category: 1 },
  { id: 3, name: 'Formula 1', category: 1 },
  { id: 0, name: 'Tennis', category: 0 },
  { id: 5, name: 'Hockey', category: 2 },
  { id: 1, name: 'Squash', category: 0 },
  { id: 4, name: 'Soccer', category: 2 },
]

const TestThree: FC = () => {
  const [generatedObject, setGeneratedObject] = useState<Category[]>()

  const generateObject = () => {
    const results: Category[] = []
    for (let categoryIndex = 0; categoryIndex < categories.length; categoryIndex++) {
      const validSports: Sport[] = []
      const category = categories[categoryIndex]
      for (let sportIndex = 0; sportIndex < sports.length; sportIndex++) {
        const sport = sports[sportIndex]
        if (category.id === sport.category) {
          validSports.push(sport)
        }
      }
      results.push({
        id: category.id,
        name: category.name,
        sports: [...validSports],
      })
    }
    setGeneratedObject(results)
  }

  useEffect(() => {
    generateObject()
  }, [])

  return (
    <div className="test-three">
      <h1>TEST 3 - Aggregated object </h1>
      <div>
        <pre>{JSON.stringify(generatedObject, undefined, 2)}</pre>
      </div>
    </div>
  )
}

export default TestThree
