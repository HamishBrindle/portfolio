import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const StyledFooter = styled.footer`
  grid-area: footer;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  div:nth-child(1) {
    margin: 0 1.6rem 0 0;
  }
`

function Footer(props) {
  return (
    <StyledFooter>
      <div className="footer__copyright">&copy; {moment().format('YYYY')}</div>
      <div className="footer__signature">Hamish Brindle</div>
    </StyledFooter>
  )
}

export default Footer
