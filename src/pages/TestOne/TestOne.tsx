import { FC } from 'react'

const TestOne: FC = () => {
  return (
    <div className="test-one">
      <h1>1 - HTML</h1>
      <ul>
        <li>
          Set sports
          <ul>
            <li>Tennis</li>
            <li>Squash</li>
          </ul>
        </li>
        <li>
          Competition sports
          <ul>
            <li>Golf</li>
            <li>Formula 1</li>
          </ul>
        </li>
        <li>
          Other
          <ul>
            <li>Soccer</li>
            <li>Hockey</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default TestOne
