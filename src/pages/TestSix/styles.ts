import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > input {
    width: 220px;
    margin: 1rem 0;
    height: 38px;
    font-size: 16px;
    padding-left: 5px;
  }
`

export const PlayerList = styled.ul`
  border: 1px solid black;
  width: 220px;
  overflow: hidden;
  padding: 0.5rem 0 0.5rem 2rem;
  li {
    width: 300px;
    transition: 0.15s;
    &:hover {
      background-color: #fa8686;
      cursor: pointer;
    }
  }
`
