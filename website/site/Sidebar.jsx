import React from 'react'
import Menu from './Menu.jsx'
import {
  Colors, Components, Forms, GettingStarted, Utilities, Customising
} from './Menus.jsx'

const Sidebar = () =>
  <div>
    <Menu title="Getting Started" items={GettingStarted}/>
    <Menu title="Colors" items={Colors}/>
    <Menu title="Utilities" items={Utilities}/>
    <Menu title="Forms" items={Forms}/>
    <Menu title="Components" items={Components}/>
    <Menu title="Customising" items={Customising}/>
  </div>

export default Sidebar
