import * as React from 'react'
import styled from 'styled-components';
import Head from '../head';
import Nav from '../nav'
import Brand from '../brand'
import Main from '../main'
import SideNav from './sidenav'
import Footer from '../footer'

const StyledAdminLayout = styled.div`
  display: grid;
  grid-template-columns: 24rem 1fr;
  grid-template-rows: 8rem 1fr 5rem;
  grid-template-areas:
    "brand nav"
    "sidenav main"
    "sidenav footer";
  height: 100vh;
`;

function AdminLayout({ children, title = 'Hamish Brindle' }) {
  return(
    <StyledAdminLayout>
      <Head title={title} />
      <Brand />
      <Nav />
      <SideNav />
      <Main>
        { children }
      </Main>
      <Footer />
    </StyledAdminLayout>
  )
}

export default AdminLayout