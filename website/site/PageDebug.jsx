import React from 'react'
import { useSite } from '@abw/badger-website'

const PageDebug = () => {
  const { sidebar, page } = useSite()
  const sections = sidebar.sections || [ ]
  const menuItems = sections
    .flatMap(
      section => section.menu || [ ]
    )
    .flatMap(
      item => item.menu || item
    )
  console.log(`menuItems: `, menuItems)
  return (
    <div className="border surface-5 pad-a-4">
      page URI: {page.uri}<br/>
    </div>
  )
}

export default PageDebug