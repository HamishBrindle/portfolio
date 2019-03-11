import React from 'react'
import styled from 'styled-components'

const StyledBrand = styled.div`
    grid-area: brand;
    background: green;
    display: flex;
    justify-content: center;
    align-items: center;
`

function Brand() {
  return (
    <StyledBrand>
      Hamish Brindle
    </StyledBrand>
  )
}

export default Brand
