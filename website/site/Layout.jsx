import React from 'react'
import Header from './Header.jsx'
import Sidebar from './Sidebar.jsx'
import Footer from './Footer.jsx'
import { useTheme } from '@abw/react-night-and-day'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  const { theme, variant } = useTheme()
  const classes = [theme, variant].join(' ')
  return (
    <div id="site" className={classes}>
      <Header/>
      <div id="app">
        <aside className="surface-2">
          <Sidebar/>
        </aside>
        <main className="surface-3">
          <Outlet/>
        </main>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
