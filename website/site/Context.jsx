import { useState } from 'react'
import { Generator } from '@abw/react-context'
import { useResponsive } from './Responsive.jsx'
import { useTheme } from '@abw/react-night-and-day'
import { NO_SIDEBAR, SIDEBAR } from './Constants.jsx'
import { MOBILE, TABLET } from '@/utils/breakpoint.js'

const SiteContext = ({ render }) => {
  const { width, breakpoint } = useResponsive()
  const { theme, variant, setVariant } = useTheme()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const openSidebar       = () => setSidebarOpen(true)
  const closeSidebar      = () => setSidebarOpen(false)
  const toggleSidebarOpen = () => setSidebarOpen( open => ! open )

  const sidebarIconClick = () => {
    if (breakpoint === MOBILE || breakpoint === TABLET) {
      toggleSidebarOpen()
    }
    else if (variant === SIDEBAR) {
      setVariant(NO_SIDEBAR)
      closeSidebar()
    }
    else {
      setVariant(SIDEBAR)
      openSidebar()
    }
  }

  return render({
    width, breakpoint,
    theme, variant, setVariant,
    sidebarOpen, setSidebarOpen,
    openSidebar, closeSidebar,
    sidebarIconClick
  })
}

const generated = Generator(SiteContext)
export const {
  Context, Provider, Consumer, Children,
  Use: useSite
} = generated

export default generated
