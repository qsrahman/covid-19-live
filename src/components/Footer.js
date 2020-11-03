import React from 'react'
import styled from 'styled-components'

const FooterStyle = styled.footer`
  font-size: 10px;
  text-align: center;
  margin-top: auto;
`

function Footer() {
  return (
    <FooterStyle>
      Copyright &copy; 2020 COVID-19 Live. All Rights Reserved.
    </FooterStyle>
  )
}

export default Footer
