import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const leftLinks = [
  { href: '/', label: 'Home' }, // TODO: Icon property
  { href: '/admin', label: 'Dashboard' } // TODO: Icon property
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const rightLinks = [
  { href: 'https://github.com/hamishbrindle', label: 'Github' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const StyledNav = styled.nav`
  grid-area: nav;
  background: pink;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    list-style: none;
  }
`

const RightNav = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem 0 0;
  padding: 0;
  * {
    margin-right: 1.6rem;
  }
`

const LeftNav = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0 0 0 3.6rem;
  padding: 0;
  * {
    margin-right: 1.6rem;
  }
`

function Nav(props) {
  const leftNavLinks = leftLinks.map(({ key, href, label }) => (
    <li key={key}>
      <Link prefetch href={href}><a>{label}</a></Link>
    </li>
  ))

  const rightNavLinks = rightLinks.map(({ key, href, label }) => (
    <li key={key}>
      <Link href={href}><a>{label}</a></Link>
    </li>
  ))

  return (
    <StyledNav>
      <LeftNav>
        {leftNavLinks}
      </LeftNav>
      
      <div className="nav__search">Search</div>
      
      <RightNav>
        {rightNavLinks}
        <li className="nav__avatar">
          A
        </li>
      </RightNav>
    </StyledNav>
  )
}

export default Nav
