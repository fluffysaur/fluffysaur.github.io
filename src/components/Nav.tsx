import { Link, useLocation } from 'react-router-dom'
import { HomeIcon, BriefcaseIcon, PersonIcon, SunIcon, MoonIcon } from './Icons'
import { useTheme } from '../contexts/ThemeContext'

const links = [
  { label: 'Home',  Icon: HomeIcon,       to: '/' },
  { label: 'Work',  Icon: BriefcaseIcon,  to: '/work' },
  { label: 'About', Icon: PersonIcon,     to: '/about' },
]

export function Nav() {
  const { pathname } = useLocation()
  const { theme, toggle } = useTheme()

  return (
    <nav className="flex items-center justify-between px-8 py-7 relative z-10">
      {/* Brand */}
      <Link to="/" className="flex items-center gap-3 no-underline group" style={{ color: 'var(--fg-1)' }}>
        <span
          className="w-9 h-9 rounded-lg bg-accent text-graphite grid place-items-center font-black text-base"
          style={{ letterSpacing: '-0.04em' }}
        >
          YJ
        </span>
        <span className="font-medium text-[15px] tracking-[0.05em]">
          tanyijia<span className="text-accent">.</span>me
        </span>
      </Link>

      {/* Links with icons */}
      <ul className="flex gap-1 list-none p-0 m-0">
        {links.map(({ label, Icon, to }) => {
          const active = to === '/' ? pathname === '/' : pathname.startsWith(to)
          return (
            <li key={to}>
              <Link
                to={to}
                className={[
                  'flex items-center gap-1.5 px-3.5 py-2.5 text-[12px] tracking-[0.2em] uppercase transition-colors duration-250',
                  active
                    ? 'text-accent font-semibold'
                    : 'font-medium nav-link',
                ].join(' ')}
                style={active ? { textDecoration: 'underline', textDecorationColor: '#f2cb05', textUnderlineOffset: '4px' } : {}}
              >
                <Icon size={13} />
                {label}
              </Link>
            </li>
          )
        })}
      </ul>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggle}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full border text-[11px] font-mono bg-transparent cursor-pointer transition-colors"
          style={{
            borderColor: 'var(--border)',
            color: 'var(--fg-4)',
          }}
          title="Toggle light/dark mode (⌘L)"
        >
          {theme === 'dark' ? <SunIcon size={13} /> : <MoonIcon size={13} />}
          <span>⌘ L</span>
        </button>
        <a
          href="mailto:tanyijia@gmail.com"
          className="px-4 py-2.5 rounded-full bg-accent text-[11px] font-medium tracking-[0.2em] uppercase no-underline transition-all hover:bg-accent-deep"
          style={{ color: '#262626' }}
        >
          Get in touch
        </a>
      </div>
    </nav>
  )
}
