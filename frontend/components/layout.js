import * as React from 'react'
import Head from './head'
import Nav from './nav'
import Footer from './footer'

function Layout({ children, title = 'Hamish Brindle' }) {
  return(
    <div>
      <Head title={title} />
      <Nav />
      {children}
      <Footer />
    </div>
  )
}

export default Layout