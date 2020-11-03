import React from 'react'
import styled from 'styled-components'
import CountUp from 'react-countup'

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Card = styled.div`
  background-color: ${props => props.bgcolor};
  color: #fff;
  padding: 20px 14px;
  text-align: center;
  max-width: 240px;
  min-width: 220px;
  border-radius: 10px;
  margin: 10px;
  border: 1px solid #eee;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`

const CardBody = styled.div`
  h2,
  h3 {
    margin-bottom: 10px;
  }
`
const CardFooter = styled.div`
  border-top: 1px solid #ccc;
  padding-top: 10px;
`

const Home = ({ latest }) => {
  // console.log(latest)
  const date = new Date(parseInt(latest.updated, 10))
  const lastUpdated = date.toDateString()

  return (
    <Cards>
      <Card bgcolor="#f0ad4e">
        <CardBody>
          <h2>Cases</h2>
          <h3>
            <CountUp
              start={0}
              end={latest.cases}
              duration={2.5}
              separator=","
            />
          </h3>
          <h2>Today Cases</h2>
          <h3>
            <CountUp
              start={0}
              end={latest.todayCases}
              duration={2.5}
              separator=","
            />
          </h3>
        </CardBody>
        <CardFooter>
          <small>Last updated {lastUpdated}</small>
        </CardFooter>
      </Card>
      <Card bgcolor="#d9534f">
        <CardBody>
          <h2>Deaths</h2>
          <h3>
            <CountUp
              start={0}
              end={latest.deaths}
              duration={2.5}
              separator=","
            />
          </h3>
          <h2>Today Deaths</h2>
          <h3>
            <CountUp
              start={0}
              end={latest.todayDeaths}
              duration={2.5}
              separator=","
            />
          </h3>
        </CardBody>
        <CardFooter>
          <small>Last updated {lastUpdated}</small>
        </CardFooter>
      </Card>
      <Card bgcolor="#5cb85c">
        <CardBody>
          <h2>Recovered</h2>
          <h3>
            <CountUp
              start={0}
              end={latest.recovered}
              duration={2.5}
              separator=","
            />
          </h3>
          <h2>Today Recovered</h2>
          <h3>
            <CountUp
              start={0}
              end={latest.todayRecovered}
              duration={2.5}
              separator=","
            />
          </h3>
        </CardBody>
        <CardFooter>
          <small>Last updated {lastUpdated}</small>
        </CardFooter>
      </Card>
      <Card bgcolor="#5bc0de">
        <CardBody>
          <h2>Active Cases</h2>
          <h3>
            <CountUp
              start={0}
              end={latest.active}
              duration={2.5}
              separator=","
            />
          </h3>
          <h2>Critical Cases</h2>
          <h3>
            <CountUp
              start={0}
              end={latest.critical}
              duration={2.5}
              separator=","
            />
          </h3>
        </CardBody>
        <CardFooter>
          <small>Last updated {lastUpdated}</small>
        </CardFooter>
      </Card>
    </Cards>
  )
}

export default Home
