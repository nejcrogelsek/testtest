import { Category } from 'models/Sports'
import { FC } from 'react'

const data: Category[] = [
  {
    id: 0,
    name: 'Set sports',
    sports: [
      { id: 0, name: 'Tennis', category: 0 },
      { id: 1, name: 'Squash', category: 0 },
    ],
  },
  {
    id: 1,
    name: 'Competition sports',
    sports: [
      { id: 2, name: 'Golf', category: 1 },
      { id: 3, name: 'Formula 1', category: 1 },
    ],
  },
  {
    id: 2,
    name: 'Other',
    sports: [
      { id: 4, name: 'Soccer', category: 2 },
      { id: 5, name: 'Hockey', category: 2 },
    ],
  },
]

const TestFour: FC = () => {
  return (
    <div className="test-four">
      <h1>TEST 4 - React (part 1)</h1>
      <ul>
        {data.map((category, index) => (
          <li key={index}>
            {category.name}
            <ul>
              {category.sports.map((sport) => (
                <li key={sport.id}>{sport.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TestFour
