import styled from 'styled-components'

export const Styled = styled.div`
  background-color: #78fe78;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
  }

  h2 {
    margin: 2rem 0 1rem 0;
  }

  .grid > div {
    div[size] {
      width: 250px;
      padding: 0.125rem 0.5rem;
      border: 1px solid black;
    }

    &:nth-child(1) > div {
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3) {
        border-bottom: 0;
      }

      &:nth-child(2) {
        border-right: 0;
        border-left: 0;
      }
    }

    &:nth-child(2) > div {
      &:nth-child(2) {
        border-right: 0;
        border-left: 0;
      }
    }
  }
`

export const Table = styled.table`
  border-collapse: collapse;
  th,
  td {
    width: 250px;
    padding: 0.125rem 0.5rem;
    border: 1px solid black;
  }
`
