import * as React from 'react'
import styled from 'styled-components';
import Head from '../head'
import Nav from './dashboard-nav'

const StyledDashboard = styled.div`
  display: flex;
  width: 100%;
  flex-direction:row;
`;

function DashboardLayout({ children }) {
  return(
    <div>
      <Head title="Dashboard" />
      <StyledDashboard>
        <Nav />
        {children}
      </StyledDashboard>
    </div>
  )
}

export default DashboardLayout