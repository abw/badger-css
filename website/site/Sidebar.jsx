import React from 'react'
import Menu from './Menu.jsx'
import { Colors, Components, Forms, GettingStarted, Utilities } from './Menus.jsx'

const Sidebar = () =>
  <div>
    <Menu title="Getting Started" items={GettingStarted}/>
    <Menu title="Colors" items={Colors}/>
    <Menu title="Utilities" items={Utilities}/>
    <Menu title="Forms" items={Forms}/>
    <Menu title="Components" items={Components}/>
  </div>

export default Sidebar
