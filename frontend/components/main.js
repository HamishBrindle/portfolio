import React from 'react'
import styled from 'styled-components'

const StyledMain = styled.main`
    grid-area: main;
    background: lightblue;
`

/**
 * Main is the body element for the page. Whether we're in admin
 * panel or not, this is pretty much where everything will reside.
 * 
 * @param {object} props
 */
function Main({ children }) {
  return (
    <StyledMain>
      { children }
    </StyledMain>
  )
}

export default Main
