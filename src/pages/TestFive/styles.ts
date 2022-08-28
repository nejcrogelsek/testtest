import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  grid-template-areas:
    'top-left top-middle top-right'
    'bottom-left bottom-middle bottom-right';
  width: 100%;
  max-width: 750px;

  > div {
    padding: 0.125rem 0.5rem;
    width: 100%;
    border: 1px solid black;
    &:nth-child(2),
    &:nth-child(5) {
      border-right: 0;
      border-left: 0;
    }
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3) {
      border-bottom: 0;
    }
  }

  .item1 {
    grid-area: top-left;
  }
  .item2 {
    grid-area: top-middle;
  }
  .item3 {
    grid-area: top-right;
  }
  .item4 {
    grid-area: bottom-left;
  }
  .item5 {
    grid-area: bottom-middle;
  }
  .item6 {
    grid-area: bottom-right;
  }
`

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

  .grid {
    width: 100%;
    max-width: 750px;
    > div {
      div[size] {
        width: min(100%, 800px);
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
