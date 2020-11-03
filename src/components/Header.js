import React from 'react'
import styled from 'styled-components'

const HeaderStyle = styled.header`
  text-align: center;
  margin: 10px 0;
`

function Header() {
  return (
    <HeaderStyle>
      <h1>COVID-19 Live</h1>
    </HeaderStyle>
  )
}

export default Header
