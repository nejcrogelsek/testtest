import { FC, memo } from 'react'

interface Props {
  counterObject: {
    value: number
  }
}

const Counter: FC<Props> = (props) => {
  return <div>{props.counterObject.value}</div>
}

export default memo(Counter)
