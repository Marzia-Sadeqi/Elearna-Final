import { useRef, useState } from 'react'

const freeCourses = [
  ['FINANCE', 'Understanding corporate finance and investments', 'understanding-corporate-finance-and-investments'],
  ['DESIGN', 'Advanced photoshop techniques for designers', 'advanced-photoshop-techniques-for-designers'],
  ['MANAGEMENT', 'Crisis management and problem-solving strategies', 'crisis-management-and-problem-solving-strategies'],
  ['DEVELOPMENT', 'Building single page applications with angular', 'building-single-page-applications-with-angular'],
]
const paidCourses = [
  ['FINANCE', 'The complete guide to personal and business finance', 'the-complete-guide-to-personal-and-business-finance'],
  ['FINANCE', 'Operations management and process improvement', 'operations-management-and-process-improvement'],
  ['DESIGN', 'Learn interactive Web Design by building real projects', 'learn-interactive-web-design-by-building-real-projects'],
  ['DESIGN', 'Design systems and pattern libraries', 'design-systems-and-pattern-libraries'],
  ['MANAGEMENT', 'Grow your brand and reach your audience', 'grow-your-brand-and-reach-your-audience'],
  ['MANAGEMENT', 'Risk management and business continuity', 'risk-management-and-business-continuity'],
  ['DEVELOPMENT', 'Database integration with MongoDB', 'database-integration-with-mongodb'],
  ['DEVELOPMENT', 'Full-stack development with the MERN stack', 'full-stack-development-with-the-mern-stack'],
]

export default function CourseMegaMenu({ compact = false }) {
  const [type, setType] = useState('Free courses')
  const [open, setOpen] = useState(false)
  const closeTimer = useRef(null)
  const list = type === 'Free courses' ? freeCourses : paidCourses
  const keepOpen = event => {
    window.clearTimeout(closeTimer.current)
    const root = event?.currentTarget
    if (root?.classList.contains('courses-mega-dropdown')) {
      const menuTop = parseFloat(getComputedStyle(root.querySelector('.courses-mega-menu')).top) || 85
      const bounds = root.getBoundingClientRect()
      const bottom = bounds.bottom
      const gap = menuTop - bottom
      root.style.setProperty('--mega-bridge-left', `${bounds.left}px`)
      root.style.setProperty('--mega-bridge-width', `${bounds.width}px`)
      root.style.setProperty('--mega-bridge-top', `${Math.max(0, bottom)}px`)
      root.style.setProperty('--mega-bridge-height', `${bottom >= 0 && gap > 0 ? gap + 2 : 0}px`)
    }
    setOpen(true)
  }
  const scheduleClose = () => { window.clearTimeout(closeTimer.current); closeTimer.current = window.setTimeout(() => setOpen(false), 120) }
  return <div className={`nav-home-dropdown courses-mega-dropdown${compact ? ' compact-course-nav' : ''}${open ? ' is-open' : ''}`} onMouseEnter={keepOpen} onMouseLeave={scheduleClose} onFocus={keepOpen} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false) }}>
    <a href="/course-one">Courses <span>⌄</span></a>
    <div className="courses-mega-menu" onMouseEnter={() => { window.clearTimeout(closeTimer.current); setOpen(true) }}>
      <div className="mega-course-types">
        <button className={type === 'Free courses' ? 'selected' : ''} onMouseEnter={() => setType('Free courses')} onFocus={() => setType('Free courses')} onClick={() => setType('Free courses')}>
          <strong>Free courses</strong><span>Free learning resources for skill development.</span>
        </button>
        <button className={type === 'Paid courses' ? 'selected' : ''} onMouseEnter={() => setType('Paid courses')} onFocus={() => setType('Paid courses')} onClick={() => setType('Paid courses')}>
          <strong>Paid courses</strong><span>Courses are available upon purchase.(Requires login)</span>
        </button>
      </div>
      <div className="mega-course-content">
        <div className="mega-course-links">{list.map(([category, title, slug]) => <a href={`/${slug}/course-details`} key={slug}><strong>{category}</strong><span>{title}</span></a>)}</div>
        <a className="mega-promo" href="/career"><span className="mega-promo-icon"><img src="/assets/67123069e49297274bf9143a_Coins-Icons.svg" alt="" /></span><span><strong>Increase your potential earnings</strong><small>Lorem ipsum dolor sit amet scelerisque integer adipiscing velit sem sed.</small></span><b><img src="/assets/66c86330828a126c2bb6c4d9_Button-Arrow-Black.png" alt="" /></b></a>
      </div>
    </div>
  </div>
}
