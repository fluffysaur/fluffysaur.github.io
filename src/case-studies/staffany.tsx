import { TagRow } from '../components/Tag'

export const meta = {
  id: 'staffany',
  title: 'StaffAny Rewards',
  subtitle: 'A Rewards checklist that entices users to complete tasks and discover product value.',
  repoLabel: 'staffany-rewards',
  dates: 'Jan 2022 – Aug 2022',
  role: 'Product Designer',
  team: 'Growth Pod',
  tags: ['Figma', 'Jira', 'Notion', 'Design System', 'Growth'],
  toc: ['Overview', 'The Problem', 'Process', 'Design', 'Outcomes', 'Reflection'],
  prev: { id: 'rn-migration', title: 'React Native Migration' },
  next: { id: 'interseed', title: 'Interseed Web App' },
}

const S = {
  heading: { fontSize: 32, fontWeight: 200, color: '#fff', marginTop: 56, marginBottom: 20, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.08)', letterSpacing: '-0.01em' } as React.CSSProperties,
  mono: { color: '#f2cb05', fontFamily: 'var(--font-mono, monospace)', fontWeight: 400 } as React.CSSProperties,
  callout: { background: 'rgba(255,255,255,0.03)', borderLeft: '3px solid #f2cb05', padding: '16px 20px', margin: '24px 0', fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 } as React.CSSProperties,
}

export function StaffanyContent() {
  return (
    <div style={{ fontSize: 17, lineHeight: 1.75, color: 'rgba(255,255,255,0.8)' }}>
      <h2 style={S.heading}><span style={S.mono}>## </span>Overview</h2>
      <p>
        StaffAny is a workforce management platform used by 48,000+ shift workers across Southeast Asia.
        As part of the Growth Pod, I owned the Rewards feature end-to-end — from concept to launch.
      </p>
      <div style={S.callout}>
        <strong style={{ color: '#fff' }}>TL;DR</strong> — Designed a Rewards checklist that entices users
        to complete onboarding tasks and discover product value. Shipped to 48,000+ users.
      </div>

      <h2 style={S.heading}><span style={S.mono}>## </span>The Problem</h2>
      <p>
        New users were signing up but not activating. The product had a lot of power, but first-time
        users couldn't find it. Drop-off happened before the "aha moment" — and no one on the team had
        a clear view of where or why.
      </p>

      <img
        src="/assets/thumbnails/learnandearn-thumb.jpg"
        alt="StaffAny Rewards UI"
        style={{ width: '100%', borderRadius: 6, margin: '32px 0', display: 'block' }}
      />

      <h2 style={S.heading}><span style={S.mono}>## </span>Process</h2>
      <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
        {[
          ['Research',       'Analysed drop-off data with the PM. Interviewed 8 new users in their first week.'],
          ['Framing',        'Defined the "aha moment" for each user segment. Built a journey map of first-week activation.'],
          ['Concepts',       'Sketched 5 directions. Narrowed to 2 for prototype validation.'],
          ['Prototyping',    'Built high-fidelity Figma flows. Two rounds of usability testing (6 users each).'],
          ['Design QA',      'Worked with engineering on specs, edge cases, and accessibility review.'],
          ['Launch',         'Shipped to 48,000+ users with coordinated product marketing.'],
        ].map(([t, d], i) => (
          <li
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 160px 1fr',
              gap: 16,
              padding: '14px 0',
              borderTop: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <span style={{ color: '#f2cb05' }}>✓</span>
            <strong style={{ color: '#fff', fontWeight: 500 }}>{t}</strong>
            <span>{d}</span>
          </li>
        ))}
      </ul>

      <h2 style={S.heading}><span style={S.mono}>## </span>Outcomes</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, margin: '24px 0' }}>
        {[
          ['48k+',   'Users reached'],
          ['2',      'Rounds of user testing'],
          ['6+',     'Features surfaced via Rewards'],
        ].map(([n, l], i) => (
          <div
            key={i}
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 6, padding: 24 }}
          >
            <div style={{ fontSize: 40, fontWeight: 200, color: '#f2cb05', lineHeight: 1.1 }}>{n}</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>{l}</div>
          </div>
        ))}
      </div>

      <h2 style={S.heading}><span style={S.mono}>## </span>Reflection</h2>
      <p>
        The biggest lesson: activation is a product design problem, not a marketing one. The feature
        couldn't entice users to do things they didn't already want — it had to meet them where they were
        and make the next step obvious.
      </p>

      <div style={{ marginTop: 40 }}>
        <TagRow tags={meta.tags} />
      </div>
    </div>
  )
}
