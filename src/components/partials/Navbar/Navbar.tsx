import Icon from 'components/ui/Icon/Icon'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { NavList } from './styles'

interface Props {}

const Navbar: FC<Props> = (props: Props) => {
  return (
    <div className="navbar">
      <NavList>
        <li>
          <Link to="/">
            <Icon icon="home" />
          </Link>
        </li>
        <li>
          <Link to="/test-1">Test 1 - HTML</Link>
        </li>
        <li>
          <Link to="/test-2">Test 2 - Vanilla JS</Link>
        </li>
        <li>
          <Link to="/test-3">Test 3 - Aggregated object</Link>
        </li>
        <li>
          <Link to="/test-4">Test 4 - React (Part 1)</Link>
        </li>
        <li>
          <Link to="/test-5">Test 5 - Styling</Link>
        </li>
        <li>
          <Link to="/test-6">Test 6 - React (Part 2)</Link>
        </li>
        <li>
          <Link to="/test-7">Test 7 - React (Part 3, optimization and bug fix)</Link>
        </li>
      </NavList>
    </div>
  )
}

export default Navbar
