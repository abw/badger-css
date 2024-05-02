import React        from 'react'
import Header       from './Header.jsx'
import Sidebar      from './Sidebar.jsx'
import Footer       from './Footer.jsx'
import ScrollToTop  from './ScrollToTop.jsx'
import { useSite }  from './Context.jsx'
import { Outlet }   from 'react-router-dom'
import { CLOSED, OPEN } from './Constants.jsx'

const Layout = () => {
  const { theme, variant, sidebarOpen } = useSite()

  return (
    <div
      id="site"
      data-sidebar={variant}
      data-sidebar-action={sidebarOpen ? OPEN : CLOSED}
      data-theme={theme}
    >
      <Header/>
      <div id="app">
        <ScrollToTop/>
        <aside>
          <Sidebar/>
        </aside>
        <main id="content">
          <Outlet/>
        </main>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
