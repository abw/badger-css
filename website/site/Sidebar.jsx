import React from 'react'
import Menu from './Menu.jsx'
import Context from './Context.jsx'
import {
  Colors, Components, Forms, GettingStarted, Utilities, Customising,
  Test
} from './Menus.jsx'

const Sidebar = ({ closeSidebar }) =>
  <div onClick={closeSidebar}>
    <Menu title="Getting Started" items={GettingStarted}/>
    <Menu title="Colors" items={Colors}/>
    <Menu title="Utilities" items={Utilities}/>
    <Menu title="Forms" items={Forms}/>
    <Menu title="Components" items={Components}/>
    <Menu title="Customising" items={Customising}/>
    { Boolean(import.meta.env.DEV) &&
      <Menu title="Tests" items={Test}/>
    }
  </div>

export default Context.Consumer(Sidebar)
