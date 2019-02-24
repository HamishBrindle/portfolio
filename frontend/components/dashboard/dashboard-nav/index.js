import React from 'react'
import Link from 'next/link'
import StyledNav from './styled'

const links = [
  // { href: 'https://github.com/segmentio/create-next-app', label: 'Github' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

function DashboardNav(props) {
  return (
    <StyledNav>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </StyledNav>
  )
}

export default DashboardNav
