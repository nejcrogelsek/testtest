import { FC } from 'react'
import { Grid, Row, Col } from 'styles'
import { GridContainer, Styled, Table } from './styles'

const TestFive: FC = () => {
  return (
    <Styled>
      <h1>TEST 5 - Styling</h1>

      <h2>With Grid</h2>

      <GridContainer>
        <div className="item1">upper left box</div>
        <div className="item2">upper middle box</div>
        <div className="item3">upper right box</div>
        <div className="item4">bottom left box</div>
        <div className="item5">bottom middle box</div>
        <div className="item6">bottom right box</div>
      </GridContainer>

      <h2>With Flex</h2>

      <Grid className="grid">
        <Row>
          <Col size={1}>upper left box</Col>
          <Col size={1}>upper middle box</Col>
          <Col size={1}>upper right box</Col>
        </Row>
        <Row>
          <Col size={1}>bottom left box</Col>
          <Col size={1}>bottom middle box</Col>
          <Col size={1}>bottom right box</Col>
        </Row>
      </Grid>

      <h2>With Table</h2>

      <Table>
        <tbody>
          <tr>
            <td>upper left box</td>
            <td>upper middle box</td>
            <td>upper right box</td>
          </tr>
          <tr>
            <td>bottom left box</td>
            <td>bottom middle box</td>
            <td>bottom right box</td>
          </tr>
        </tbody>
      </Table>
    </Styled>
  )
}

export default TestFive
