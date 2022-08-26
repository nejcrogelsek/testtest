import styled from 'styled-components'

export const Container = styled.div`
  font-family: sans-serif;
  text-align: center;

  h1 {
    text-align: left;
  }

  div.description {
    margin-bottom: 20px;
    text-align: left;
  }

  div.time {
    background: rgba(0, 0, 255, 0.15);
    padding: 8px 10px;
    border: 1px solid rgba(0, 0, 255, 0.4);
    margin-bottom: 20px;
  }

  div.renders {
    padding: 15px 10px;
    margin-bottom: 20px;
  }

  div.renders.red {
    background: #ff3d00;
  }

  div.renders.green {
    background: #c5e1a5;
  }

  div.renders > button {
    margin-left: 10px;
    border: 1px solid #cbc693;
    background: #fff9c4;
    padding: 5px 10px;
    outline: none;
    cursor: pointer;
  }

  ul.list {
    list-style: none;
    border: 1px solid black;
    padding: 0;
    margin: 0;
    margin-top: 30px;
  }

  ul.list > li:nth-child(odd) {
    background: #e5e5e5;
  }

  div.object {
    background: #b39ddb;
    border: 1px solid #836fa9;
    padding: 10px;
  }

  div.object > button {
    margin-left: 10px;
    border: 1px solid #cbc693;
    background: #fff9c4;
    padding: 5px 10px;
    outline: none;
    cursor: pointer;
  }
`
