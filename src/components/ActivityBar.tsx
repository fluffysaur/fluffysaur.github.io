import { Link, useLocation } from 'react-router-dom'
import { HomeIcon, BriefcaseIcon, PersonIcon, ExternalIcon } from './Icons'

const items = [
  { Icon: HomeIcon,      label: 'home',   to: '/' },
  { Icon: BriefcaseIcon, label: 'work',   to: '/work' },
  { Icon: PersonIcon,    label: 'about',  to: '/about' },
  { Icon: ExternalIcon,  label: 'github', to: 'https://github.com/fluffysaur', external: true },
]

export function ActivityBar() {
  const { pathname } = useLocation()

  return (
    <aside
      className="hidden md:flex fixed left-0 top-0 bottom-0 w-14 z-20 flex-col pt-4 border-r"
      style={{ background: 'var(--sidebar-bg)', borderColor: 'var(--border-mid)' }}
    >
      <div
        className="w-8 h-8 mx-auto mb-4 rounded-md bg-accent text-graphite grid place-items-center font-black text-[13px]"
        style={{ letterSpacing: '-0.04em' }}
      >
        YJ
      </div>

      {items.map(({ Icon, label, to, external }) => {
        const active = external ? false : (to === '/' ? pathname === '/' : pathname.startsWith(to))
        const cls = [
          'w-10 h-10 mx-auto my-1 border-l-2 rounded flex items-center justify-center cursor-pointer transition-all',
          active
            ? 'border-accent bg-accent/10 text-accent'
            : 'border-transparent activity-btn',
        ].join(' ')

        if (external) {
          return (
            <a key={label} href={to} target="_blank" rel="noopener noreferrer"
               className={cls} title={label}>
              <Icon size={18} />
            </a>
          )
        }
        return (
          <Link key={label} to={to} className={cls} title={label}>
            <Icon size={18} />
          </Link>
        )
      })}
    </aside>
  )
}
