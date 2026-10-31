import { useEffect, useState } from 'react'
import CourseMegaMenu from './CourseMegaMenu.jsx'
import PageMegaMenu from './PageMegaMenu.jsx'
import NavDropdown from './NavDropdown.jsx'

const files = `${import.meta.env.BASE_URL}assets/`
const courseFiles = '/assets/'
const categories = [
  ['66c6fb8b9d9bcd0e5de94637_Category-Icons.svg', 'Creative web design', '8 Courses'],
  ['66c6fb8b98a2dc7066c693d3_Category-Icons-2.svg', 'Finance accounting', '10 Courses'],
  ['66c6fb8b2ae1000d4215a423_Category-Icons-3.svg', 'IT and software', '5 Courses'],
  ['66c6fb94416128e5b4e355b0_Category-Icons-4.svg', 'Digital marketing', '4 Courses'],
  ['66c6fb8b035ebd8829061041_Category-Icons-5.svg', 'Web development', '8 Courses'],
  ['66c6fb8bf82fe9cef5f78d2f_Category-Icons-6.svg', 'Content writing', '3 Courses'],
]
const courses = [
  ['66ebabcd61399462d208146a_Course-Portrait-Image.webp', 'Development', 'Building single page applications with angular', '5.00 (328)', 'Free'],
  ['66ebabde3e87f8984b6782a1_Course-Portrait-Image-9.webp', 'Development', 'Database integration with MongoDB', '4.49 (756)', '$59'],
  ['66ebabf4c17d78e3224b9b5b_Course-Portrait-Image-8.webp', 'Finance', 'Operations management and process improvement', '5.00 (812)', 'Free'],
  ['66ebac0cfd1f38c62e59431b_Course-Portrait-Image-7.webp', 'Management', 'Risk management and business continuity', '4.88 (210)', '$49'],
  ['66fe66cdef763efcc757aefb_Course-Image-2.webp', 'Design', 'Design systems and pattern libraries', '5.00 (1.2K)', '$99'],
  ['66ebac3db9565bc62a90430e_Course-Portrait-Image-5.webp', 'Development', 'Full-stack development with the MERN stack', '5.00 (985)', '$72'],
]
const benefits = [
  ['Flexibility and convenience', '66cff2777e50749c4b90b5dd_Potential-Image-2.webp'],
  ['Course accessibility', '66cff277582c8617efcf31ab_Potential-Image-3.webp'],
  ['Cost-effectiveness', '66cff277ceae6c7605edbd6e_Potential-Image-4.webp'],
  ['Personalized learning', '66de9b2474f1094cb7ea1767_Contact-Us-One.webp'],
]
const clientLogos = [
  '66cff2747e50749c4b90b49e_Client-Icon-Black.svg', '66cff274f86ce33e074f03d9_Client-Icon-Black-2.svg',
  '66cff274cdd4c2243b9ba268_Client-Icon-Black-3.svg', '66cff274e855d20c26ff2fba_Client-Icon-Black-4.svg',
  '66cff274d9213b6ef2e8640e_Client-Icon-Black-5.svg', '66cff274d9213b6ef2e86488_Client-Icon-Black-6.svg',
]
const blogPosts = [
  ['66ff7196253a4813606a5f52_Blog-Small-Thumbnail-12.webp', 'Career', 'Improve knowledge retention with visual learning', 'October 4, 2024'],
  ['66ff6e0a6f9b375fbca970fe_Blog-Small-Thumbnail-11.webp', 'Development', 'Master online learning with proven strategies', 'October 4, 2024'],
  ['66ff6a72dd07492f0cbb0a6d_Blog-Small-Thumbnail-10.webp', 'Teaching', 'How to enhance your learning experience today', 'October 3, 2024'],
]

function HomeTwo() {
  const [openBenefit, setOpenBenefit] = useState(1)
  const [testimonial, setTestimonial] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.title = 'Elearna - Home Two'
    const nodes = document.querySelectorAll('.home-two-page main > section, .home-two-page footer')
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('home-two-visible')
        observer.unobserve(entry.target)
      }
    }), { threshold: 0.1, rootMargin: '0px 0px -35px 0px' })
    nodes.forEach((node) => { node.classList.add('home-two-reveal'); observer.observe(node) })
    return () => observer.disconnect()
  }, [])

  const testimonials = [
    ['“Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis. Morbi placerat eleifend malesuada sed semper quis.”', 'Linda Grady', 'CO-ASSISTANT MANAGER'],
    ['“Lorem ipsum dolor sit amet consectetur. Est felis pulvinar tortor ut nibh montes ante gravida velit.\nFacilisi posuere in sed mattis blandit duis aliquet.”', 'Jim Adams', 'DESIGNER'],
  ]

  return <div className="home-two-page">
    <div className="home-two-nav">
      <div className="home-two-topbar"><div className="ht-container ht-topline"><span>Are you interested in online coaching? <a href="#contact">Contact us.</a></span><span><a href="mailto:support@example.com">support@example.com</a><i/>Call: <a href="tel:8881234567">(888) 123 4567</a></span></div></div>
      <div className="ht-container ht-nav"><a className="ht-logo" href="/"><img src={`${files}66c6fb8bf82fe9cef5f78d65_Elearna.svg`} alt="Elearna"/></a><nav><div className="ht-home-menu"><a href="/home-two">Home <b>⌄</b></a><span><a href="/home-one">Home One</a><a href="/home-two">Home Two</a><a href="/home-three">Home Three</a></span></div><CourseMegaMenu compact/><PageMegaMenu compact/><NavDropdown label="Blog" items={ [['Blog One','/blog-one'],['Blog Two','/blog-two'],['Blog Three','/blog-three']] }/><NavDropdown label="Contact" items={ [['Contact One','/contact-one'],['Contact Two','/contact-two'],['Contact Three','/contact-three']] }/></nav><div className="ht-account"><a className="ht-cart" href="/course-one"><img src={`${files}66c6fb8ba5e099697cc76c17_Cart.svg`} alt="Cart"/><b>0</b></a><a href="/log-in">Login</a><span/><a href="/sign-up">Register</a></div><button className="ht-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>☰</button>{menuOpen && <nav className="ht-mobile-nav"><a href="/home-one">Home One</a><a href="/home-two" onClick={() => setMenuOpen(false)}>Home Two</a><a href="/home-three" onClick={() => setMenuOpen(false)}>Home Three</a><a href="/course-one" onClick={() => setMenuOpen(false)}>Courses</a><a href="/course-two" onClick={() => setMenuOpen(false)}>Course Two</a><a href="/course-three" onClick={() => setMenuOpen(false)}>Course Three</a><a href="/about-one" onClick={() => setMenuOpen(false)}>About One</a><a href="/about-two" onClick={() => setMenuOpen(false)}>About Two</a><a href="/faq" onClick={() => setMenuOpen(false)}>FAQ</a><a href="/pricing-one" onClick={() => setMenuOpen(false)}>Pricing</a><a href="/career" onClick={() => setMenuOpen(false)}>Career</a><a href="/events" onClick={() => setMenuOpen(false)}>Events</a><a href="/team" onClick={() => setMenuOpen(false)}>Team</a><a href="/blog-one" onClick={() => setMenuOpen(false)}>Blog</a><a href="/contact-one" onClick={() => setMenuOpen(false)}>Contact</a></nav>}</div>
    </div>

    <main>
      <section className="home-two-hero"><div className="ht-container ht-hero-content"><div className="ht-personal"><span>personal</span><span>Coach</span></div><div className="ht-hero-caption"><div className="ht-eyebrow">ONLINE LEARNING</div><h1>Transform <em>learning</em> with flexible online education</h1></div></div></section>

      <section className="home-two-details"><div className="ht-container ht-detail-row">{[
        ['66cff274c1ce9bc0b1d47e11_Circle-Icon-One.svg', '150+ online courses'],
        ['66cff274e1a83a39a2571294_Circle-Icon-Two.svg', 'Personalized learning'],
        ['66cff27596d8f5a818903b2a_Circle-Icon-Three.svg', 'Lifetime update'],
      ].map(([icon, title]) => <article className="ht-detail" key={title}><img src={`${files}${icon}`} alt=""/><div><h3>{title}</h3><p>Lorem ipsum dolor sit amet</p></div></article>)}</div></section>

      <section className="home-two-category" id="categories"><div className="ht-container ht-category-layout"><div className="ht-category-intro"><div className="ht-eyebrow ht-dark">TOP CATEGORIES</div><h2>Discover leading categories</h2><a className="ht-button ht-button-dark" href="#courses">Get Started <b>↗</b></a></div><div className="ht-category-grid">{categories.map(([icon, title, count]) => <a className="ht-category-card" href="#courses" key={title}><img src={`${files}${icon}`} alt=""/><h3>{title}</h3><span>{count}</span></a>)}</div></div></section>

      <section className="home-two-discover"><div className="ht-container ht-discover-heading"><div className="ht-eyebrow ht-dark">UNLOCKING POTENTIAL</div><h2>Discover the boundless advantages and transformative power of eLearning for professional growth</h2></div><div className="ht-discover-options"><div className="ht-discover-images">{benefits.map(([title,image],i)=><img className={`discover-image image-${i+1} ${openBenefit===i?'active':''}`} src={`${files}${image}`} alt={title} key={image}/>)}</div><div className="ht-discover-cards-wrap">{benefits.map(([title,image],i)=><button className={`ht-discover-card ${openBenefit===i?'is-open':''}`} key={title} style={{'--benefit-image':`url("${files}${image}")`}} onMouseEnter={()=>setOpenBenefit(i)} onFocus={()=>setOpenBenefit(i)} onClick={()=>setOpenBenefit(i)}><span className="ht-discover-card-copy"><strong>0{i+1}</strong><b>{title}</b>{openBenefit===i&&<small>Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.</small>}</span></button>)}</div></div></section>

      <section className="home-two-courses" id="courses"><div className="ht-container"><div className="ht-eyebrow ht-dark">ONLINE LEARNING</div><h2 className="ht-section-title">Top online courses</h2><div className="ht-course-grid">{courses.map(([image, category, title, rating, price]) => <article className="ht-course" key={title}><a className="ht-course-image" href="#courses"><img src={`${courseFiles}${image}`} alt=""/><span className="ht-course-price">{price}</span><div className="ht-course-hover"><span>Course Details&nbsp; ↗</span></div><div className="ht-course-info"><span>{category}</span><h3>{title}</h3><div><img src={`${files}66c6fb8b857efb6c4c737b5d_Rating.svg`} alt=""/>{rating}</div></div></a></article>)}</div><div className="ht-more-courses">We assist you in finding the ideal tutor at no cost. <a href="/course-one">Browse all available courses</a></div></div></section>

      <section className="home-two-learning"><div className="ht-container"><div className="ht-learning-heading"><div className="ht-eyebrow ht-dark">WHY WE ARE</div><h2 className="ht-section-title">World-class learning from anywhere</h2></div><div className="ht-learning-grid"><div className="ht-learning-media"><video autoPlay loop muted playsInline poster="/assets/66c86567624ca9dec83f55cc_Home-One-Video-poster-00001.jpg"><source src="/assets/66c86567624ca9dec83f55cc_Home-One-Video-transcode.mp4" type="video/mp4"/></video><img className="ht-learning-woman" src={`${files}66cff274cdd4c2243b9ba324_Woman-Image.webp`} alt="Student learning"/></div><div className="ht-learning-copy"><p>Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut.</p><div className="ht-stats"><div><strong>4.5K</strong><span>FINISH SEASONS</span></div><div><strong>7.8K</strong><span>ENROLLED</span></div><div><strong>100%</strong><span>JOB PLACEMENT</span></div></div><div className="ht-question"><div><strong>Still have questions?</strong><p>Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.</p></div><a className="ht-button ht-button-dark" href="#contact">Get Started <b>↗</b></a></div></div></div></div></section>

      <section className="home-two-offer"><div className="ht-container ht-offer-copy"><div className="ht-eyebrow">WHAT WE OFFER</div><h2>Personalized learning for your ambitions</h2><p>Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut.</p><a className="ht-button ht-button-yellow" href="#courses">Get Course <b>↗</b></a></div></section>

      <section className="clients-two"><div className="ht-container ht-clients"><p>Learn from 350+ leading universities and companies with us</p><div className="ht-client-track">{[0,1].map(copy => <div className="ht-client-set" aria-hidden={copy === 1} key={copy}>{clientLogos.map((logo, i) => <img src={`${files}${logo}`} alt={copy ? '' : `Partner ${i + 1}`} key={logo}/>)}</div>)}</div></div></section>

      <section className="home-two-testimonial"><div className="ht-testimonial-inner"><img className="ht-quote-icon" src={`${files}66cff274c1ce9bc0b1d47e56_Quote-Icons.svg`} alt=""/><div className="ht-testimonial-text"><p>{testimonials[testimonial][0].split('\n').map((line,index)=><span key={index}>{index>0&&<br/>}{line}</span>)}</p><strong>{testimonials[testimonial][1]}</strong><span>{testimonials[testimonial][2]}</span><div className="ht-testimonial-controls"><button aria-label="Previous testimonial" onClick={() => setTestimonial((testimonial + 1) % testimonials.length)}>←</button><button aria-label="Next testimonial" onClick={() => setTestimonial((testimonial + 1) % testimonials.length)}>→</button></div></div></div></section>

      <section className="home-two-blog" id="blog"><div className="ht-container ht-blog-content"><div className="ht-eyebrow ht-dark">EDUCATION BLOG</div><h2>Our news and ideas</h2><p className="ht-blog-description">Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis.</p><div className="ht-blog-grid">{blogPosts.map(([image, category, title, date]) => <a href="#blog" className="ht-blog-card" key={title}><div className="ht-blog-image"><img src={`${courseFiles}${image}`} alt=""/></div><div className="ht-blog-details"><span>{category}</span><h3>{title}</h3><time>{date}</time></div></a>)}</div></div></section>
    </main>

    <footer className="footer-two" id="contact"><div className="ht-container ht-footer-grid"><div className="ht-footer-brand"><a href="/"><img src={`${files}66c6fb8bf82fe9cef5f78d65_Elearna.svg`} alt="Elearna"/></a><p>Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis eget amet ut tristique cras.</p></div><div><h3>Popular courses</h3><a href="#courses">Finance</a><a href="#courses">Management</a><a href="#courses">Design</a><a href="#courses">Web development</a></div><div><h3>Company</h3><a href="#contact">About</a><a href="#courses">Courses</a><a href="#blog">Blog</a><a href="#contact">Contact</a><a href="#contact">License</a><a href="#contact">Pricing</a></div><div><h3>CMS</h3><a href="#courses">Course details</a><a href="#contact">Instructor details</a><a href="#blog">Blog details</a></div><div><h3>Utility pages</h3><a href="#contact">Style guide</a><a href="#contact">Password protected</a><a href="#contact">404</a></div></div><div className="ht-container ht-copyright"><span>DESIGN BY <b>RADIANT TEMPLATES</b></span><span>POWERED BY <b>WEBFLOW</b></span></div></footer>
  </div>
}

export default HomeTwo
