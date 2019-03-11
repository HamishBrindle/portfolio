import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const links = [
  // { href: '/projects', label: 'Projects' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const StyledSideNav = styled.aside`
    grid-area: sidenav;
    background: purple;
`

function SideNav() {
  const sideNavLinks = links.map(({ key, href, label }) => (
    <li key={key}>
      <Link prefetch href={href}><a>{label}</a></Link>
    </li>
  ))

  return (
    <StyledSideNav>
      sidenav
      <ul>
        { sideNavLinks }
      </ul>
    </StyledSideNav>
  )
}

export default SideNav
