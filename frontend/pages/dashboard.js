import React from 'react'
import styled from 'styled-components';
import DashboardLayout from '../components/dashboard/dashboard-layout'
import Footer from '../components/dashboard/dashboard-footer'

const StyledBody = styled.div`
  width: 100%;
  background: green;
  display: flex;
  flex-direction: row;

  div {
    height: 100vh;
  }
`;

function Dashboard() {
  return (
    <DashboardLayout>
      <StyledBody>
        <div>
          Content
        </div>
        <Footer />
      </StyledBody>
    </DashboardLayout>
  )
}

export default Dashboard
