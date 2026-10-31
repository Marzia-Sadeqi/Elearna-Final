const pages = [
  ['About One', '/about-one'], ['About Two', '/about-two'],
  ['Course One', '/course-one'], ['Course Two', '/course-two'], ['Course Three', '/course-three'],
  ['FAQ', '/faq'],
  ['Pricing One', '/pricing-one'], ['Pricing Two', '/pricing-two'], ['Pricing Three', '/pricing-three'],
  ['Career', '/career'], ['Events', '/events'], ['Team', '/team'],
]

export default function PageMegaMenu({ compact = false }) {
  return <div className={`nav-home-dropdown pages-dropdown${compact ? ' compact-course-nav' : ''}`}>
    <a href="/about-one">Pages <span>⌄</span></a>
    <div className="pages-dropdown-menu">{pages.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div>
  </div>
}
