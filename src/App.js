import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Search from './components/Search'
import Countries from './components/Countries'
import styled from 'styled-components'

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  font-weight: bold;
  margin: 150px 0;
`

const Container = styled.div`
  max-width: 1440px;
  padding: 0 1rem;
  margin-left: auto;
  margin-right: auto;
`

export default function App() {
  const [latest, setLatest] = useState({})
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    axios
      .all([
        axios.get('https://disease.sh/v3/covid-19/all'),
        axios.get(
          'https://disease.sh/v3/covid-19/countries?sort=cases&allowNull=false'
        ),
      ])
      .then(response => {
        setLatest(response[0].data)
        setResults(response[1].data)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }, [])

  const countries = results.filter(item => {
    return searchTerm !== ''
      ? item.country.toLowerCase().includes(searchTerm.toLowerCase())
      : item
  })

  return (
    <>
      <Container>
        <Header />
        {loading ? (
          <Loading>Loading....</Loading>
        ) : (
          <>
            <Home latest={latest} />
            <Search handleChange={e => setSearchTerm(e.target.value)} />
            <Countries countries={countries} />
          </>
        )}
        <Footer />
      </Container>
    </>
  )
}
