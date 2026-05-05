import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ActivityBar } from './ActivityBar'
import { Nav } from './Nav'
import { StatusBar } from './StatusBar'
import { useTheme } from '../contexts/ThemeContext'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export function Layout() {
  const { toggle } = useTheme()

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'l') {
        e.preventDefault()
        toggle()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [toggle])

  return (
    <div className="relative min-h-screen" style={{ background: 'var(--bg)' }}>
      <ScrollToTop />
      <ActivityBar />
      <div style={{ paddingLeft: 56, paddingBottom: 28 }}>
        <Nav />
        <Outlet />
      </div>
      <StatusBar />
    </div>
  )
}
