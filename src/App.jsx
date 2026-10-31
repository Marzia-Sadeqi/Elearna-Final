import { useEffect, useState } from 'react'
import CourseMegaMenu from './CourseMegaMenu.jsx'
import PageMegaMenu from './PageMegaMenu.jsx'
import NavDropdown from './NavDropdown.jsx'

const cdn = '/assets/'
const categories = [
  [`${cdn}66c6fb8b9d9bcd0e5de94637_Category-Icons.svg`, 'Creative web design', '8 Courses', '/category/design'],
  [`${cdn}66c6fb8b98a2dc7066c693d3_Category-Icons-2.svg`, 'Finance accounting', '10 Courses', '/category/finance'],
  [`${cdn}66c6fb8b9d9bcd0e5de94637_Category-Icons.svg`, 'IT and software', '5 Courses', '/category/development'],
  [`${cdn}66c6fb94416128e5b4e355b0_Category-Icons-4.svg`, 'Digital marketing', '4 Courses', '/category/finance'],
  [`${cdn}66c6fb8b035ebd8829061041_Category-Icons-5.svg`, 'Web development', '8 Courses', '/category/development'],
  [`${cdn}66c6fb8bf82fe9cef5f78d2f_Category-Icons-6.svg`, 'Content writing', '3 Courses', '/category/design'],
]

const clientLogos = [
  [`${cdn}66c6fb8bca715a603abbc84f_Clients-Logo.svg`, 'Udemy'],
  [`${cdn}66c6fb8b87b34b4188395ff2_Clients-Logo-4.svg`, 'Google'],
  [`${cdn}66c6fb8beb3991b3db5cd5ff_Clients-Logo-6.svg`, 'Microsoft'],
  [`${cdn}66c6fb8bb6896643f3baa632_Clients-Logo-2.svg`, 'Coursera'],
  [`${cdn}66c6fb8bf82fe9cef5f78d2a_Clients-Logo-3.svg`, 'Duolingo'],
  [`${cdn}66c6fb8bf99901dda5c25e7e_Clients-Logo-5.svg`, 'Skillshare'],
]

const testimonials = [
  {
    quote: '“Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis. Morbi placerat eleifend malesuada sed semper quis.”',
    name: 'Linda Grady',
    role: 'CO-ASSISTANT MANAGER',
    image: '/assets/66cd560b74d8d4d4ed334d02_Testimonial-Author-Image.avif',
  },
  {
    quote: '“Lorem ipsum dolor sit amet consectetur. Molestie faucibus nibh felis tempor vel aliquet cursus placerat duis. Est felis pulvinar tortor ut nibh montes ante gravida velit. Facilisi posuere in sed mattis blandit duis aliquet.”',
    name: 'Jim Adams',
    role: 'DESIGNER',
    image: '/assets/66cd64ef67641295ddd2ffc9_Testimonial-Author-Image-2.avif',
  },
]

// Every course on the live page, keyed by its Webflow slug.
const remoteCourseImg = 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/'
const C = {
  crisis: { slug: 'crisis-management-and-problem-solving-strategies', category: 'Management', title: 'Crisis management and problem-solving strategies', rating: '4.88 (210)', lessons: '6 Lessons', students: '8k Enrolled', price: 'Free', img: '/assets/6710c8cf232065a7046261dc_Course-Image-7.webp' },
  photoshop: { slug: 'advanced-photoshop-techniques-for-designers', category: 'Design', title: 'Advanced photoshop techniques for designers', rating: '5.00 (1.2K)', lessons: '8 Lessons', students: '25k Enrolled', price: 'Free', img: '/assets/6710bcf4976ba1d072d8b476_Course-Image-4-2.webp' },
  operations: { slug: 'operations-management-and-process-improvement', category: 'Finance', title: 'Operations management and process improvement', rating: '5.00 (812)', lessons: '12 Lessons', students: '23k Enrolled', price: 'Free', img: '/assets/66eb9e25c4d132b7abc4dcb2_Course-Small-Image-8.webp' },
  mongo: { slug: 'database-integration-with-mongodb', category: 'Development', title: 'Database integration with MongoDB', rating: '4.49 (756)', lessons: '10 Lessons', students: '7k Enrolled', price: '$59', img: '/assets/66eb9e1184c0c12d2244968d_Course-Small-Image-9.webp' },
  risk: { slug: 'risk-management-and-business-continuity', category: 'Management', title: 'Risk management and business continuity', rating: '4.88 (210)', lessons: '3 Lessons', students: '8k Enrolled', price: '$49', img: '/assets/66eb9e363f6e47ec5245cf09_Course-Small-Image-7.webp' },
  mern: { slug: 'full-stack-development-with-the-mern-stack', category: 'Development', title: 'Full-stack development with the MERN stack', rating: '5.00 (985)', lessons: '12 Lessons', students: '22k Enrolled', price: '$72', img: '/assets/66eb9e61096e930736b651e4_Course-Small-Image-5.webp' },
  designSystems: { slug: 'design-systems-and-pattern-libraries', category: 'Design', title: 'Design systems and pattern libraries', rating: '5.00 (1.2K)', lessons: '8 Lessons', students: '25k Enrolled', price: '$99', img: '/assets/66fe66442929de6e874b3284_Course-Image.webp' },
  webDesign: { slug: 'learn-interactive-web-design-by-building-real-projects', category: 'Design', title: 'Learn interactive Web Design by building real projects', rating: '4.49 (756)', lessons: '12 Lessons', students: '23k Enrolled', price: '$79', img: `${remoteCourseImg}66eba4fcd2cfcf11fe70ccfe_Course%20Small%20Image-4.webp` },
  angular: { slug: 'building-single-page-applications-with-angular', category: 'Development', title: 'Building single page applications with angular', rating: '5.00 (328)', lessons: '6 Lessons', students: '12k Enrolled', price: 'Free', img: '/assets/66eb9dfb3e87f8984b5a15b6_Course-Small-Image.webp' },
  brand: { slug: 'grow-your-brand-and-reach-your-audience', category: 'Management', title: 'Grow your brand and reach your audience', rating: '4.88 (210)', lessons: '10 Lessons', students: '8k Enrolled', price: '$49', img: '/assets/66eb9fb02faddeb03288c28e_Course-Small-Image-2.webp' },
  finance: { slug: 'the-complete-guide-to-personal-and-business-finance', category: 'Finance', title: 'The complete guide to personal and business finance', rating: '4.88 (210)', lessons: '10 Lessons', students: '8k Enrolled', price: '$99', img: '/assets/66eb9ece25b132baef1462d5_Course-Small-Image-3.webp' },
}

// "All courses" shows the first six; each category tab has its own list on the live page.
const courseTabs = {
  'All courses': [C.crisis, C.photoshop, C.operations, C.mongo, C.risk, C.mern],
  Design: [C.designSystems, C.webDesign, C.photoshop],
  Development: [C.angular, C.mongo, C.mern],
  Management: [C.risk, C.brand],
  Finance: [C.operations, C.finance],
}

const trendingCourses = [C.angular, C.mongo, C.risk, C.mern]

function Button({ children, href = '/course-one', light = false }) {
  return <a className={`button ${light ? 'button-light' : ''}`} href={href}>{children}</a>
}

const detailsUrl = (course) => `/${course.slug}/course-details`
const productUrl = (course) => `/product/${course.slug}`

function CourseCard({ course }) {
  return <article className="course-card">
    <a className="course-image" href={detailsUrl(course)}><img src={course.img} alt={course.title} /></a>
    <div className="course-price">{course.price}</div>
    <div className="course-body">
      <div className="course-category">{course.category}</div>
      <h3>{course.title}</h3>
      <div className="rating"><img src={`${cdn}66c6fb8b857efb6c4c737b5d_Rating.svg`} alt=""/><span>{course.rating}</span></div>
      <div className="course-meta"><span><img src={`${cdn}66c6fb8b420a4f79326c2e96_Books.svg`} alt=""/>{course.lessons}</span><span><img src={`${cdn}66c6fb8b73655bcf79451768_Person.svg`} alt=""/>{course.students}</span></div>
      <div className="course-bottom"><a href={detailsUrl(course)}>Course Details</a>{course.price !== 'Free' && <a href={productUrl(course)}>Enroll</a>}</div>
    </div>
  </article>
}

function TrendingCourseCard({ course }) {
  return <article className="trending-card" tabIndex={0}>
    <div className="trending-card-image"><img src={course.img} alt={course.title}/><span>{course.price}</span></div>
    <div className="trending-card-body"><div className="trending-category">{course.category}</div><h3>{course.title}</h3><div className="trending-rating"><img src={`${cdn}66c6fb8b857efb6c4c737b5d_Rating.svg`} alt=""/><span>{course.rating}</span></div></div>
    <div className="trending-hover">
      <h4>{course.title}</h4>
      <div className="trending-hover-meta"><span><img src={`${cdn}66c6fb8b420a4f79326c2e96_Books.svg`} alt=""/>{course.lessons}</span><span><img src={`${cdn}66c6fb8b73655bcf79451768_Person.svg`} alt=""/>{course.students}</span></div>
      <p>Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.</p>
      <ul>{['Lorem ipsum dolor sit amet consectetur', 'Lorem ipsum dolor', 'Lorem ipsum dolor sit'].map(t => <li key={t}><img src={`${cdn}66cc3f52670c35637add3599_Tick.svg`} alt=""/>{t}</li>)}</ul>
      <div className="trending-hover-actions"><a className="button" href={detailsUrl(course)}>Course Details</a>{course.price !== 'Free' && <a className="button trending-enroll" href={productUrl(course)}>Enroll</a>}</div>
    </div>
  </article>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('All courses')
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const visibleCourses = courseTabs[activeTab]
  const testimonial = testimonials[activeTestimonial]

  useEffect(() => {
    const sections = document.querySelectorAll('main > section, footer')
    if (!('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })

    sections.forEach((section) => {
      section.classList.add('scroll-reveal')
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return <>
    <header className="site-header">
      <div className="nav-wrap">
        <a href="/" className="brand"><img src={`${cdn}66c6fb8bf82fe9cef5f78d65_Elearna.svg`} alt="Elearna" /></a>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
          <div className="nav-home-dropdown"><a href="/home-one">Home <span>⌄</span></a><div className="nav-home-menu"><a href="/home-one">Home One</a><a href="/home-two">Home Two</a><a href="/home-three">Home Three</a></div></div><CourseMegaMenu/><PageMegaMenu/><NavDropdown label="Blog" items={ [['Blog One','/blog-one'],['Blog Two','/blog-two'],['Blog Three','/blog-three']] }/>
          <NavDropdown label="Contact" items={ [['Contact One','/contact-one'],['Contact Two','/contact-two'],['Contact Three','/contact-three']] }/>
          <a className="mobile-account" href="/sign-up">Login / Register</a>
        </nav>
        <div className="nav-actions"><a className="cart" href="/checkout"><img src={`${cdn}66c6fb8ba5e099697cc76c17_Cart.svg`} alt="Cart"/><b>0</b></a><a href="/log-in">Login</a><i></i><a href="/sign-up">Register</a><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"><span></span><span></span><span></span></button></div>
      </div>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-pattern"></div>
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span></span> ONLINE LEARNING</div>
            <h1>More then <em>25000+</em> education courses online</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Gravida enim risus sollicitudin mauris tincidunt commodo ornare.</p>
            <Button href="/contact-one">Get Started</Button>
          </div>
          <div className="hero-visual"><img className="hero-person" src={`${cdn}66c6fb8ca55c188e59cf91d8_Banner-Girl-p-1080.webp`} alt="Student learning online"/><img className="hero-achievements" src={`${cdn}66c6fb8b79cb093fa869be54_Achievements.webp`} alt=""/><img className="hero-trusted" src={`${cdn}66f638f0e915508fda239b73_Trusted-By-Image.avif`} alt="Trusted by learners"/><img className="hero-halfmoon" src={`${cdn}66c6fb8bdcbb90074c85249f_Half-Moon.svg`} alt=""/><img className="hero-dot-small" src={`${cdn}66c6fb8b857efb6c4c737b8a_Yellow-Dot.svg`} alt=""/><img className="hero-dot-left" src={`${cdn}66c6fb8b857efb6c4c737b8a_Yellow-Dot.svg`} alt=""/><img className="hero-blue-dot" src={`${cdn}66c6fb8bfbf579e1a5ff1577_Blue-Circle.svg`} alt=""/></div>
        </div>
      </section>

      <section className="client-strip"><div className="container client-inner"><p>Learn from 350+ leading universities and companies with us</p><div className="client-logos" aria-label="Partner institutions"><div className="client-track">{[0, 1].map((copy) => <div className="client-set" key={copy} aria-hidden={copy === 1}>{clientLogos.map(([src, name]) => <img src={src} alt={copy === 0 ? name : ''} key={name} />)}</div>)}</div></div></div></section>

      <section className="section categories" id="categories"><div className="container"><div className="section-heading centered"><div className="eyebrow dark"><span></span> TOP CATEGORIES</div><h2>Discover leading categories to elevate your journey</h2></div><div className="category-grid">{categories.map(([icon,name,count,href],i)=><a href={href} className="category-card" key={name+i}><span className="category-icon"><img src={icon} alt=""/></span><strong>{name}</strong><small>{count}</small></a>)}</div></div></section>

      <section className="quick-start"><div className="container quick-start-main">
        <article className="quick-card quick-card-one"><div className="quick-card-copy"><h3>Quick access to the popular courses</h3><a className="button quick-button" href="/course-one">View Courses</a></div><img className="quick-card-photo" src="/assets/66c86806b094d5e2529855a0_Woman-Using-Laptop-p-800.webp" alt="Girl with a laptop"/></article>
        <article className="quick-card quick-card-two"><div className="quick-card-copy quick-card-two-copy"><h3>Develop your skills online!</h3><a className="button quick-button quick-button-dark" href="/career">Apply now</a></div><div className="quick-video"><video autoPlay loop muted playsInline poster="/assets/66c86567624ca9dec83f55cc_Home-One-Video-poster-00001.jpg"><source src="/assets/66c86567624ca9dec83f55cc_Home-One-Video-transcode.mp4" type="video/mp4"/></video><img src={`${cdn}66c6fb8b23f88178b487b3e2_Controls.svg`} alt=""/></div></article>
      </div></section>

      <section className="section courses-section" id="courses"><div className="container"><div className="section-top"><div><div className="eyebrow dark"><span></span> ONLINE LEARNING</div><h2>Top online courses</h2></div><div className="course-tabs">{['All courses','Design','Development','Management','Finance'].map(tab=><button onClick={()=>setActiveTab(tab)} className={activeTab===tab?'active':''} key={tab}>{tab}</button>)}</div></div><div className="course-grid">{visibleCourses.map(course=><CourseCard key={activeTab+course.slug} course={course}/>)}</div><div className="more-courses"><span>We assist you in finding the ideal tutor at no cost.</span><a href="/course-one">Browse all available courses <b>↗</b></a></div></div></section>

      <section className="offer-section"><div className="container offer-inner"><div className="offer-photo-wrap"><div className="offer-photo-stack"><img className="offer-free" src="/assets/66d92b103999266e87ca5747_Free-Course.avif" alt="50+ free courses listed online"/><img className="offer-man" src="/assets/66c6fb8bbdff100351a1e011_Man-Image-Holding-Graph.webp" alt="Student presenting course results"/></div><img className="offer-woman" src="/assets/66c6fb8b45a3029806674bb6_Woman-Image-Holding-Copy.webp" alt="Woman studying with a tablet"/></div><div className="offer-copy"><div className="eyebrow dark"><span></span> WHAT WE OFFER</div><h2>Personalized learning for your ambitions</h2><p>Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut.</p><ul className="offer-points"><li>Skill-based instruction</li><li>Analytics and insights</li><li>Global certification</li><li>Customizable courses</li></ul><div className="offer-help"><div><strong>Still have questions?</strong><p>Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.</p></div><a className="button offer-button" href="/contact-two">Get Started</a></div></div></div></section>

      <section className="testimonial-section"><div className="container testimonial-layout"><div className="testimonial-top"><div className="testimonial-heading"><div className="eyebrow"><span></span> OUR TESTIMONIALS</div><h2>Trusted by our successful students</h2></div><div className="student-count"><div className="student-stat"><strong>70M</strong><i></i><small>SUCCESSFUL<br/>STUDENTS</small></div><div className="student-stat"><strong>25K</strong><i></i><small>GLOBAL JOB<br/>PLACEMENTS</small></div></div></div><div className="testimonial-main"><div className="testimonial-image-wrap"><img src={testimonial.image} alt={testimonial.name}/></div><div className="testimonial-content"><blockquote>{testimonial.quote}</blockquote><div className="testimonial-person"><strong>{testimonial.name}</strong><small>{testimonial.role}</small></div><div className="testimonial-arrows"><button onClick={() => setActiveTestimonial((activeTestimonial + testimonials.length - 1) % testimonials.length)} aria-label="Previous testimonial">←</button><button onClick={() => setActiveTestimonial((activeTestimonial + 1) % testimonials.length)} aria-label="Next testimonial">→</button></div></div></div></div></section>

      <section className="section trending"><div className="container"><div className="trending-top"><div className="eyebrow dark"><span></span> TRENDING COURSES</div><h2>Explore our top programs</h2></div><div className="trending-grid">{trendingCourses.map(course=><TrendingCourseCard key={course.slug} course={course}/>)}</div></div></section>

      <section className="journey-section"><div className="container journey-reference"><div className="eyebrow dark">WHY WE ARE</div><h2>Elevate your professional journey</h2><p className="journey-description">Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut.</p><div className="journey-options"><article><img src={`${cdn}66c6fb8bee2a8ef26987f800_Books-Icons.svg`} alt=""/><h3>Learn anything</h3><p>Lorem ipsum dolor sit amet conse non quis id viverra id proin.</p></article><article><img src={`${cdn}66c6fb8bdf096206b7f4e62e_Money-Bag-ICon.svg`} alt=""/><h3>Save money</h3><p>Lorem ipsum dolor sit amet conse non quis id viverra id proin.</p></article><article><img src={`${cdn}66c6fb8bf82fe9cef5f78d5e_Course-Icon.svg`} alt=""/><h3>Flexible courses</h3><p>Lorem ipsum dolor sit amet conse non quis id viverra id proin.</p></article><article><img src={`${cdn}66c6fb8b98a2dc7066c69460_Verified-Icon.svg`} alt=""/><h3>Unlimited certificate</h3><p>Lorem ipsum dolor sit amet conse non quis id viverra id proin.</p></article></div></div></section>

      <section className="cta-one"><div className="container cta-main"><h2 className="cta-heading">Are you ready to start your journey?</h2><div className="cta-button-wrapper"><a className="button cta-browse" href="/course-one">Browse courses</a><a className="button cta-teacher" href="/career">Became a teacher</a></div></div></section>
    </main>

    <footer id="footer"><div className="container footer-grid"><div className="footer-brand"><a href="/"><img src={`${cdn}66c6fb8bf82fe9cef5f78d65_Elearna.svg`} alt="Elearna"/></a><p>Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis eget amet ut tristique cras.</p></div><div><h3>Quick links</h3><a href="/">Home</a><a href="/events">Events</a><a href="/career">Career</a><a href="/team">Instructor</a></div><div><h3>Popular courses</h3><a href="/category/finance">Finance</a><a href="/category/management">Management</a><a href="/category/design">Design</a><a href="/category/development">Web development</a></div><div><h3>Company</h3><a href="/about-one">About</a><a href="/course-two">Courses</a><a href="/blog-one">Blog</a><a href="/contact-one">Contact</a><a href="/information/license">License</a><a href="/pricing-one">Pricing</a><a href="/404">404</a></div><div><h3>CMS</h3><a href="/grow-your-brand-and-reach-your-audience/course-details">Course details</a><a href="/team-members/lee-schmitt">Instructor details</a><a href="/blog-posts/the-evolution-of-teaching-tools-in-the-21st-century">Blog details</a></div></div><div className="container copyright"><span>DESIGN BY <a href="http://radianttemplates.com/"><b>RADIANT TEMPLATES</b></a></span><span>POWERED BY <a href="https://webflow.com/?r=0"><b>WEBFLOW</b></a></span></div></footer>
  </>
}

export default App
