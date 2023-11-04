import React from 'react'
import Header from './Header.jsx'
import Sidebar from './Sidebar.jsx'
import Footer from './Footer.jsx'
import { useTheme } from '@abw/react-night-and-day'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './ScrollToTop.jsx'

const Layout = () => {
  const { theme, variant } = useTheme()
  return (
    <div id="site" data-sidebar={variant} data-theme={theme}>
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
