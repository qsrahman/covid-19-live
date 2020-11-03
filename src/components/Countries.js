import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const CountryCard = styled.div`
  max-width: 300px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  h3 {
    margin: 10px 0;
    text-align: center;
    border-bottom: 1px solid #eee;
  }

  h4 {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 100%;
    height: 140px;
    display: block;
    object-fit: cover;
  }

  .info {
    padding: 0 20px;
  }
`

const Countries = ({ countries }) => {
  return (
    <Container>
      {countries.map((data, i) => (
        <CountryCard key={i}>
          <img src={data.countryInfo.flag} alt={data.country} />
          <div className="info">
            <h3>{data.country}</h3>
            <h4>
              Cases <span>{data.cases}</span>
            </h4>
            <h4>
              Deaths <span>{data.deaths}</span>
            </h4>
            <h4>
              Recovered <span>{data.recovered}</span>
            </h4>
            <h4>
              Today's cases <span>{data.todayCases}</span>
            </h4>
            <h4>
              Today's deaths <span>{data.todayDeaths}</span>
            </h4>
            <h4>
              Active <span>{data.active}</span>
            </h4>
            <h4>
              Critical <span>{data.critical}</span>
            </h4>
          </div>
        </CountryCard>
      ))}
    </Container>
  )
}

export default Countries
