import React from 'react'
import Examples from './Examples.jsx'
import { useSite } from '@abw/badger-website'

export const Theme = () => {
  const { theme, toggleTheme, isDark } = useSite()
  return (
    <div>
      <button
        onClick={toggleTheme}
        className="mar-b-4"
      >
        <span className="mar-r-2">
          Switch to the { isDark ? 'light' : 'dark' } side
        </span>
        {/* { isDark ? <Sun/> : <Moon/> } */}
      </button>
      <Examples theme={theme}/>
    </div>
  )
}

export default Theme