import { FC } from 'react'

interface Props {
  time: Date
}

const Time: FC<Props> = (props) => {
  const { time } = props
  return <div>{`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}</div>
}

export default Time
