import { useEffect, useState } from 'react'
import CourseMegaMenu from './CourseMegaMenu.jsx'
import PageMegaMenu from './PageMegaMenu.jsx'
import NavDropdown from './NavDropdown.jsx'

const files = '/assets/'
const courseFiles = '/assets/'

const categories = [
  { title: 'Web design and creative', img: `${files}66d6ca6d65198d1adcda7a6f_Category-Image.webp` },
  { title: 'Finance and accounting', img: `${files}66d6ca6d379847199a9da8c3_Category-Image-2.webp` },
  { title: 'IT and software', img: `${files}66d6ca6ddec047bd0f259004_Category-Image-3.webp` },
  { title: 'Digital marketing', img: `${files}66fe6841120ac0d82bf8c08a_Digital-Marketing.webp` },
]

const potentialCards = [
  { num: '01', title: 'Flexibility and convenience', desc: 'Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.' },
  { num: '02', title: 'Course accessibility', desc: 'Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.' },
  { num: '03', title: 'Cost-effectiveness', desc: 'Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.' },
  { num: '04', title: 'Personalized learning', desc: 'Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.' },
]

const trendingCourses = [
  { slug: 'building-single-page-applications-with-angular', title: 'Building single page applications with angular', rating: '5.00 (328)', lessons: '6 Lessons', enrolled: '12k Enrolled', bg: `${files}66d831a6a196c626a4646563_Course-Background.webp` },
  { slug: 'database-integration-with-mongodb', title: 'Database integration with MongoDB', rating: '4.49 (756)', lessons: '10 Lessons', enrolled: '7k Enrolled', bg: `${files}66d831a6884e433507631ecb_Course-Background-3.webp` },
  { slug: 'operations-management-and-process-improvement', title: 'Operations management and process improvement', rating: '5.00 (812)', lessons: '12 Lessons', enrolled: '23k Enrolled', bg: `${files}66d831a6fface746de9764a6_Course-Background-4.webp` },
  { slug: 'risk-management-and-business-continuity', title: 'Risk management and business continuity', rating: '4.88 (210)', lessons: '3 Lessons', enrolled: '8k Enrolled', bg: `${files}66d831a65d24001133ce1b9f_Course-Background-5.webp` },
  { slug: 'design-systems-and-pattern-libraries', title: 'Design systems and pattern libraries', rating: '5.00 (1.2K)', lessons: '8 Lessons', enrolled: '25k Enrolled', bg: `${files}66d831a6c4e5401855628a37_Course-Background-6.webp` },
  { slug: 'full-stack-development-with-the-mern-stack', title: 'Full-stack development with the MERN stack', rating: '5.00 (985)', lessons: '12 Lessons', enrolled: '22k Enrolled', bg: `${files}66d831a6dae65024b112fdba_Course-Background-2.webp` },
]

const popularCourses = [
  { slug: 'building-single-page-applications-with-angular', category: 'DEVELOPMENT', title: 'Building single page applications with angular', rating: '5.00 (328)', price: 'Free', img: `${courseFiles}66eb9dfb3e87f8984b5a15b6_Course-Small-Image.webp` },
  { slug: 'database-integration-with-mongodb', category: 'DEVELOPMENT', title: 'Database integration with MongoDB', rating: '4.49 (756)', price: '$59', img: `${courseFiles}66eb9e1184c0c12d2244968d_Course-Small-Image-9.webp` },
  { slug: 'risk-management-and-business-continuity', category: 'MANAGEMENT', title: 'Risk management and business continuity', rating: '4.88 (210)', price: '$49', img: `${courseFiles}66eb9e363f6e47ec5245cf09_Course-Small-Image-7.webp` },
  { slug: 'full-stack-development-with-the-mern-stack', category: 'DEVELOPMENT', title: 'Full-stack development with the MERN stack', rating: '5.00 (985)', price: '$72', img: `${courseFiles}66eb9e61096e930736b651e4_Course-Small-Image-5.webp` },
  { slug: 'operations-management-and-process-improvement', category: 'FINANCE', title: 'Operations management and process improvement', rating: '5.00 (812)', price: 'Free', img: `${courseFiles}66eb9e25c4d132b7abc4dcb2_Course-Small-Image-8.webp` },
  { slug: 'design-systems-and-pattern-libraries', category: 'DESIGN', title: 'Design systems and pattern libraries', rating: '5.00 (1.2K)', price: '$99', img: `${courseFiles}66fe66442929de6e874b3284_Course-Image.webp` },
  { slug: 'grow-your-brand-and-reach-your-audience', category: 'MANAGEMENT', title: 'Grow your brand and reach your audience', rating: '4.88 (210)', price: '$49', img: `${courseFiles}66eb9fb02faddeb03288c28e_Course-Small-Image-2.webp` },
  { slug: 'the-complete-guide-to-personal-and-business-finance', category: 'FINANCE', title: 'The complete guide to personal and business finance', rating: '4.88 (210)', price: '$99', img: `${courseFiles}66eb9ece25b132baef1462d5_Course-Small-Image-3.webp` },
]

const popularCourseDetails = {
  'building-single-page-applications-with-angular': { lessons: '6 Lessons', enrolled: '12K Enrolled', description: 'Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.', features: ['Lorem ipsum dolor sit amet consectetur', 'Lorem ipsum dolor', 'Lorem ipsum dolor sit'] },
  'database-integration-with-mongodb': { lessons: '10 Lessons', enrolled: '7K Enrolled', description: 'Explore database design and integration through practical MongoDB projects.', features: ['Work with document databases', 'Build efficient data models', 'Connect databases to applications'] },
  'risk-management-and-business-continuity': { lessons: '3 Lessons', enrolled: '8K Enrolled', description: 'Learn to assess business risks and create effective continuity plans.', features: ['Identify business risks', 'Plan for continuity', 'Apply practical frameworks'] },
  'full-stack-development-with-the-mern-stack': { lessons: '12 Lessons', enrolled: '22K Enrolled', description: 'Build modern full-stack applications with the MERN technology stack.', features: ['Create React interfaces', 'Develop Node APIs', 'Connect MongoDB data'] },
  'operations-management-and-process-improvement': { lessons: '12 Lessons', enrolled: '23K Enrolled', description: 'Improve operations and learn proven methods for better business processes.', features: ['Map business processes', 'Measure performance', 'Identify improvements'] },
  'design-systems-and-pattern-libraries': { lessons: '8 Lessons', enrolled: '25K Enrolled', description: 'Create reusable design systems and consistent product experiences.', features: ['Build reusable components', 'Document design patterns', 'Improve team consistency'] },
  'grow-your-brand-and-reach-your-audience': { lessons: '9 Lessons', enrolled: '12K Enrolled', description: 'Develop a clear brand and reach the audiences that matter to your business.', features: ['Define brand identity', 'Reach target audiences', 'Measure engagement'] },
  'the-complete-guide-to-personal-and-business-finance': { lessons: '5 Lessons', enrolled: '9K Enrolled', description: 'Build confidence with personal finance and practical business fundamentals.', features: ['Understand financial basics', 'Plan budgets', 'Make informed decisions'] },
}

const clientLogos = [
  `${files}66c6fb8bca715a603abbc84f_Clients-Logo.svg`,
  `${files}66c6fb8b87b34b4188395ff2_Clients-Logo-4.svg`,
  `${files}66c6fb8beb3991b3db5cd5ff_Clients-Logo-6.svg`,
  `${files}66c6fb8bb6896643f3baa632_Clients-Logo-2.svg`,
  `${files}66c6fb8bf82fe9cef5f78d2a_Clients-Logo-3.svg`,
  `${files}66c6fb8bf99901dda5c25e7e_Clients-Logo-5.svg`,
]

const testimonials = [
  {
    quote: '“Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis. Morbi placerat eleifend malesuada sed semper quis.”',
    name: 'Linda Grady',
    role: 'CO-ASSISTANT MANAGER',
  },
  {
    quote: '“Lorem ipsum dolor sit amet consectetur. Est felis pulvinar tortor ut nibh montes ante gravida velit. Facilisi posuere in sed mattis blandit duis aliquet.”',
    name: 'Jim Adams',
    role: 'DESIGNER',
  },
]

function HomeThree() {
  const [activeTrending, setActiveTrending] = useState(0)
  const [activePotential, setActivePotential] = useState(0)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    document.title = 'Elearna - Home Three'
    const nodes = document.querySelectorAll('.home-three-page main > section, .home-three-page footer')
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('h3-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -35px 0px' })
    nodes.forEach((n) => { n.classList.add('h3-reveal'); observer.observe(n) })
    return () => observer.disconnect()
  }, [])

  const testimonial = testimonials[activeTestimonial]

  return (
    <div className="home-three-page">
      {/* Topbar & Navbar */}
      <div className="home-two-nav">
        <div className="home-two-topbar">
          <div className="ht-container ht-topline">
            <span>Are you interested in online coaching? <a href="#contact">Contact us.</a></span>
            <span>
              <a href="mailto:support@example.com">support@example.com</a>
              <i />
              Call: <a href="tel:8881234567">(888) 123 4567</a>
            </span>
          </div>
        </div>
        <div className="ht-container ht-nav">
          <a className="ht-logo" href="/"><img src={`${files}66c6fb8bf82fe9cef5f78d65_Elearna.svg`} alt="Elearna" /></a>
          <nav>
            <div className="ht-home-menu">
              <a href="/home-three">Home <b>⌄</b></a>
              <span>
                <a href="/">Home One</a>
                <a href="/home-two">Home Two</a>
                <a href="/home-three">Home Three</a>
              </span>
            </div>
            <CourseMegaMenu compact />
            <PageMegaMenu compact />
            <NavDropdown label="Blog" items={ [['Blog One','/blog-one'],['Blog Two','/blog-two'],['Blog Three','/blog-three']] }/>
            <NavDropdown label="Contact" items={ [['Contact One','/contact-one'],['Contact Two','/contact-two'],['Contact Three','/contact-three']] }/>
          </nav>
          <div className="ht-account">
            <a className="ht-cart" href="#courses">
              <img src={`${files}66c6fb8ba5e099697cc76c17_Cart.svg`} alt="Cart" />
              <b>0</b>
            </a>
            <a href="#contact">Login</a>
            <span />
            <a href="#contact">Register</a>
          </div>
          <button className="ht-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>☰</button>
          {menuOpen && (
            <nav className="ht-mobile-nav">
              <a href="/">Home One</a>
              <a href="/home-two" onClick={() => setMenuOpen(false)}>Home Two</a>
              <a href="/home-three" onClick={() => setMenuOpen(false)}>Home Three</a>
              <a href="/course-one" onClick={() => setMenuOpen(false)}>Courses</a>
              <a href="/about-one" onClick={() => setMenuOpen(false)}>About One</a>
              <a href="/about-two" onClick={() => setMenuOpen(false)}>About Two</a>
              <a href="/faq" onClick={() => setMenuOpen(false)}>FAQ</a>
              <a href="/pricing-one" onClick={() => setMenuOpen(false)}>Pricing</a>
              <a href="/career" onClick={() => setMenuOpen(false)}>Career</a>
              <a href="/events" onClick={() => setMenuOpen(false)}>Events</a>
              <a href="/team" onClick={() => setMenuOpen(false)}>Team</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </nav>
          )}
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section className="home-three-hero">
          <div className="ht-container h3-hero-inner">
            <div className="h3-watermark-personal">Personal</div>
            <div className="h3-watermark-coach">Coach</div>
            <img
              className="h3-hero-man"
              src={`${files}66d6b65afa48c134cb3e9ab1_Home-Three-Hero-Man-Image.webp`}
              alt="Coach standing in front"
            />
            <div className="h3-hero-caption">
              <div className="ht-eyebrow">Online learning</div>
              <h1>Digital <span className="text-yellow">learning</span> empowerment hub</h1>
            </div>
          </div>
        </section>

        {/* 3 Detail Boxes */}
        <section className="home-three-details">
          <div className="ht-container">
            <div className="h3-details-row">
              <article className="h3-detail-box">
                <img src={`${files}66cff274c1ce9bc0b1d47e11_Circle-Icon-One.svg`} alt="" />
                <div>
                  <h3>150+ online courses</h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </article>
              <article className="h3-detail-box">
                <img src={`${files}66cff274e1a83a39a2571294_Circle-Icon-Two.svg`} alt="" />
                <div>
                  <h3>Personalized learning</h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </article>
              <article className="h3-detail-box">
                <img src={`${files}66cff27596d8f5a818903b2a_Circle-Icon-Three.svg`} alt="" />
                <div>
                  <h3>Lifetime update</h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Category Section */}
        <section className="home-three-category" id="categories">
          <div className="ht-container">
            <div className="h3-section-head-centered">
              <div className="ht-eyebrow ht-dark">Top Categories</div>
              <h2>Discover leading categories</h2>
              <p>Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.</p>
            </div>
            <div className="h3-categories-grid">
              {categories.map((cat) => (
                  <a href={`/category/${cat.title.includes('Finance') ? 'finance' : cat.title.includes('IT') ? 'development' : cat.title.includes('marketing') ? 'marketing' : 'design'}`} className="h3-category-card" key={cat.title}>
                  <img src={cat.img} alt={cat.title} />
                  <div className="h3-category-label">
                    <h3>{cat.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Unlocking Potential Section */}
        <section className="home-three-potential">
          <div className="ht-container">
            <div className="h3-potential-head">
              <div className="ht-eyebrow ht-dark">Unlocking Potential</div>
              <h2>Discover the boundless advantages and transformative power of eLearning for personal and professional growth in the digital age</h2>
            </div>
            <div className="h3-potential-grid">
              {potentialCards.map((card, index) => (
                <div className={`h3-potential-card ${activePotential === index ? 'is-active' : ''}`} key={card.num} tabIndex={0} onMouseEnter={() => setActivePotential(index)} onFocus={() => setActivePotential(index)}>
                  <span className="h3-potential-num">{card.num}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  {activePotential === index && <a className="h3-potential-btn" href="#courses">Get Started <b>↗</b></a>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Courses with Dynamic Full-Width Image Stack */}
        <section className="home-three-courses-full">
          <div className="h3-courses-full-bg">
            <img src={trendingCourses[activeTrending].bg} alt="Course background" />
            <div className="h3-courses-full-overlay" />
          </div>
          <div className="ht-container h3-courses-full-inner">
            <div className="h3-courses-full-left">
              <div className="ht-eyebrow">Trending courses</div>
              <h2>Explore our top programs</h2>
            </div>
            <div className="h3-courses-full-list">
              {trendingCourses.map((c, idx) => (
                <a
                  href={`/product/${c.slug}`}
                  key={c.title}
                  className={`h3-full-course-item ${activeTrending === idx ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveTrending(idx)}
                >
                  <h3>{c.title}</h3>
                  <div className="h3-full-course-meta">
                    <div className="h3-full-rating">
                      <img src={`${files}66c6fb8b857efb6c4c737b5d_Rating.svg`} alt="" />
                      <span>{c.rating}</span>
                    </div>
                    <div className="h3-full-meta-pill">
                      <img src={`${files}66d81aceab3f72d1961e6b7c_Books-Small-Icons.svg`} alt="" />
                      <span>{c.lessons}</span>
                    </div>
                    <div className="h3-full-meta-pill">
                      <img src={`${files}66d81acea3854f6c5831b5c5_Person-Icons-White.svg`} alt="" />
                      <span>{c.enrolled}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Courses Section */}
        <section className="home-three-courses" id="courses">
          <div className="ht-container">
            <div className="ht-eyebrow ht-dark">Online learning</div>
            <h2 className="h3-section-title">Popular courses</h2>
            <div className="h3-popular-grid">
              {popularCourses.map((c) => {
                const details = popularCourseDetails[c.slug]
                return <article className="h3-popular-card" key={c.title}>
                  <a className="h3-popular-link" href={`/${c.slug}/course-details`}>
                    <div className="h3-popular-img-wrap">
                      <img src={c.img} alt={c.title} />
                      <span className="h3-popular-price">{c.price}</span>
                    </div>
                    <div className="h3-popular-body">
                      <span className="h3-popular-cat">{c.category}</span>
                      <h3>{c.title}</h3>
                      <div className="h3-popular-rating">
                        <img src={`${files}66c6fb8b857efb6c4c737b5d_Rating.svg`} alt="" />
                        <span>{c.rating}</span>
                      </div>
                    </div>
                  </a>
                  <div className="h3-popular-hover">
                    <h3>{c.title}</h3>
                    <div className="h3-popular-hover-meta">{details.lessons}<span>•</span>{details.enrolled}</div>
                    <p>{details.description}</p>
                    <ul>{details.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
                    <a href={`/${c.slug}/course-details`}>Course Details</a>
                  </div>
                </article>
              })}
            </div>
          </div>
        </section>

        {/* Counter & Inquiry Form */}
        <section className="home-three-counter">
          <div className="ht-container h3-counter-inner">
            <div className="h3-counter-left">
              <h2>Get the courses by expert coach</h2>
              <div className="h3-counter-subtitle">Get started with us</div>
              <div className="h3-counter-stats">
                <div className="h3-counter-stat">
                  <strong>01.2K</strong>
                  <span>FINISH SEASONS</span>
                </div>
                <div className="h3-counter-divider" />
                <div className="h3-counter-stat">
                  <strong>71.8K</strong>
                  <span>ENROLLED</span>
                </div>
                <div className="h3-counter-divider" />
                <div className="h3-counter-stat">
                  <strong>100%</strong>
                  <span>JOB PLACEMENT</span>
                </div>
              </div>
            </div>
            <div className="h3-counter-right">
              <div className="h3-inquiry-box">
                <h3>Course availability inquiry</h3>
                {formSubmitted ? (
                  <div className="h3-form-success">Thank you! Your submission has been received!</div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true) }}>
                    <input className="h3-form-input" type="text" placeholder="Your name" required />
                    <input className="h3-form-input" type="email" placeholder="Email address" required />
                    <textarea className="h3-form-textarea" placeholder="Message" required />
                    <button type="submit" className="h3-form-submit">Inquire</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Dark Client Logo Strip */}
        <section className="clients-three">
          <div className="ht-container h3-clients-inner">
            <p>Learn from 350+ leading universities and companies with us</p>
            <div className="h3-client-track">
              {[0, 1].map((copy) => (
                <div className="h3-client-set" aria-hidden={copy === 1} key={copy}>
                  {clientLogos.map((logo, i) => (
                    <img src={logo} alt={copy === 0 ? `Client ${i + 1}` : ''} key={logo} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Offer / 25 Years Section */}
        <section className="home-three-learning">
          <div className="ht-container h3-learning-inner">
            <div className="h3-learning-left">
              <div className="h3-video-wrap">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={`${files}66c86567624ca9dec83f55cc_Home-One-Video-poster-00001.jpg`}
                >
                  <source src={`${files}66c86567624ca9dec83f55cc_Home-One-Video-transcode.mp4`} type="video/mp4" />
                </video>
              </div>
              <img
                className="h3-free-badge"
                src={`${files}66d92b103999266e87ca5747_Free-Course.avif`}
                alt="Free courses"
              />
              <div className="h3-exp-badge">
                <strong>25</strong>
                <span>Years of experience</span>
              </div>
            </div>
            <div className="h3-learning-right">
              <div className="ht-eyebrow ht-dark">what we Offer</div>
              <h2>Personalized learning for your ambitions</h2>
              <p>Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut.</p>
              <ul className="h3-offer-list">
                <li>Skill-based instruction</li>
                <li>Analytics and insights</li>
                <li>Global certification</li>
                <li>Customizable courses</li>
              </ul>
              <div className="h3-help-box">
                <div>
                  <strong>Still have questions?</strong>
                  <p>Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.</p>
                </div>
                <a className="ht-button ht-button-dark" href="#contact">Get Started <b>↗</b></a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="home-two-testimonial">
          <div className="ht-testimonial-inner">
            <img className="ht-quote-icon" src={`${files}66cff274c1ce9bc0b1d47e56_Quote-Icons.svg`} alt="Quote" />
            <div className="ht-testimonial-text">
              <p>{testimonial.quote}</p>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
              <div className="ht-testimonial-controls">
                <button
                  aria-label="Previous testimonial"
                  onClick={() => setActiveTestimonial((activeTestimonial + testimonials.length - 1) % testimonials.length)}
                >
                  ←
                </button>
                <button
                  aria-label="Next testimonial"
                  onClick={() => setActiveTestimonial((activeTestimonial + 1) % testimonials.length)}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="cta-one">
          <div className="container cta-main">
            <h2 className="cta-heading">Are you ready to start your journey?</h2>
            <div className="cta-button-wrapper">
              <a className="button cta-browse" href="/course-two">Browse Courses</a>
              <a className="button cta-teacher" href="#contact">Became A Teacher</a>
            </div>
          </div>
        </section>

        {/* Why We Are / Journey Section */}
        <section className="home-three-journey">
          <div className="container journey-reference">
            <div className="eyebrow dark">WHY WE ARE</div>
            <h2>Elevate your professional journey</h2>
            <p className="journey-description">
              Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut.
            </p>
            <div className="journey-options">
              <article>
                <img src={`${files}66c6fb8bee2a8ef26987f800_Books-Icons.svg`} alt="" />
                <h3>Learn anything</h3>
                <p>Lorem ipsum dolor sit amet conse non quis id viverra id proin.</p>
              </article>
              <article>
                <img src={`${files}66c6fb8bdf096206b7f4e62e_Money-Bag-ICon.svg`} alt="" />
                <h3>Save money</h3>
                <p>Lorem ipsum dolor sit amet conse non quis id viverra id proin.</p>
              </article>
              <article>
                <img src={`${files}66c6fb8bf82fe9cef5f78d5e_Course-Icon.svg`} alt="" />
                <h3>Flexible courses</h3>
                <p>Lorem ipsum dolor sit amet conse non quis id viverra id proin.</p>
              </article>
              <article>
                <img src={`${files}66c6fb8b98a2dc7066c69460_Verified-Icon.svg`} alt="" />
                <h3>Unlimited certificate</h3>
                <p>Lorem ipsum dolor sit amet conse non quis id viverra id proin.</p>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer-two" id="contact">
        <div className="ht-container ht-footer-grid">
          <div className="ht-footer-brand">
            <a href="/"><img src={`${files}66c6fb8bf82fe9cef5f78d65_Elearna.svg`} alt="Elearna" /></a>
            <p>Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis eget amet ut tristique cras.</p>
          </div>
          <div>
            <h3>Popular courses</h3>
            <a href="/category/finance">Finance</a>
            <a href="/category/management">Management</a>
            <a href="/category/design">Design</a>
            <a href="/category/development">Web development</a>
          </div>
          <div>
            <h3>Company</h3>
            <a href="#contact">About</a>
            <a href="/course-one">Courses</a>
            <a href="#contact">Blog</a>
            <a href="#contact">Contact</a>
            <a href="#contact">License</a>
            <a href="#contact">Pricing</a>
          </div>
          <div>
            <h3>CMS</h3>
            <a href="/building-single-page-applications-with-angular/course-details">Course details</a>
            <a href="#contact">Instructor details</a>
            <a href="#contact">Blog details</a>
          </div>
          <div>
            <h3>Utility pages</h3>
            <a href="#contact">Style guide</a>
            <a href="#contact">Password protected</a>
            <a href="#contact">404</a>
          </div>
        </div>
        <div className="ht-container ht-copyright">
          <span>DESIGN BY <b>RADIANT TEMPLATES</b></span>
          <span>POWERED BY <b>WEBFLOW</b></span>
        </div>
      </footer>
    </div>
  )
}

export default HomeThree
