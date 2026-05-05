import { useState, useRef, useEffect } from "react"
import type { ComponentType } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { HomeIcon, BriefcaseIcon, PersonIcon, SunIcon, MoonIcon, SearchIcon } from "./Icons"
import { useTheme } from "../contexts/ThemeContext"
import { PROJECTS } from "../data/projects"

// ── Search ─────────────────────────────────────────────────────────────────────

type SearchItem = { label: string; sub: string; path: string }

const PAGE_ITEMS: SearchItem[] = [
    { label: 'Home',  sub: '/',      path: '/' },
    { label: 'Work',  sub: '/work',  path: '/work' },
    { label: 'About', sub: '/about', path: '/about' },
]

const PROJECT_ITEMS: SearchItem[] = PROJECTS.map(p => ({
    label: p.title,
    sub: p.hasCase ? `/work/${p.id}` : '/work',
    path: p.hasCase ? `/work/${p.id}` : '/work',
}))

const ALL_ITEMS: SearchItem[] = [...PAGE_ITEMS, ...PROJECT_ITEMS]

function filterItems(query: string): SearchItem[] {
    if (!query.trim()) return ALL_ITEMS
    const q = query.toLowerCase()
    return ALL_ITEMS.filter(
        it => it.label.toLowerCase().includes(q) || it.sub.toLowerCase().includes(q)
    )
}

// ── Tabs ──────────────────────────────────────────────────────────────────────

interface TabDef {
    label: string
    Icon: ComponentType<{ size?: number }>
    to: string
    closeable?: true
}

const BASE_TABS: TabDef[] = [
    { label: 'Home.tsx',  Icon: HomeIcon,      to: '/' },
    { label: 'Work.tsx',  Icon: BriefcaseIcon, to: '/work' },
    { label: 'About.tsx', Icon: PersonIcon,    to: '/about' },
]

// ── Component ─────────────────────────────────────────────────────────────────

export function Nav() {
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const { theme, toggle } = useTheme()

    const [query, setQuery]           = useState('')
    const [open, setOpen]             = useState(false)
    const [selectedIdx, setSelectedIdx] = useState(0)
    const inputRef    = useRef<HTMLInputElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    // Derive dynamic case-study tab from URL
    const caseMatch   = pathname.match(/^\/work\/(.+)$/)
    const caseId      = caseMatch?.[1]
    const caseProject = caseId ? PROJECTS.find(p => p.id === caseId) : undefined

    const tabs: TabDef[] = caseProject
        ? [BASE_TABS[0], BASE_TABS[1], { label: `${caseId}.md`, Icon: BriefcaseIcon, to: pathname, closeable: true }, BASE_TABS[2]]
        : BASE_TABS

    const results = filterItems(query)

    // ⌘K / Ctrl+K → focus search
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault()
                inputRef.current?.focus()
            }
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [])

    // Click-outside → close dropdown
    useEffect(() => {
        if (!open) return
        const onDown = (e: MouseEvent) => {
            if (!containerRef.current?.contains(e.target as Node)) {
                setOpen(false)
                setQuery('')
            }
        }
        document.addEventListener('mousedown', onDown)
        return () => document.removeEventListener('mousedown', onDown)
    }, [open])

    // Reset selected index when query changes
    useEffect(() => { setSelectedIdx(0) }, [query])

    const handleResultClick = (path: string) => {
        navigate(path)
        setOpen(false)
        setQuery('')
        inputRef.current?.blur()
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            setOpen(false)
            setQuery('')
            inputRef.current?.blur()
        } else if (e.key === 'ArrowDown') {
            e.preventDefault()
            setSelectedIdx(i => Math.min(i + 1, results.length - 1))
        } else if (e.key === 'ArrowUp') {
            e.preventDefault()
            setSelectedIdx(i => Math.max(i - 1, 0))
        } else if (e.key === 'Enter') {
            const item = results[selectedIdx]
            if (item) handleResultClick(item.path)
        }
    }

    // ── Render ─────────────────────────────────────────────────────────────────

    return (
        <nav
            className="sticky top-0 z-30 flex items-stretch border-b"
            style={{ background: 'var(--bg-elevated)', borderColor: 'var(--border-mid)' }}
        >
            {/* Tabs */}
            <div className="flex items-stretch overflow-x-auto scrollbar-hide">
                {tabs.map(tab => {
                    const active = tab.closeable
                        ? true
                        : tab.to === '/'
                            ? pathname === '/'
                            : tab.to === '/work'
                                ? pathname === '/work'
                                : pathname.startsWith(tab.to)

                    const key = tab.closeable ? `case-${caseId}` : tab.to

                    const cls = [
                        'flex items-center gap-1.5 px-4 py-2.5 text-[12px] font-mono border-b-2 whitespace-nowrap flex-shrink-0',
                        active ? 'border-accent' : 'border-transparent',
                    ].join(' ')

                    const style: React.CSSProperties = {
                        background:  active ? 'var(--bg)' : undefined,
                        color:       active ? '#f2cb05' : 'var(--fg-4)',
                        borderRight: '1px solid var(--border-sub)',
                    }

                    if (tab.closeable) {
                        return (
                            <div key={key} className={cls} style={style}>
                                <tab.Icon size={12} />
                                <span>{tab.label}</span>
                                <button
                                    onClick={() => navigate('/work')}
                                    className="ml-1.5 cursor-pointer bg-transparent border-0 p-0 leading-none transition-opacity opacity-50 hover:opacity-100"
                                    style={{ color: 'inherit', fontSize: 15 }}
                                    title="Close"
                                >
                                    ×
                                </button>
                            </div>
                        )
                    }

                    return (
                        <Link
                            key={key}
                            to={tab.to}
                            className={`${cls} no-underline transition-colors`}
                            style={style}
                        >
                            <tab.Icon size={12} />
                            {tab.label}
                        </Link>
                    )
                })}
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Search */}
            <div
                ref={containerRef}
                className="relative hidden md:flex items-center self-center px-3"
                style={{
                    borderLeft:  '1px solid var(--border-sub)',
                    borderRight: '1px solid var(--border-sub)',
                    paddingTop: 6,
                    paddingBottom: 6,
                }}
            >
                <div
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded"
                    style={{
                        width: 248,
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                        color: 'var(--fg-6)',
                    }}
                >
                    <SearchIcon size={12} />
                    <input
                        ref={inputRef}
                        value={query}
                        placeholder={open ? 'Search pages & projects…' : pathname}
                        onChange={e => setQuery(e.target.value)}
                        onFocus={() => setOpen(true)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 bg-transparent border-0 outline-none text-[12px] font-mono min-w-0"
                        style={{ color: 'var(--fg-3)', caretColor: '#f2cb05' }}
                    />
                    {!open && (
                        <span className="text-[10px] shrink-0 font-mono" style={{ color: 'var(--fg-7)' }}>⌘K</span>
                    )}
                </div>

                {open && (
                    <div
                        className="absolute left-3 right-3 rounded overflow-y-auto z-50"
                        style={{
                            top: 'calc(100% - 6px)',
                            maxHeight: 288,
                            background: 'var(--bg-elevated)',
                            border: '1px solid var(--border)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                        }}
                    >
                        {results.length === 0 ? (
                            <div className="px-3 py-3 text-[12px]" style={{ color: 'var(--fg-6)' }}>
                                No results
                            </div>
                        ) : results.map((item, i) => (
                            <div
                                key={`${item.path}-${item.label}`}
                                onMouseDown={() => handleResultClick(item.path)}
                                onMouseEnter={() => setSelectedIdx(i)}
                                className="flex items-center justify-between px-3 py-2 cursor-pointer"
                                style={{ background: i === selectedIdx ? 'rgba(242,203,5,0.08)' : undefined }}
                            >
                                <span
                                    className="text-[13px] font-medium truncate"
                                    style={{ color: i === selectedIdx ? '#f2cb05' : 'var(--fg-2)' }}
                                >
                                    {item.label}
                                </span>
                                <span
                                    className="text-[11px] font-mono ml-4 shrink-0"
                                    style={{ color: 'var(--fg-6)' }}
                                >
                                    {item.sub}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 px-3">
                <button
                    onClick={toggle}
                    className="flex items-center justify-center w-7 h-7 rounded border bg-transparent cursor-pointer transition-colors hover:border-accent hover:text-accent"
                    style={{ borderColor: 'var(--border)', color: 'var(--fg-5)' }}
                    title="Toggle light/dark mode (⌘L)"
                >
                    {theme === 'dark' ? <SunIcon size={13} /> : <MoonIcon size={13} />}
                </button>
                <a
                    href="mailto:tanyijia@gmail.com"
                    className="hidden md:inline-flex px-3.5 py-1.5 rounded-full bg-accent text-[11px] font-medium tracking-[0.2em] uppercase no-underline transition-all hover:bg-accent-deep whitespace-nowrap"
                    style={{ color: '#262626' }}
                >
                    Get in touch
                </a>
            </div>
        </nav>
    )
}
