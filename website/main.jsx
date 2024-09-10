import React    from 'react'
import ReactDOM from 'react-dom/client'
import App      from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)

/*
import Router from './site/Router.jsx'
import SiteContext from './site/Context.jsx'
import { RouterProvider, } from 'react-router-dom'
import { ThemeProvider } from '@abw/react-night-and-day'
import { SIDEBAR } from './site/Constants.jsx'
import './styles/website.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider storageKey="theme" defaultVariant={SIDEBAR}>
      <SiteContext.Provider>
        <RouterProvider router={Router} />
      </SiteContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
*/