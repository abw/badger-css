import React   from 'react'
import Link    from '../ui/Link.jsx'
import Icon    from '../ui/Icon.jsx'
import Context from './Context.jsx'
import Badger  from '@/svg/badger-white.svg?react'
import Github  from '../svg/github.svg?react'
import { Toggle } from '@abw/react-night-and-day'
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
      <div className="flex middle gap-4">
        <a
          href="https://badgerpower.com/"
          target="_blank"
          rel="noreferrer">
          <Badger className="badgerpower"/>
        </a>
        <a
          href="https://github.com/abw/badger-css"
          target="_blank" rel="noreferrer"
        >
          <Github className="night-and-day--icon"/>
        </a>
        <Toggle/>
      </div>
    </nav>
  </header>

export default Context.Consumer(Header)
