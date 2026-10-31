import { useState, useEffect } from 'react'
import CourseMegaMenu from './CourseMegaMenu.jsx'
import PageMegaMenu from './PageMegaMenu.jsx'
import NavDropdown from './NavDropdown.jsx'
import './course-one-reference.css'

const files = '/assets/'
const courseFiles = '/assets/'

const categories = [
  { icon: `${files}66c6fb8b9d9bcd0e5de94637_Category-Icons.svg`, name: 'Web design and creative', count: '8 Courses' },
  { icon: `${files}66c6fb8b98a2dc7066c693d3_Category-Icons-2.svg`, name: 'Finance and accounting', count: '4 Courses' },
  { icon: `${files}66c6fb8b2ae1000d4215a423_Category-Icons-3.svg`, name: 'IT and software', count: '5 Courses' },
  { icon: `${files}66c6fb94416128e5b4e355b0_Category-Icons-4.svg`, name: 'Digital marketing', count: '4 Courses' },
  { icon: `${files}66c6fb8b035ebd8829061041_Category-Icons-5.svg`, name: 'Web development', count: '8 Courses' },
  { icon: `${files}66c6fb8bf82fe9cef5f78d2f_Category-Icons-6.svg`, name: 'Content and language', count: '3 Courses' },
]

const coursesData = [
  { id: 'corporate-finance', slug: 'understanding-corporate-finance-and-investments', category: 'Finance', title: 'Understanding corporate finance and investments', rating: '4.88 (210)', lessons: '10 Lessons', enrolled: '8k Enrolled', price: 'Free', img: `${courseFiles}6710bb2b1bfbb88a06696c70_Course-Image-4.webp` },
  { id: 'photoshop-techniques', slug: 'advanced-photoshop-techniques-for-designers', category: 'Design', title: 'Advanced photoshop techniques for designers', rating: '5.00 (1.2K)', lessons: '8 Lessons', enrolled: '25k Enrolled', price: 'Free', img: `${courseFiles}6710bcf4976ba1d072d8b476_Course-Image-4-2.webp` },
  { id: 'crisis-management', slug: 'crisis-management-and-problem-solving-strategies', category: 'Management', title: 'Crisis management and problem-solving strategies', rating: '4.88 (210)', lessons: '6 Lessons', enrolled: '8k Enrolled', price: 'Free', img: `${courseFiles}6710c8cf232065a7046261dc_Course-Image-7.webp` },
  { id: 'single-page-angular', slug: 'building-single-page-applications-with-angular', category: 'Development', title: 'Building single page applications with angular', rating: '5.00 (328)', lessons: '6 Lessons', enrolled: '12k Enrolled', price: 'Free', img: `${courseFiles}66eb9dfb3e87f8984b5a15b6_Course-Small-Image.webp` },
  { id: 'personal-business-finance', slug: 'the-complete-guide-to-personal-and-business-finance', category: 'Finance', title: 'The complete guide to personal and business finance', rating: '4.88 (210)', lessons: '8 Lessons', enrolled: '14k Enrolled', price: '$99', img: `${courseFiles}66eb9ece25b132baef1462d5_Course-Small-Image-3.webp` },
  { id: 'process-improvement', slug: 'operations-management-and-process-improvement', category: 'Finance', title: 'Operations management and process improvement', rating: '5.00 (812)', lessons: '12 Lessons', enrolled: '23k Enrolled', price: 'Free', img: `${courseFiles}66eb9e25c4d132b7abc4dcb2_Course-Small-Image-8.webp` },
  { id: 'interactive-web-design', slug: 'learn-interactive-web-design-by-building-real-projects', category: 'Design', title: 'Learn interactive Web Design by building real projects', rating: '5.00 (1.2K)', lessons: '9 Lessons', enrolled: '18k Enrolled', price: '$79', img: `${courseFiles}66fe66442929de6e874b3284_Course-Image.webp` },
  { id: 'design-systems', slug: 'design-systems-and-pattern-libraries', category: 'Design', title: 'Design systems and pattern libraries', rating: '5.00 (1.2K)', lessons: '8 Lessons', enrolled: '25k Enrolled', price: '$99', img: `${courseFiles}66fe66cdef763efcc757aefb_Course-Image-2.webp` },
  { id: 'brand-audience', slug: 'grow-your-brand-and-reach-your-audience', category: 'Management', title: 'Grow your brand and reach your audience', rating: '4.88 (210)', lessons: '5 Lessons', enrolled: '11k Enrolled', price: '$49', img: `${courseFiles}66eb9fb02faddeb03288c28e_Course-Small-Image-2.webp` },
  { id: 'risk-management', slug: 'risk-management-and-business-continuity', category: 'Management', title: 'Risk management and business continuity', rating: '4.88 (210)', lessons: '3 Lessons', enrolled: '8k Enrolled', price: '$49', img: `${courseFiles}66eb9e363f6e47ec5245cf09_Course-Small-Image-7.webp` },
  { id: 'mongodb-integration', slug: 'database-integration-with-mongodb', category: 'Development', title: 'Database integration with MongoDB', rating: '4.49 (756)', lessons: '10 Lessons', enrolled: '7k Enrolled', price: '$59', img: `${courseFiles}66eb9e1184c0c12d2244968d_Course-Small-Image-9.webp` },
  { id: 'mern-stack', slug: 'full-stack-development-with-the-mern-stack', category: 'Development', title: 'Full-stack development with the MERN stack', rating: '5.00 (985)', lessons: '12 Lessons', enrolled: '22k Enrolled', price: '$72', img: `${courseFiles}66eb9e61096e930736b651e4_Course-Small-Image-5.webp` },
]
const listingOrders = {
  'course-one': ['corporate-finance', 'photoshop-techniques', 'crisis-management', 'single-page-angular', 'mongodb-integration', 'mern-stack'],
  'course-two': ['crisis-management', 'photoshop-techniques', 'corporate-finance', 'single-page-angular', 'mongodb-integration', 'process-improvement'],
  'course-three': ['crisis-management', 'photoshop-techniques', 'corporate-finance', 'mern-stack', 'single-page-angular', 'mongodb-integration', 'risk-management', 'personal-business-finance'],
}

const categorySlugs = {
  design: { label: 'Design', filter: 'Design' }, finance: { label: 'Finance', filter: 'Finance' },
  development: { label: 'Development', filter: 'Development' }, management: { label: 'Management', filter: 'Management' },
  marketing: { label: 'Digital marketing', filter: 'Management' }, writing: { label: 'Content and language', filter: 'Development' },
}

function CourseOne({ variant = 'course-one', categorySlug = '' }) {
  const [activeTab, setActiveTab] = useState('All')
  const [menuOpen, setMenuOpen] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    document.title = `Elearna - ${variant.replace('course-', 'Course ')}`
    window.scrollTo(0, 0)
  }, [])

  const currentCategory = categorySlugs[categorySlug]
  const filteredCourses = currentCategory
    ? coursesData.filter(c => c.category === currentCategory.filter)
    : activeTab === 'All'
    ? coursesData
    : coursesData.filter(c => c.category.toLowerCase() === activeTab.toLowerCase())
  const heading = variant === 'course-two' ? 'Top online courses' : variant === 'course-three' ? 'All online courses' : 'Popular courses'
  const orderedCourses = (listingOrders[variant] || listingOrders['course-one']).map(id => coursesData.find(course => course.id === id)).filter(Boolean)
  const listingCourses = currentCategory || activeTab !== 'All'
    ? filteredCourses
    : [...orderedCourses, ...coursesData.filter(course => !orderedCourses.some(item => item.id === course.id))]
  const pageSize = variant === 'course-three' && !currentCategory && activeTab === 'All' ? 8 : 6
  const pageCount = Math.max(1, Math.ceil(listingCourses.length / pageSize))
  const displayedCourses = listingCourses.slice((page - 1) * pageSize, page * pageSize)

  return (
    <div className={`course-one-page ${variant}`}>
      {/* Header */}
      <header className="site-header fixed-header">
        <div className="nav-wrap">
          <a href="/" className="brand">
            <img src={`${files}66c6fb8bf82fe9cef5f78d65_Elearna.svg`} alt="Elearna" />
          </a>
          <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
            <div className="nav-home-dropdown">
              <a href="/">Home <span>⌄</span></a>
              <div className="nav-home-menu">
                <a href="/">Home One</a>
                <a href="/home-two">Home Two</a>
                <a href="/home-three">Home Three</a>
              </div>
            </div>
            <CourseMegaMenu />
            <PageMegaMenu />
            <NavDropdown label="Blog" items={ [['Blog One','/blog-one'],['Blog Two','/blog-two'],['Blog Three','/blog-three']] }/>
            <NavDropdown label="Contact" items={ [['Contact One','/contact-one'],['Contact Two','/contact-two'],['Contact Three','/contact-three']] }/>
          </nav>
          <div className="nav-actions">
            <a className="cart" href="/course-one">
              <img src={`${files}66c6fb8ba5e099697cc76c17_Cart.svg`} alt="Cart" />
              <b>0</b>
            </a>
            <a href="/contact-one">Login</a>
            <i />
            <a href="/contact-one">Register</a>
            <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Course Hero */}
        <section className="course-one-hero">
          <div className="container course-one-hero-container">
            <div className="course-one-hero-wrap">
              <div className="eyebrow light">START WITH</div>
              <h1>Professional online courses</h1>
            </div>
          </div>
        </section>

        {/* Categories Strip */}
        <section className={`course-one-category ${variant === 'course-two' ? 'course-two-category' : ''}`}>
          <div className="container">
            {variant === 'course-two' && <div className="course-two-category-intro"><div className="eyebrow dark">Top categories</div><h2>Discover leading categories</h2><a className="button" href="/category/design">Get Started　↗</a></div>}
            <div className={`course-one-category-main ${variant === 'course-two' ? 'course-two-category-grid' : ''}`}>
              {categories.map(cat => (
                <div className="course-one-category-card" key={cat.name}>
                    <div className="cat-icon-circle">
                    <img src={cat.icon} alt="" />
                  </div>
                  <a className="cat-card-text" href={`/category/${cat.name.includes('Finance') ? 'finance' : cat.name.includes('IT') || cat.name.includes('Web development') ? 'development' : cat.name.includes('design') ? 'design' : cat.name.includes('Digital') ? 'marketing' : cat.name.includes('Content') ? 'writing' : 'design'}`}>
                    <strong>{cat.name}</strong><span>{cat.count}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Store Grid with Tabs */}
        <section className="course-one-store">
          <div className="container">
            <div className="course-store-head">
              <div>
                <div className="eyebrow dark">Online learning</div>
                <h2>{currentCategory ? `${currentCategory.label} courses` : heading}</h2>
              </div>
              {variant === 'course-one' && !currentCategory && <div className="course-filter-tabs">
                {['All', 'Design', 'Development', 'Finance', 'Management'].map(tab => (
                  <button
                    key={tab}
                    className={`filter-btn ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => { setActiveTab(tab); setPage(1) }}
                  >
                    {tab === 'All' ? 'All courses' : tab}
                  </button>
                ))}
              </div>}
            </div>

            <div className="course-grid-one">
              {displayedCourses.map(course => (
                <article className="courser-card-one" key={course.title}>
                  <a href={`/${course.slug}/course-details`} className="course-card-image-wrap">
                    <img src={course.img} alt={course.title} />
                    <span className="course-price-badge">{course.price}</span>
                  </a>
                  <div className="course-card-content">
                    <span className="course-cat-tag">{course.category}</span>
                    <h3><a href={`/${course.slug}/course-details`}>{course.title}</a></h3>
                    <div className="course-rating-row">
                      <img src={`${files}66c6fb8b857efb6c4c737b5d_Rating.svg`} alt="" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="course-meta-divider" />
                    <div className="course-meta-footer">
                      <div className="meta-item">
                        <img src={`${files}66c6fb8b420a4f79326c2e96_Books.svg`} alt="" />
                        <span>{course.lessons}</span>
                      </div>
                      <div className="meta-item">
                        <img src={`${files}66c6fb8b73655bcf79451768_Person.svg`} alt="" />
                        <span>{course.enrolled}</span>
                      </div>
                      <a href={`/${course.slug}/course-details`} className="details-link">Details ↗</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            {pageCount > 1 && <nav className="course-pagination" aria-label="Course pages">{Array.from({ length: pageCount }, (_, index) => index + 1).map(number => <button key={number} className={page === number ? 'active' : ''} onClick={() => { setPage(number); document.querySelector('.course-one-store')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}>{number}</button>)}</nav>}
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-one">
          <div className="container cta-main">
            <h2 className="cta-heading">Are you ready to start your journey?</h2>
            <div className="cta-button-wrapper">
              <a className="button cta-browse" href="/course-one">Browse Courses</a>
              <a className="button cta-teacher" href="/contact-one">Became A Teacher</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src={`${files}66c6fb8bf82fe9cef5f78d65_Elearna.svg`} alt="Elearna" />
            <p>Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis eget amet ut tristique cras.</p>
          </div>
          <div>
            <h3>Quick links</h3>
            <a href="/">Home</a>
            <a href="/course-one">Events</a>
            <a href="/contact-one">Career</a>
            <a href="/contact-one">Instructor</a>
          </div>
          <div>
            <h3>Popular courses</h3>
            <a href="/course-one">Finance</a>
            <a href="/course-one">Management</a>
            <a href="/course-one">Design</a>
            <a href="/course-one">Web development</a>
          </div>
          <div>
            <h3>Company</h3>
            <a href="/about-one">About</a>
            <a href="/course-one">Courses</a>
            <a href="/blog-one">Blog</a>
            <a href="/contact-one">Contact</a>
            <a href="/license">License</a>
            <a href="/pricing-one">Pricing</a>
            <a href="/404">404</a>
          </div>
          <div>
            <h3>CMS</h3>
            <a href="/course-details">Course details</a>
            <a href="/instructor-details">Instructor details</a>
            <a href="/blog-details">Blog details</a>
          </div>
        </div>
        <div className="container copyright">
          <span>DESIGN BY <b>RADIANT TEMPLATES</b></span>
          <span>POWERED BY <b>WEBFLOW</b></span>
        </div>
      </footer>
    </div>
  )
}

export default CourseOne
