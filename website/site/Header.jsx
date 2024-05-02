import React   from 'react'
import Link    from '../ui/Link.jsx'
import Icon    from '../ui/Icon.jsx'
import Context from './Context.jsx'
import { Toggle } from '@abw/react-night-and-day'
import { ReactComponent as Github } from '../svg/github.svg'
import { version } from './Utils.jsx'

const Header = ({ sidebarIconClick }) =>
  <header>
    <nav>
      <div>
        <Icon
          name="bars"
          className="toggle-sidebar action"
          onClick={sidebarIconClick}
        />
        <Link to="/" className="home mar-l-2" text="Badger-CSS"/>
        <span className="small mar-l-2">v{version}</span>
      </div>
      <div>
        <a href="https://github.com/abw/badger-css">
          <Github className="night-and-day--icon mar-r-2"/>
        </a>
        <Toggle/>
      </div>
    </nav>
  </header>

export default Context.Consumer(Header)
