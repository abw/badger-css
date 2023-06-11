import React  from 'react'
import Link   from './Link.jsx'
import { Toggle } from '@abw/react-night-and-day'

const Header = () =>
  <header>
    <nav>
      <Link to="/" className="home" text="Badger-UI"/>
      <div>
        <Toggle/>
      </div>
    </nav>
  </header>

export default Header
