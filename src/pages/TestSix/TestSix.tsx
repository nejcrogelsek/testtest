import { FC, useState } from 'react'
import { Container, PlayerList } from './styles'

interface Player {
  name: string
  year_of_birth: number
  nationality: string
}

const data: Player[] = [
  { name: 'Lionel Messi', year_of_birth: 1987, nationality: 'Argentina' },
  {
    name: 'Cristiano Ronaldo',
    year_of_birth: 1985,
    nationality: 'Portugal',
  },
  { name: 'Francesaco Totti', year_of_birth: 1976, nationality: 'Italy' },
  {
    name: 'Erling Braut Haaland',
    year_of_birth: 2000,
    nationality: 'Norway',
  },
  { name: 'Neymar', year_of_birth: 1992, nationality: 'Brazil' },
  { name: 'Gareth Bale', year_of_birth: 1989, nationality: 'Wales' },
  { name: 'Jamie Vardy', year_of_birth: 1997, nationality: 'England' },
  { name: 'Sergio Ramos', year_of_birth: 1986, nationality: 'Spain' },
]

const TestSix: FC = () => {
  const [filter, setFilter] = useState('')

  const viewPlayer = (player: Player) => {
    alert(`${player.name} - ${player.year_of_birth} - ${player.nationality}`)
    setFilter('')
  }

  return (
    <Container>
      <h1>TEST 6 - React (part 2)</h1>

      <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
      <PlayerList>
        {data
          .filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
          .map((player, index) => (
            <li onClick={() => viewPlayer(player)} key={index}>
              {player.name} - {player.year_of_birth} - {player.nationality}
            </li>
          ))}
      </PlayerList>
    </Container>
  )
}

export default TestSix
