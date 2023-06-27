import React from 'react'
import Menu from './Menu.jsx'
import { Colors, GettingStarted, Styles } from './Menus.jsx'

const Sidebar = () =>
  <div>
    <Menu items={GettingStarted}/>
    <Menu title="Colors" items={Colors}/>
    <Menu title="Styles" items={Styles}/>
  </div>

export default Sidebar
