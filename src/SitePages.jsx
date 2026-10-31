import { useEffect, useState } from 'react'
import CourseMegaMenu from './CourseMegaMenu.jsx'
import PageMegaMenu from './PageMegaMenu.jsx'
import NavDropdown from './NavDropdown.jsx'
import './about-one-reference.css'
import './about-two-reference.css'
import './site-extra.css'
import './pricing-faq-reference.css'

const A = '/assets/'
const logo = `${A}66c6fb8bf82fe9cef5f78d65_Elearna.svg`
const checks = ['Access to 10+ top courses', 'Certification prep', 'Customizable content', 'AI-powered coding exercises']
const faqGroups = {
  'Enrollment and registration': ['How do I enroll in an online course?', 'What are the benefits of online learning?', 'Are there any prerequisites for enrolling in online courses?', 'What should I do if I forget my password?', 'Can I enroll in multiple courses at once?'],
  'Technical requirements': ['What equipment do I need to take a course?', 'Which browsers are supported?', 'Can I access courses on my mobile device?'],
  'Assessments and grading': ['How are courses graded?', 'Can I retake a quiz or assessment?', 'How do I track my progress?'],
  'Communication and support': ['How can I contact my instructor?', 'Where can I get technical support?'],
  'Certificates and degrees': ['Will I receive a certificate after completion?', 'How do I download my certificate?'],
}
const team = [
  ['Leslie Upton', '66e54e091763e997592e23aa_Team-Member-2.webp'], ['Darnell Kuphal', '66e54dfe163cc2b616b99dd3_Team-Member-3.webp'],
  ['Steven Roob', '66e54dddec07c3fa3f20027a_Team-Member-4.webp'], ['Wanda Abshire', '66e54da5dd0e5c0326754533_Team-Member-5.webp'],
  ['Lee Schmitt', '66e54d38f0ccaa6615e57338_Team-Member.webp'], ['Jasmine Konopelski', '66e54d1d831de420da7dd70f_Team-Member-6.webp'],
  ['Tonya Flatley', '66e54cf958de957ca8c9be63_Team-Member-7.webp'], ['Colin Fay', '66e54cd0f0ccaa6615e5101f_Team-Member-8.webp'],
]
const events = [
  ['4', 'OCT', 'NEW YORK, USA', '9:00 AM - 7:00 PM', 'Leadership strategies for higher education institutions', '66e3fd546621c8e4562b7472_Event-Image.webp'],
  ['18', 'OCT', 'KANSAS CITY, USA', '10:00 AM - 3:00 PM', 'Professional development for online educators and trainers', '66e3fd84d5ee3e9e2dc6737c_Event-Image-3.webp'],
  ['20', 'OCT', 'DETROIT, USA', '10:00 AM - 5:00 PM', 'Navigating the future of online education platforms', '66e3fea59a7a20a9116a4089_Event-Image-4.webp'],
  ['25', 'OCT', 'CHICAGO, USA', '9:00 AM - 7:00 PM', 'Best practices for virtual classroom management', '66e3fef7b390a845ab7ed21b_Event-Image-2.webp'],
  ['6', 'NOV', 'AUSTIN, USA', '10:00 AM - 5:00 PM', 'The impact of emotional intelligence on student success', '66e3fd456d37a4f19469ab68_Event-Image-7.webp'],
  ['22', 'NOV', 'PHOENIX, USA', '9:00 AM - 3:00 PM', 'Innovative teaching strategies for modern classrooms', '66e40042a1bb76d626e145ba_Event-Image-5.webp'],
]
const jobs = [
  ['Software development instructor', '50 POSTS AVAILABLE', '$23K - $35K', '2 years'],
  ['Machine learning educator', '35 POSTS AVAILABLE', '$20K - $35K', '2 years'],
  ['Blockchain Technology Instructor', '47 POSTS AVAILABLE', '$26K - $40K', '3 years'],
  ['Digital Design and UX Instructor', '50 POSTS AVAILABLE', '$23K - $35K', '2 years'],
]
const blogPosts = [
  ['Career','Improve knowledge retention with visual learning','October 4, 2024','Nina Leffler','66ff7196253a4813606a5f52_Blog-Small-Thumbnail-12.webp','improve-knowledge-retention-with-visual-learning'],
  ['Development','Master online learning with proven strategies','October 4, 2024','Samantha Dicki','66ff6e0a6f9b375fbca970fe_Blog-Small-Thumbnail-11.webp','master-online-learning-with-proven-strategies'],
  ['Teaching','How to enhance your learning experience today','October 3, 2024','Edwin Waters','66ff6a72dd07492f0cbb0a6d_Blog-Small-Thumbnail-10.webp','how-to-enhance-your-learning-experience-today'],
  ['Career','The evolution of teaching tools in the 21st century','September 17, 2024','Edward Braun','66e93b2410f6e96cbbc70c8d_Blog-Small-Thumbnail.webp','the-evolution-of-teaching-tools-in-the-21st-century'],
  ['Development','The role of parental involvement in academic achievement','September 16, 2024','Jesse Johnson','66e93b734e839a98823ff445_Blog-Small-Thumbnail-3.webp','the-role-of-parental-involvement-in-academic-achievement'],
  ['Teaching','The role of technology in modern classrooms','September 14, 2024','Samantha Dicki','66e93bb940c86a7d79f1e185_Blog-Small-Thumbnail-8.webp','the-role-of-technology-in-modern-classrooms'],
  ['Career','How globalization is shaping curriculum development','September 13, 2024','Edwin Waters','66e93bf4c8aeb4955eb8be4c_Blog-Small-Thumbnail-2.webp','how-globalization-is-shaping-curriculum-development'],
  ['Development','How personalized learning is changing education','September 12, 2024','Gerald Nienow','66e93c5403c2878a6a504f80_Blog-Small-Thumbnail-7.webp','how-personalized-learning-is-changing-education'],
  ['Career','Empowering teachers with continuous professional development','September 11, 2024','Nina Leffler','66e93c6c4ffe823e68be9c67_Blog-Small-Thumbnail-6.webp','empowering-teachers-with-continuous-professional-development'],
  ['Teaching','Advances in educational technology and online learning','September 2, 2024','Samantha Dicki','66e93c8560cf638d71097d98_Blog-Small-Thumbnail-4.webp','advances-in-educational-technology-and-online-learning'],
  ['Career','Exploring the benefits of project-based learning','September 2, 2024','Edward Braun','66e93c9a40c86a7d79f2a22b_Blog-Small-Thumbnail-9.webp','exploring-the-benefits-of-project-based-learning'],
  ['Development','Promoting inclusivity and diversity in education','August 29, 2024','Jesse Johnson','66e94a24c519df88d828f365_Blog-Small-Thumbnail-5.webp','promoting-inclusivity-and-diversity-in-education'],
]

function SiteHeader() {
  const [open,setOpen]=useState(false)
  return <header className="site-header site-page-header"><div className="nav-wrap">
    <a href="/" className="brand"><img src={logo} alt="Elearna"/></a>
    <nav className={open?'nav-links is-open':'nav-links'}><div className="nav-home-dropdown"><a href="/home-one">Home <span>⌄</span></a><div className="nav-home-menu"><a href="/home-one">Home One</a><a href="/home-two">Home Two</a><a href="/home-three">Home Three</a></div></div><CourseMegaMenu/><PageMegaMenu/><NavDropdown label="Blog" items={ [['Blog One','/blog-one'],['Blog Two','/blog-two'],['Blog Three','/blog-three']] }/><NavDropdown label="Contact" items={ [['Contact One','/contact-one'],['Contact Two','/contact-two'],['Contact Three','/contact-three']] }/></nav>
    <div className="nav-actions"><a className="cart" href="/course-one"><img src={`${A}66c6fb8ba5e099697cc76c17_Cart.svg`} alt="Cart"/><b>0</b></a><a href="/contact-one">Login</a><i/><a href="/contact-one">Register</a></div>
    <button className="site-page-menu-button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">☰</button>
  </div></header>
}

function Footer({ dark = true }) {
  return <footer className={`site-page-footer ${dark ? 'dark' : ''}`}><div className="site-page-footer-grid">
    <div><img src={logo} alt="Elearna"/><p>Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis eget amet ut tristique cras.</p></div>
    <div><strong>Popular courses</strong><a href="/category/finance">Finance</a><a href="/category/management">Management</a><a href="/category/design">Design</a><a href="/category/development">Web development</a></div>
    <div><strong>Company</strong><a href="/about-one">About</a><a href="/course-one">Courses</a><a href="/career">Career</a><a href="/events">Events</a><a href="/team">Team</a></div>
    <div><strong>Resources</strong><a href="/faq">FAQ</a><a href="/pricing-one">Pricing</a><a href="/blog-one">Blog</a><a href="/contact-one">Contact</a></div>
  </div><div className="site-page-copyright">DESIGN BY <b>RADIANT TEMPLATES</b><span>POWERED BY <b>WEBFLOW</b></span></div></footer>
}

function AboutOneFooter() {
  return <footer className="about-one-footer"><div className="about-one-footer-grid">
    <div className="about-one-footer-brand"><img src={logo} alt="Elearna"/><p>Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis eget amet ut tristique cras.</p></div>
    <div><strong>Popular courses</strong><a href="/category/finance">Finance</a><a href="/category/management">Management</a><a href="/category/design">Design</a><a href="/category/development">Web development</a></div>
     <div><strong>Company</strong><a href="/about-one">About</a><a href="/course-one">Courses</a><a href="/blog-one">Blog</a><a href="/contact-one">Contact</a><a href="/information/license">License</a><a href="/pricing-one">Pricing</a></div>
     <div><strong>CMS</strong><a href="/understanding-corporate-finance-and-investments/course-details">Course details</a><a href="/team-members/lee-schmitt">Instructor details</a><a href="/blog-posts/the-evolution-of-teaching-tools-in-the-21st-century">Blog details</a></div>
    <div className="about-one-footer-contact"><strong>Need help?</strong><span>Call us</span><a href="tel:+18881234567">(888) 123 4567</a><span>Need support?</span><a href="mailto:info@example.com">info@example.com</a></div>
  </div><div className="about-one-footer-bottom"><span>DESIGN BY <b>RADIANT TEMPLATES</b></span><span>POWERED BY <b>WEBFLOW</b></span></div></footer>
}

function ClientsStrip() {
  const clients=['66c6fb8bca715a603abbc84f_Clients-Logo.svg','66c6fb8b87b34b4188395ff2_Clients-Logo-4.svg','66c6fb8beb3991b3db5cd5ff_Clients-Logo-6.svg','66c6fb8bb6896643f3baa632_Clients-Logo-2.svg','66c6fb8bf82fe9cef5f78d2a_Clients-Logo-3.svg','66c6fb8bf99901dda5c25e7e_Clients-Logo-5.svg']
  return <section className="site-page-clients"><p>Learn from 350+ leading universities and companies with us</p><div>{clients.map(x=><img src={`${A}${x}`} key={x} alt="Partner institution"/>)}</div></section>
}

function PageHero({ eyebrow, title, description = '', variant = '' }) {
  return <section className={`site-page-hero ${variant}`}><div className="site-page-wrap">{eyebrow&&<span className="site-page-eyebrow">{eyebrow}</span>}<h1>{title}</h1>{description&&<p>{description}</p>}</div></section>
}

function PriceCards({ variant = 'one' }) {
  const [yearly, setYearly] = useState(false)
  const plans = variant === 'two'
    ? [['Starter Plan', '$199', '$149', '$129', 'Access to 30+ top courses'], ['Premium Plan', '$399', '$349', '$329', 'Access to 50+ top courses']]
    : [['Basic', '$199', '$139', '', 'Access to 10+ top courses'], ['Standard', '$299', '$279', '', 'Access to 30+ top courses'], ['Premium', '$699', '$659', '', 'Access to 50+ top courses']]
  return <div className={`price-card-set ${variant === 'two' ? 'two-plans' : ''}`}>
    <div className="price-toggle"><button className={!yearly?'active':''} onClick={()=>setYearly(false)}>Monthly</button><button className={yearly?'active':''} onClick={()=>setYearly(true)}>Yearly</button>{variant==='two'&&<span>Save 20%</span>}</div>
    <div className="price-cards">{plans.map(([name,monthly,annual,yearlyDiscount,access],i)=><article className={`price-card${name.toLowerCase().includes('premium')?' premium':''}`} key={name}>{variant==='two'&&<img className="price-plan-icon" src={`${A}${i===0?'66e14486380835542ec4e9d1_Gift-Image.svg':'66e14486876c02e130b6a4b3_Crown.svg'}`} alt=""/>}<h2>{name}</h2><p>Lorem ipsum dolor sit amet consectetur erat ipsum non.</p><div className={`price-amount${variant==='two'?' discounted':''}`}>{variant==='two'&&<del>{yearly?annual:monthly}</del>}{variant==='two'?(yearly?yearlyDiscount:annual):(yearly?annual:monthly)}<small>{variant==='two'?'/Monthly':'/month'}</small></div>{variant==='one'&&<div className="annual-price">{yearly?monthly:annual}/month</div>}<ul>{[access,...checks.slice(1),...(i===plans.length-1?['Analytics and adoption reports']:[])].map(x=><li key={x}><img src={`${A}66e126a8745c48b34dd303f6_Pricing-Check.svg`} alt=""/>{x}</li>)}</ul><a href="/contact-one" className="site-page-button">Subscribe This Plan <b>↗</b></a></article>)}</div>
  </div>
}

function FAQBlock({ full = false, style = '' }) {
  const [group, setGroup] = useState('Enrollment and registration')
  const [open, setOpen] = useState(0)
  const questions = faqGroups[group]
  if (style === 'pricing-two') {
    const pricingQuestions = [
      'How do I enroll in an online course?',
      'Are there any prerequisites for enrolling in online courses?',
      'What are the technical requirements for online learning?',
      'What if I encounter technical difficulties?',
      'Are there live classes, or can I learn at my own pace?',
    ]
    return <section className="site-page-faq full-faq pricing-two-faq"><div className="pricing-two-faq-panel"><div className="pricing-two-faq-inner"><div className="pricing-two-faq-heading"><img src={`${A}66de9b24cdbecf88f8d1b2da_FAQ-Icons.svg`} alt="Frequently asked questions"/><div><span className="site-page-eyebrow">CONTACT US</span><h2>Frequently asked questions</h2></div></div><div className="pricing-two-faq-list">{pricingQuestions.map((q,i)=><article className={open===i?'opened':''} key={q}><button onClick={()=>setOpen(open===i?-1:i)} aria-expanded={open===i}>{q}<b>{open===i?'−':'+'}</b></button>{open===i&&<p>Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor sollicitudin viverra enim.</p>}</article>)}</div></div></div></section>
  }
  return <section className={`site-page-faq ${full?'full-faq':''}`}><div className="site-page-wrap"><div className="site-page-eyebrow">CONTACT US</div><h2>Frequently asked questions</h2><div className="faq-layout"><div className="faq-groups">{Object.keys(faqGroups).map(x=><button key={x} className={group===x?'active':''} onClick={()=>{setGroup(x);setOpen(0)}}>{x}<span>↗</span></button>)}</div><div className="faq-questions">{questions.map((q,i)=><article className={open===i?'opened':''} key={q}><button onClick={()=>setOpen(open===i?-1:i)}>{q}<b>{open===i?'−':'+'}</b></button>{open===i&&<p>Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit nam id sagittis consequat. Learn more through the course resources, help center, or by contacting our support team.</p>}</article>)}</div></div></div></section>
}

function CallToAction({ style = 'three' }) {
  const career = style === 'career'
  return <section className={`site-page-cta ${style}`}><div><h2>Are you ready to start your journey?</h2><a href={career?'/course-one':'/course-two'}>{career?'Browse Courses':'Browse Courses'} {!career&&<b>↗</b>}</a><a href="/career">{career?'Became An Instructor':'Become An Instructor'} {!career&&<b>↗</b>}</a></div></section>
}

function AboutPage({ two = false }) {
  if (!two) return <>
    <PageHero eyebrow="ABOUT US" title="You’re sincerely determined to grow" variant="about-one-hero"/>
    <section className="about-one-story">
      <div className="about-one-story-visual"><img className="about-one-story-photo" src={`${A}66d9685910e51570ad70d12e_Employ-Images.webp`} alt="Elearna students learning together"/><img className="about-one-story-trusted" src={`${A}66f640175a11d2c4db6078d6_Trusted-By-Image-In-White.avif`} alt="Trusted by learners"/></div>
      <div className="about-one-story-copy"><span className="site-page-eyebrow">OUR STORY</span><h2>Limitless learning and get more possibilities</h2><p>Lorem ipsum dolor sit amet consectetur. Sed ac non suspendisse in maecenas scelerisque imperdiet nec. Pellentesque mauris amet ligula eget malesuada ullamcorper nibh. Etiam suspendisse pretium est elementum elementum rhoncus.</p>
        <div className="about-one-story-stats">{[['150+','FINISH SEASONS'],['25K','ENROLLED'],['100%','JOB PLACEMENT']].map(([n,label])=><div key={label}><strong>{n}</strong><span>{label}</span></div>)}</div>
      </div>
    </section>
    <section className="about-one-benefits">{[['66d9685900d6e3c06862ddb9_Circle-Icons-White.svg','150+ online courses'],['66d96859c968783a7b05acb2_Pen-Icons-White.svg','Personalized learning'],['66d96859eeb82869ca4d5d1e_Update-White-Icons.svg','Lifetime update']].map(([img,title])=><article key={title}><img src={`${A}${img}`} alt=""/><div><h3>{title}</h3><p>Lorem ipsum dolor sit amet</p></div></article>)}</section>
    <section className="about-one-success"><span className="site-page-eyebrow">WHY WE ARE</span><h2>We believe in our good education and development system and we know how to work together to reach greater success</h2></section>
    <section className="about-one-potential">{[['01','Flexibility and convenience'],['02','Course accessibility'],['03','Cost-effectiveness'],['04','Personalized learning']].map(([n,title])=><article key={n}><b>{n}</b><h3>{title}</h3><p>Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.</p><div className="about-one-potential-action"><a href="/course-one">Get Started</a></div></article>)}</section>
    <section className="about-one-offer"><div className="about-one-offer-visual"><div className="about-one-offer-video"><video autoPlay loop muted playsInline poster={`${A}66c86567624ca9dec83f55cc_Home-One-Video-poster-00001.jpg`}><source src={`${A}66c86567624ca9dec83f55cc_Home-One-Video-transcode.mp4`} type="video/mp4"/></video></div><div className="about-one-offer-photo"><img src={`${A}66d96859eb61b636c95fdb98_Girl-Image-Using-Laptop.webp`} alt="Student learning online"/></div></div><div className="about-one-offer-copy"><span className="site-page-eyebrow">WHAT WE OFFER</span><h2>Personalized learning for your ambitions</h2><p>Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut.</p><ul>{['Skill-based instruction','Analytics and insights','Global certification','Customizable courses'].map(x=><li key={x}>{x}</li>)}</ul><div className="about-one-help"><div><strong>Still have questions?</strong><p>Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.</p></div><a className="site-page-button" href="/contact-one">Get Started</a></div></div></section>
    <ClientsStrip/>
    <section className="about-one-instructor"><div><h2>Became an instructor</h2><p>Lorem ipsum dolor sit amet consectetur. Sed ultricies fames scelerisque urna quis semper amet. Nisl tincidunt tortor nullam est nec commodo orci dictum in. Lorem consectetur donec purus sagittis.</p><a className="site-page-button" href="/career">Start Teaching Today <b>↗</b></a></div><div className="about-one-instructor-image"><img src={`${A}66d98189c5a2b384d11ea977_Girl-With-Logo.webp`} alt="Instructor"/><img src={`${A}66d98188f6fc5249944bae7c_Review-Popup.webp`} alt="Student review"/></div></section>
    <section className="about-one-testimonial"><img src={`${A}66cff274c1ce9bc0b1d47e56_Quote-Icons.svg`} alt=""/><blockquote>“Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis. Morbi placerat eleifend malesuada sed semper quis.”</blockquote><strong>Linda Grady</strong><span>CO-ASSISTANT MANAGER</span><div className="about-one-dots"><b/><i/></div></section>
    <section className="about-one-cta"><div className="about-one-cta-main"><h2>Are you ready to start your journey?</h2><div><a href="/course-one">Browse Courses <b>↗</b></a><a href="/career">Became An Instructor <b>↗</b></a></div></div></section>
  </>
  return <>
    <PageHero eyebrow="ABOUT US" title="You’re sincerely determined to grow" variant="about-two-hero"/>
    <section className="about-story two-story site-page-wrap"><div className="about-two-story-copy"><span className="site-page-eyebrow">OUR STORY</span><h2>Limitless learning and get more possibilities</h2><p>Lorem ipsum dolor sit amet consectetur. Sed ac non suspendisse in maecenas scelerisque imperdiet nec. Pellentesque mauris amet ligula eget malesuada ullamcorper nibh. Etiam suspendisse pretium est elementum elementum rhoncus.</p><p>Lorem ipsum dolor sit amet consectetur. Sed ac non suspendisse in maecenas scelerisque imperdiet nec. Pellentesque mauris amet ligula eget malesuada ullamcorper nibh.</p></div><div className="about-two-story-photos"><div className="year-badge"><span>YEAR OF EXPERIANCE</span><strong>25</strong></div><img src={`${A}66daee82ea8dfe862f20b4e4_Office-Image-2.webp`} alt="Elearna office"/><img src={`${A}66daee819397693612f2103a_Girl-Image-2.webp`} alt="Elearna student"/></div></section>
    <section className="about-philosophy site-page-wrap"><span className="site-page-eyebrow">OUR PHILOSOPHY</span><h2>Get instant access courses</h2><div className="about-two-course-categories">{[['Web design','66da9a05aa9e740b88ae7a79_Category-Cards-Four-Image.webp','design'],['Web development','66da9a063bb8f3786af79ac7_Category-Cards-Four-Image-2.webp','development'],['Management','66da9a0513cc43ec3ac57975_Category-Cards-Four-Image-3.webp','management'],['Finance','66da9a0676bc7a4c6602a446_Category-Cards-Four-Image-5.webp','finance']].map(([title,image,slug])=><a className="about-two-category-card" href={`/category/${slug}`} key={title}><span className="about-two-category-background"><span className="about-two-category-label">{title}</span></span><span className="about-two-category-image"><img src={`${A}${image}`} alt={title}/></span><span className="about-two-category-arrow" aria-hidden="true"><img src={`${A}slider-arrow-black.svg`} alt=""/></span></a>)}</div></section>
    <section className="about-quote"><div className="site-page-wrap"><span className="site-page-eyebrow">WHY WE ARE</span><h2>We believe in our good education and development system and we know how to work together to reach greater success</h2></div></section>
    <section className="about-two-potential"><div className="about-two-potential-cards">{[['01','Flexibility and convenience','66cff277582c8617efcf31ab_Potential-Image-3.webp'],['02','Course accessibility','66cff2777e50749c4b90b5dd_Potential-Image-2.webp'],['03','Cost-effectiveness','66cff27628bf055ea8ae89f1_Potential-Image.webp'],['04','Personalized learning','66cff277ceae6c7605edbd6e_Potential-Image-4.webp']].map(([n,title,image])=><article key={n} style={{backgroundImage:`linear-gradient(180deg,transparent 12%,rgba(6,15,17,.92)),url('${import.meta.env.BASE_URL}assets/${image}')`}}><b>{n}</b><h3>{title}</h3><p>Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.</p><a href="/course-one">Get Started　↗</a></article>)}</div></section>
    <ClientsStrip/>
     <section className="about-vision"><div className="site-page-wrap"><div className="about-two-vision-photos"><div className="about-two-vision-main-photo"><img src={`${A}66da9a051cb82fa9e66bb1cf_About-Two-Employe-Image.webp`} alt="Elearna instructor"/><div className="about-two-vision-stat"><strong>100%</strong><span>JOB PLACEMENT</span></div></div><div className="about-two-vision-secondary-photo"><div className="about-two-vision-stat dark"><strong>15.4K</strong><span>FINISH SEASONS</span></div><img src={`${A}66da9a0522aa9880e21a6574_About-Two-Employee-Image.webp`} alt="Instructor teaching online"/></div></div><div className="about-two-vision-copy"><span className="site-page-eyebrow">OUR VISION</span><h2>75K+ student joined with us to achieve their goals</h2><p>Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut.</p><ul><li>Lorem ipsum dolor sit amet consectetur id quam mauris mus.</li><li>Lorem ipsum dolor sit amet consectetur id quam mauris mus.</li><li>Lorem ipsum dolor sit amet consectetur id quam mauris mus.</li></ul></div></div></section>
    <section className="about-two-instructor-section"><div className="about-two-instructor"><div className="about-two-instructor-copy"><h2>Became an instructor</h2><p>Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut.</p><a className="site-page-button" href="/career">Start Teaching Today <b>↗</b></a></div><div className="about-two-instructor-photos"><img src={`${A}66d9a76a5c3df7839d6b0e28_Girl-Image-With-Logo-Two.webp`} alt="Instructor"/><img src={`${A}66da8cb1daaf8e000950b81e_Instructor-Image-With-Logo.webp`} alt="Online instructor"/><img src={`${A}66d98188f6fc5249944bae7c_Review-Popup.webp`} alt="Student review"/></div></div></section>
     <section className="about-news site-page-wrap"><span className="site-page-eyebrow">EDUCATION BLOG</span><h2>Our news and ideas</h2><p className="about-two-blog-description">Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis.</p><div>{[['66ff7196253a4813606a5f52_Blog-Small-Thumbnail-12.webp','Career','Improve knowledge retention with visual learning','October 4, 2024'],['66ff6e0a6f9b375fbca970fe_Blog-Small-Thumbnail-11.webp','Development','Master online learning with proven strategies','October 4, 2024'],['66ff6a72dd07492f0cbb0a6d_Blog-Small-Thumbnail-10.webp','Teaching','How to enhance your learning experience today','October 3, 2024']].map(([img,cat,title,date])=><a href="/blog-one" key={title}><img src={`${A}${img}`} alt=""/><span>{cat}</span><h3>{title}</h3><time>{date}</time></a>)}</div></section>
  </>
}

function PricingPage({ variant }) {
  const style = variant === 'pricing-three' ? 'three' : variant === 'pricing-two' ? 'two' : 'one'
  return <>
    <PageHero eyebrow="PRICING" title={variant==='pricing-three'?'Flexible pricing plan for everyone':'Flexible pricing plan for every one'} variant={`pricing-hero ${style}`}/>
    <section className={`pricing-section ${style}`}><div className="site-page-wrap"><PriceCards variant={variant==='pricing-two'?'two':'one'}/></div></section>
    {variant==='pricing-one'&&<><ClientsStrip/><section className="pricing-compare site-page-wrap"><span className="site-page-eyebrow">PRICING COMPARISON</span><h2>Distracted by the readable content of a page when looking at its point of using it</h2><div className="compare-table"><div className="compare-row labels"><b>Features</b><b>Basic plan<br/>$199 / month</b><b>Starter plan<br/>$299 / month</b><b>Platinum plan<br/>$399 / month</b></div>{['Access to 30+ top courses','Certification prep','Customizable content','AI-powered coding exercises','Analytics and adoption reports','24/7 customer support','Instructor Q&A','Skills assessments'].map((x,i)=><div className="compare-row" key={x}><span>{x}</span>{[0,1,2].map(n=><span key={n}>{n===2||i<n+3?'✓':'—'}</span>)}</div>)}</div></section><FAQBlock/><section className="site-page-testimonial"><div className="site-page-wrap"><span>“</span><p>Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis.</p><strong>Linda Grady</strong><small>CO-ASSISTANT MANAGER</small></div></section></>}
    {variant==='pricing-two'&&<FAQBlock style="pricing-two"/>}{variant==='pricing-three'&&<FAQBlock/>}
    {variant==='pricing-two'?<CallToAction style="one"/>:variant==='pricing-three'?<CallToAction/>:null}
  </>
}

function CareerPage() {
  return <>
    <PageHero eyebrow="WE ARE HIRING" title="Begin your journey as an instructor" variant="career-hero"/>
    <section className="career-story site-page-wrap"><div><span className="site-page-eyebrow">WHY WE ARE</span><h2>We help connectivity across the world</h2><p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusm tempor incididunt ut labore et dolore magna.</p><ul><li>✓　Create meaningful impact</li><li>✓　Work with passionate learners</li><li>✓　Grow your career with us</li></ul></div><img src={`${A}66e2828b5c1aa1d3d510763b_Career-Page-Image.webp`} alt="Instructor working"/><img src={`${A}66e2828981ae7c4eabf6c47b_Career-Page-Image-2.webp`} alt="Online classroom"/></section>
    <section className="job-section site-page-wrap"><span className="site-page-eyebrow">JOB OPENING</span><h2>Be a part of our faculty</h2><div>{jobs.map(([name,posts,salary,years])=><article key={name}><div><h3>{name}</h3><span>{posts}</span></div><div className="job-details"><span>4367 Lula Shores, Derekton 48438</span><strong>{salary}</strong></div><p><b>Job Description:</b> Lorem ipsum dolor sit amet consectetur.</p><p><b>Job Type:</b> Full-time, Permanent　 <b>Experience:</b> {years}</p><a href="mailto:careers@example.com?subject=Instructor%20application">Apply Now　↗</a></article>)}</div></section>
     <CallToAction style="career"/>
  </>
}

function EventsPage() {
  return <>
    <PageHero eyebrow="ENJOY WITH" title="Great upcoming events for our institute" variant="events-hero"/>
    <section className="events-section site-page-wrap"><span className="site-page-eyebrow">OUR EVENT</span><h2>Professional online events</h2><p className="events-intro">Lorem ipsum dolor sit amet consectetur. Congue sit pellentesque eu scelerisque urna a porttitor. Massa nec ipsum sed etiam et facilisis bibendum.</p><div>{events.map(([day,month,city,time,title,image])=>{const eventSlug=title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');return <article key={title}><a href={`/events/${eventSlug}`} className="event-photo"><img src={`${A}${image}`} alt=""/><span><b>{day}</b>{month}<small>2024</small></span></a><div className="event-info"><span>{city}　·　{time}</span><h3>{title}</h3><a href={`/events/${eventSlug}`}>See event details　↗</a></div></article>})}</div></section>
    <CallToAction style="one"/>
  </>
}

function TeamPage() {
  return <>
    <PageHero title="Our experts" variant="team-hero"/>
    <section className="team-section"><div className="team-page-container"><div className="team-main"><span className="team-eyebrow">Contact Us</span><h2>Know our expert team agents, they solve your questions</h2><p>Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit nam id</p></div><div className="team-wrapper">{team.map(([name,image])=>{const memberSlug=name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');return <a className="team-card" href={`/team-members/${memberSlug}`} key={name}><div className="team-card-image"><img className="team-member-image" src={`${A}${image}`} alt={`${name}, instructor`}/></div><div className="team-member-names"><strong>{name}</strong><span>instructor</span></div></a>})}</div></div></section>
    <CallToAction style="career"/>
  </>
}

function BlogPage({ variant = 'blog-one', postSlug = '' }) {
  const [page,setPage]=useState(0)
  const selected = blogPosts.find(post=>post[5]===postSlug)||blogPosts[3]
  if(postSlug) return <>
    <article className="extra-article site-page-wrap"><div className="extra-article-heading"><span>{selected[0]}</span><small>{selected[3]}　·　{selected[2]}</small><h1>{selected[1]}</h1></div><img className="extra-article-cover" src={`${A}${selected[4]}`} alt=""/><div className="extra-article-body"><p>Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit.</p><h2>Understanding the changing learning landscape</h2><p>Lorem ipsum dolor sit amet consectetur. Interdum mauris ac ipsum pulvinar tempor tincidunt. Condimentum lacus at augue tortor viverra dui. Turpis sed ut leo dignissim scelerisque. Adipiscing aliquam id aliquam lorem. Tempor ut nullam et amet. Sed nulla blandit tellus tincidunt aliquam odio amet sed interdum.</p><blockquote>Learning is a continuous journey. The right tools and strategies can help every student move forward.</blockquote><h2>Practical ways to keep learners engaged</h2><p>Facilisis eget nullam ultrices elementum in congue id vestibulum. Pellentesque morbi est lobortis eget arcu curabitur. Tortor phasellus non in lacus turpis proin arcu mollis. Amet id nunc at ipsum adipiscing varius lacus tristique ante.</p><a href="/blog-one">← Back to all articles</a></div></article>
    <section className="extra-related site-page-wrap"><h2>Related articles</h2><BlogCards posts={blogPosts.slice(0,3)}/></section>
  </>
  if(variant==='blog-two') return <BlogTwoLayout/>
  if(variant==='blog-three') return <BlogThreeLayout/>
  const items=variant==='blog-one'?blogPosts.slice(page*6,page*6+6):blogPosts
  return <>
     <PageHero eyebrow="NEWS AND JOURNALS" title="Planning to transition to a new career?" variant={`extra-blog-hero ${variant}`}/>
     <section className={`extra-blog-list ${variant}`}><div className="site-page-wrap">{variant==='blog-one'?<BlogCards posts={items} variant="blog-one"/>:<><div className="extra-blog-feature"><a href={`/blog-posts/${blogPosts[0][5]}`}><img src={`${A}${blogPosts[0][4]}`} alt=""/></a><div><span>{blogPosts[0][0]}　·　{blogPosts[0][2]}</span><h2>{blogPosts[0][1]}</h2><p>Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat elementum sit ut. Cras mattis aliquam arcu mauris sagittis fames eu diam vulputate.</p><a href={`/blog-posts/${blogPosts[0][5]}`}>Read Article ↗</a></div></div><BlogCards posts={items.slice(1)} variant={variant}/></>}</div>{variant==='blog-one'&&<nav className="blog-one-pagination" aria-label="Blog pagination">{page===1&&<button className="previous" onClick={()=>{setPage(0);window.scrollTo(0,0)}}>← Previous</button>}<span>{page+1} / 2</span>{page===0&&<button className="next" onClick={()=>{setPage(1);window.scrollTo(0,0)}}>Next <img src={`${A}66c86330828a126c2bb6c4d9_Button-Arrow-Black.png`} alt=""/></button>}</nav>}</section>
      <CallToAction style="career"/>
   </>
}
const blogDescriptions = 'Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat elementum sit ut. Cras mattis aliquam arcu mauris sagittis fames eu diam vulputate.'
const blogPortraits = {
  'improve-knowledge-retention-with-visual-learning':'66ff71ac285b8bcb87417ef6_Blog-Portrait-Thumbnail-13.webp',
  'how-to-enhance-your-learning-experience-today':'66ff6a7612bb5e582719b5d6_Blog-Portrait-Thumbnail-10.webp',
  'the-role-of-technology-in-modern-classrooms':'66e94653ee464e62573e6b7d_Blog-Portrait-Thumbnail-2.webp',
  'how-personalized-learning-is-changing-education':'66e94670c010ad7f6a1391a0_Blog-Portrait-Thumbnail-3.webp',
}
const blogTwoPortraits = {
  'how-to-enhance-your-learning-experience-today':'66ff6a7612bb5e582719b5d6_Blog-Portrait-Thumbnail-10.webp',
  'how-personalized-learning-is-changing-education':'66e94670c010ad7f6a1391a0_Blog-Portrait-Thumbnail-3.webp',
}
const blogThreePortraits = {
  'improve-knowledge-retention-with-visual-learning':'66ff71ac285b8bcb87417ef6_Blog-Portrait-Thumbnail-13.webp',
  'the-role-of-technology-in-modern-classrooms':'66e94653ee464e62573e6b7d_Blog-Portrait-Thumbnail-2.webp',
  'how-personalized-learning-is-changing-education':'66e94670c010ad7f6a1391a0_Blog-Portrait-Thumbnail-3.webp',
}
function blogShortDate(date) {
  const parsed=new Date(date)
  return `${parsed.getDate()}.${parsed.getMonth()+1}.${parsed.getFullYear()}`
}
function BlogMeta({post,featured=false}) {
  return <div className="blog-meta-line"><span>{featured?'10.4.2024':blogShortDate(post[2])}</span><span className="blog-meta-author"><i/>{post[3]}</span></div>
}
function BlogTwoLayout() {
  const [featured,...rest]=blogPosts.slice(0,9)
  const columns=[rest.slice(0,4),rest.slice(4,8)]
  return <>
    <PageHero eyebrow="NEWS AND JOURNALS" title="Planning to transition to a new career?" variant="extra-blog-hero blog-two"/>
    <section className="blog-two-reference"><div className="blog-two-reference-wrap"><div className="blog-two-sticky"><a href={`/blog-posts/${featured[5]}`} className="blog-two-feature-card"><div className="blog-two-feature-image"><img src={`${A}66ff71ac285b8bcb87417ef6_Blog-Portrait-Thumbnail-13.webp`} alt=""/></div><div className="blog-two-feature-text"><BlogMeta post={featured} featured/><h2>{featured[1]}</h2><p>{blogDescriptions}</p></div></a></div><div className="blog-two-columns">{columns.map((column,index)=><div className="blog-two-column" key={index}>{column.map(post=>{const image=blogTwoPortraits[post[5]]||post[4];return <a href={`/blog-posts/${post[5]}`} className="blog-two-article-card" key={post[5]}><div className={`blog-two-article-image${blogTwoPortraits[post[5]]?' portrait':''}`}><img src={`${A}${image}`} alt=""/></div><div className="blog-two-article-text"><BlogMeta post={post}/><h3>{post[1]}</h3></div></a>})}</div>)}</div></div></section>
    <CallToAction style="career"/>
  </>
}
function BlogThreeLayout() {
  const columns=[blogPosts.slice(0,3),blogPosts.slice(3,6),blogPosts.slice(6,9)]
  return <>
    <PageHero eyebrow="NEWS AND JOURNALS" title="Planning to transition to a new career?" variant="extra-blog-hero blog-three"/>
    <section className="blog-three-reference"><div className="blog-three-reference-wrap">{columns.map((column,index)=><div className="blog-three-column" key={index}>{column.map(post=>{const image=blogThreePortraits[post[5]]||post[4];return <a href={`/blog-posts/${post[5]}`} className="blog-three-article-card" key={post[5]}><div className={`blog-three-article-image${blogThreePortraits[post[5]]?' portrait':''}`}><img src={`${A}${image}`} alt=""/></div><div className="blog-three-article-text"><BlogMeta post={post}/><h2>{post[1]}</h2><p>{blogDescriptions}</p></div></a>})}</div>)}</div></section>
    <CallToAction style="career"/>
  </>
}
function BlogCards({posts,variant=''}) {
  if(variant==='blog-one') return <div className="blog-one-cards-wrapper">{posts.map(([category,title,date,,image,slug])=><a href={`/blog-posts/${slug}`} className="blog-one-card" key={slug}><div className="blog-one-card-image"><img src={`${A}${image}`} alt=""/></div><div className="blog-one-card-text"><span>{category}</span><h3>{title}</h3><time>{date}</time></div></a>)}</div>
  return <div className={`extra-blog-grid ${variant}`}>{posts.map(([category,title,date,author,image,slug])=><a href={`/blog-posts/${slug}`} className="extra-blog-card" key={slug}><img src={`${A}${image}`} alt=""/><div><span>{category}　·　{date}</span><h3>{title}</h3><p>Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat elementum sit ut.</p><small>{author}</small></div></a>)}</div>
}

function ContactPage({variant='contact-one'}) {
 if(variant==='contact-three') return <ContactThreePage/>
 if(variant==='contact-one') return <ContactOnePage/>
 if(variant==='contact-two') return <ContactTwoPage/>
 return <>
   <PageHero eyebrow="CONTACT US" title="Contact us" variant={`extra-contact-hero ${variant}`}/>
   <section className={`extra-contact ${variant}`}><div className="site-page-wrap"><div className="extra-contact-intro"><span className="site-page-eyebrow">CONTACT US</span><h2>{variant==='contact-two'?"Get details information about online courses, contact us. we're happy to discuss":"Are you interested in online learning? Contact us"}</h2><p>Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit nam id purus suspendisse. Imperdiet nam lorem tempus in. Tristique nullam risus semper habitant urna nisl nam elit at.</p>{variant==='contact-one'&&<div className="extra-contact-person"><img src={`${A}66cd560b74d8d4d4ed334d02_Testimonial-Author-Image.avif`} alt="Brayden Backham"/><span><b>Brayden Backham</b><small>DIRECTOR</small></span></div>}</div>
   {variant==='contact-one'&&<img className="extra-contact-image" src={`${A}66de9b2474f1094cb7ea1767_Contact-Us-One.webp`} alt="Online student"/>}
   {variant==='contact-two'&&<div className="extra-contact-details">{[['Area location','410 Sandtown, California 94001, USA'],['Contact details','888-123-4567','info@example.com'],['Opening hours','Monday-Friday','10:30a.m-7:00p.m']].map(([title,...details])=><div key={title}><b>{title}</b>{details.map(x=><span key={x}>{x}</span>)}</div>)}</div>}
   <ContactForm/>
   {variant==='contact-two'&&<div className="extra-contact-marquee">{Array.from({length:3},(_,i)=><b key={i}>GET IN TOUCH WITH ME TODAY　↗　</b>)}</div>}
   </div></section>
   {variant!=='contact-three'&&<FAQBlock full/>}{variant!=='contact-three'&&<CallToAction style="one"/>}
 </>
}
function ContactOnePage() {
 return <>
  <section className="contact-one-reference-hero"><div><h1>Contact us</h1></div></section>
  <section className="contact-one-reference-main"><div className="contact-one-reference-wrap">
   <div className="contact-one-reference-copy"><span>CONTACT US</span><h2>Are you interested in online learning? Contact us</h2><p>Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit nam id purus suspendisse. Imperdiet nam lorem tempus in. Tristique nullam risus semper habitant urna nisl nam elit at.</p><div className="contact-one-reference-signature"><img src={`${A}66de9b2588280abadd4e26df_Signature.svg`} alt="Brayden Backham signature"/><b>Brayden Backham</b><small>DIRECTOR</small></div></div>
   <ContactOneForm/>
  </div></section>
  <section className="contact-one-reference-details"><div className="contact-one-reference-wrap"><span>CONTACT DETAILS</span><h2>Find our location</h2><div className="contact-one-detail-items">
   <div><img src={`${A}66de9b23b2f8295c624d2080_Home-Icon.svg`} alt=""/><article><b>Area location</b><p>410 Sandtown, California 94001, USA</p></article></div><i/>
   <div><img src={`${A}66de9b254c2ae5562dd60344_Books-Icon.svg`} alt=""/><article><b>Contact details</b><a href="tel:8881234567">888-123-4567</a><a href="mailto:info@example.com">info@example.com</a></article></div><i/>
   <div><img src={`${A}66de9b2343d23f2fb8c7598d_Clock-Icons.svg`} alt=""/><article><b>Opening hours</b><p>Monday-Friday</p><p>10:30a.m-7:00p.m</p></article></div>
  </div></div></section>
  <ContactOneFaq/>
  <CallToAction style="one"/>
 </>
}
function ContactOneForm() {
 const [sent,setSent]=useState(false)
 return <div className="contact-one-reference-form"><form onSubmit={e=>{e.preventDefault();setSent(true)}}><h2>Fill out for contact</h2><p>Lorem ipsum dolor sit amet consectetur libero donec.</p><input required placeholder="Your name*"/><input type="email" required placeholder="Your email*"/><input placeholder="Subject"/><textarea required placeholder="Your message*"/><label><input type="checkbox"/>Save information for the next time comment.</label><button>{sent?'Message sent ✓':'Send message'}</button>{sent&&<span role="status">Thank you. Your message has been received.</span>}</form></div>
}
function ContactOneFaq({className='contact-one-reference-faq'}) {
 const [open,setOpen]=useState(-1)
 const questions=['How do I enroll in an online course?','Are there any prerequisites for enrolling in online courses?','What are the technical requirements for online learning?','What if I encounter technical difficulties?','Are there live classes, or can I learn at my own pace?']
 return <section className={className}><div className="contact-one-reference-faq-inner"><div className="contact-one-reference-faq-heading"><img src={`${A}66de9b24cdbecf88f8d1b2da_FAQ-Icons.svg`} alt=""/><div><span>CONTACT US</span><h2>Frequently asked questions</h2></div></div><div className="contact-one-reference-questions">{questions.map((question,index)=><article className={open===index?'opened':''} key={question}><button aria-expanded={open===index} onClick={()=>setOpen(open===index?-1:index)}>{question}<i>{open===index?'−':'+'}</i></button>{open===index&&<p>Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.</p>}</article>)}</div></div></section>
}
function ContactTwoPage() {
 return <>
  <section className="contact-two-reference-hero"><div><h1>Contact us</h1></div></section>
  <section className="contact-two-reference-details"><div className="contact-one-reference-wrap"><span>CONTACT US</span><h2>Get details information about online courses, contact us. we're happy to discuss</h2><p>Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit nam id purus suspendisse. Imperdiet nam lorem tempus in.</p><div className="contact-one-detail-items">
   <div><img src={`${A}66de9b23b2f8295c624d2080_Home-Icon.svg`} alt=""/><article><b>Area location</b><p>410 Sandtown, California 94001, USA</p></article></div><i/>
   <div><img src={`${A}66de9b254c2ae5562dd60344_Books-Icon.svg`} alt=""/><article><b>Contact details</b><a href="tel:8881234567">888-123-4567</a><a href="mailto:info@example.com">info@example.com</a></article></div><i/>
   <div><img src={`${A}66de9b2343d23f2fb8c7598d_Clock-Icons.svg`} alt=""/><article><b>Opening hours</b><p>Monday-Friday</p><p>10:30a.m-7:00p.m</p></article></div>
  </div></div></section>
  <section className="contact-two-reference-marquee"><div>{Array.from({length:3},(_,i)=><b key={i}>GET IN TOUCH WITH ME TODAY <i>↗</i></b>)}</div></section>
  <section className="contact-two-reference-form"><div className="contact-two-reference-form-card"><ContactTwoForm/></div></section>
  <ContactOneFaq className="contact-two-reference-faq"/>
  <CallToAction style="three"/>
 </>
}
function ContactTwoForm() {
 const [sent,setSent]=useState(false)
 return <form onSubmit={e=>{e.preventDefault();setSent(true)}}><h2>Fill out for contact</h2><p>Lorem ipsum dolor sit amet consectetur libero donec.</p><input required placeholder="Your name*"/><input type="email" required placeholder="Your email*"/><input required placeholder="Subject"/><textarea placeholder="Your message*"/><label><input type="checkbox"/>Save information for the next time comment.</label><button>{sent?'Message sent ✓':'Send message'}</button>{sent&&<span role="status">Thank you! Your submission has been received.</span>}</form>
}
function ContactThreePage() {
 const [open,setOpen]=useState(false),[sent,setSent]=useState(false)
 return <div className="contact-three-reference-page"><section className="contact-three-reference-main"><div className="contact-three-reference-content"><div className="contact-three-reference-title">Contact</div><p>Lorem ipsum dolor sit amet consectetur. Est cras viverra pharetra tellus pulvinar amet aliquam. Vestibulum hac tincidunt.</p><div className="contact-three-reference-links"><a href="mailto:info@example.com">info@example.com</a><a href="tel:8881234567">(888) 123 4567</a></div></div><button className="contact-three-reference-open" aria-label={open?'Close contact form':'Open contact form'} aria-expanded={open} onClick={()=>setOpen(!open)}><img src={`${A}66e017c693d2b070536a9291_Icons.svg`} alt=""/></button>{open&&<div className="contact-three-reference-popup"><div className="contact-three-reference-popup-title"><b>Contact information</b><button aria-label="Close contact form" onClick={()=>setOpen(false)}>×</button></div><form onSubmit={e=>{e.preventDefault();setSent(true)}}><input required placeholder="Your name"/><input type="email" required placeholder="Email"/><input type="tel" required placeholder="Phone"/><input required placeholder="Enquiry type"/><textarea placeholder="Your message"/><button>{sent?'Sent ✓':'Send message'}</button>{sent&&<span role="status">Thank you! Your submission has been received.</span>}</form></div>}</section><section className="contact-three-reference-footer"><div><nav><a href="/information/style-guide">Style guide</a><a href="/401">Password protected</a><a href="/404">404</a><a href="/information/license">License</a></nav><p>Design by <a href="https://www.radianttemplates.com">Radiant Templates</a>　 Powered by <a href="https://webflow.com">Webflow</a></p></div></section></div>
}
function ContactForm(){const [sent,setSent]=useState(false);return <form className="extra-contact-form" onSubmit={e=>{e.preventDefault();setSent(true)}}><h2>Fill out for contact</h2><p>Lorem ipsum dolor sit amet consectetur libero donec.</p><div className="extra-form-fields"><input required placeholder="Your name"/><input type="email" required placeholder="Email address"/><input placeholder="Phone number"/><select defaultValue="" required><option value="" disabled>Choose a subject</option><option>Course information</option><option>Technical support</option><option>Other</option></select><textarea required placeholder="Write your message"/></div><label><input type="checkbox"/> Save information for the next time comment.</label><button className="site-page-button">{sent?'Message sent ✓':'Send Message　↗'}</button>{sent&&<span className="extra-form-success" role="status">Thank you. Your message has been received.</span>}</form>}

function CmsArticle({type,slug=''}) {
 const isEvent=type==='event'; const event=events.find(row=>row[4].toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')===slug)||events[2]; const person=team[4]; const course=['Building single page applications with angular','Development','66eb9dfb3e87f8984b5a15b6_Course-Small-Image.webp'];
 if(type==='team')return <><section className="extra-profile site-page-wrap"><img src={`${A}${person[1]}`} alt={person[0]}/><div><h1>Professional training with {person[0]}</h1><p>Lorem ipsum dolor sit amet consectetur. Scelerisque cursus eget aliquet vel elit. Suspendisse odio augue ultrices sed adipiscing placerat vel consectetur.</p><h3>Specialist in</h3><div className="extra-tags">{['Branding Design','Web Development','Logo design','UI/UX DESIGN'].map(x=><span key={x}>{x}</span>)}</div></div></section><section className="extra-profile-copy"><div className="site-page-wrap"><span className="site-page-eyebrow">ABOUT INSTRUCTOR</span><h2>Meet your instructor</h2><p>Lorem ipsum dolor sit amet consectetur. Cras suscipit habitant nisi aliquam tincidunt eget volutpat urna netus est quis.</p><div className="extra-profile-stats"><b>84%<small>Success ratio</small></b><b>95%<small>Student satisfaction</small></b></div><h2>Instructor of course</h2><a href="/building-single-page-applications-with-angular/course-details">{course[0]}　·　Course Details ↗</a></div></section></>
 return <><PageHero eyebrow={isEvent?'EVENT DETAILS':blogPosts[3][0].toUpperCase()} title={isEvent?event[4]:blogPosts[3][1]} variant="extra-detail-hero"/><article className="extra-article site-page-wrap"><div className="extra-detail-meta">{isEvent?`${event[2]}　·　${event[3]}　·　October 20, 2024`:`${blogPosts[3][3]}　·　${blogPosts[3][2]}`}</div><img className="extra-article-cover" src={`${A}${isEvent?event[5]:blogPosts[3][4]}`} alt=""/><div className="extra-article-body"><h2>{isEvent?'Event details':'Article details'}</h2><p>Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit. Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada.</p><p>Lorem ipsum dolor sit amet consectetur. Interdum mauris ac ipsum pulvinar tempor tincidunt. Condimentum lacus at augue tortor viverra dui. Turpis sed ut leo dignissim scelerisque. Adipiscing aliquam id aliquam lorem. Tempor ut nullam et amet. Sed nulla blandit tellus tincidunt aliquam odio amet sed interdum.</p><h2>{isEvent?'Event content':'What you will learn'}</h2><p>Facilisis eget nullam ultrices elementum in congue id vestibulum. Pellentesque morbi est lobortis eget arcu curabitur.</p><a href={isEvent?'/events':'/blog-one'}>← Back to {isEvent?'events':'articles'}</a></div></article></>
}

function UtilityPage({slug}) {
 const title=slug==='404'?'Page not found':slug==='401'?'Password protected':slug==='log-in'?'Log in':slug==='sign-up'?'Create your account':slug==='reset-password'?'Reset your password':slug==='checkout'?'Checkout':slug==='unlock-access'?'Unlock access':slug.includes('license')?'Licenses and attributions':slug.includes('style-guide')?'Style guide':slug==='customize-template'?'Customize this template':'Access required'
 if(slug==='log-in'||slug==='sign-up') return <AuthPage signup={slug==='sign-up'}/>
 return <main className={`extra-utility ${slug==='checkout'?'checkout-utility':''}`}><span className="site-page-eyebrow">ELEARNА</span><h1>{title}</h1>{slug==='404'?<><p>The page you’re looking for doesn’t exist or has moved.</p><a className="site-page-button" href="/">Back to home　↗</a></>:slug==='information/style-guide'||slug==='information/license'?<><p>Explore the typography, colors, buttons, and components used throughout Elearna.</p><div className="extra-style-swatches"><i/><i/><i/><i/></div><a href="/">Return home</a></>:slug==='checkout'?<form className="extra-checkout-form" onSubmit={e=>{e.preventDefault();alert('Checkout details saved.')}}><div><h2>Contact information</h2><input type="email" placeholder="Email address" required/><h2>Billing address</h2><input placeholder="Full name" required/><input placeholder="Street address" required/><div><input placeholder="City" required/><input placeholder="ZIP / Postal code" required/></div><input placeholder="Country" required/><h2>Payment details</h2><input placeholder="Card number" inputMode="numeric" required/><button className="site-page-button">Complete order</button></div><aside><h2>Your order</h2><p>Online course access <strong>$59.00</strong></p><hr/><p>Total <strong>$59.00</strong></p></aside></form>:<form onSubmit={e=>{e.preventDefault();alert('Thanks! Your information has been submitted.')}}>{slug==='401'&&<p>This page is password protected. Enter the password to continue.</p>}{slug!=='401'&&slug!=='unlock-access'&&slug!=='reset-password'&&<input type="text" placeholder="Your name" required/>}<input type="email" placeholder="Email address" required/>{slug!=='reset-password'&&<input type="password" placeholder="Password" required/>}<button className="site-page-button">{title}　↗</button>{slug==='log-in'&&<a href="/reset-password">Forgot password?</a>}{slug==='sign-up'&&<a href="/log-in">Already have an account? Log in</a>}</form>}</main>
}
function AuthPage({signup=false}) {
 const [showPassword,setShowPassword]=useState(false),[submitted,setSubmitted]=useState(false)
 return <section className={`auth-reference-page${signup?' signup':''}`}><div className="auth-reference-content"><header><h1>{signup?'Sign up':'Login'}</h1><p>More then 50k students join with us!</p></header><form className="auth-reference-card" onSubmit={e=>{e.preventDefault();setSubmitted(true)}}>
  <label className="auth-reference-field"><span aria-hidden="true">✉</span><input type="email" placeholder="Enter email address" aria-label="Enter email address" required/></label>
  {signup&&<label className="auth-reference-field"><span aria-hidden="true">✉</span><input type="text" placeholder="Name" aria-label="Name" required/></label>}
  <label className="auth-reference-field password"><span aria-hidden="true">♙</span><input type={showPassword?'text':'password'} placeholder="Password" aria-label="Password" required/><button type="button" aria-label={showPassword?'Hide password':'Show password'} onClick={()=>setShowPassword(!showPassword)}>◉</button></label>
  {signup&&<div className="auth-reference-consents"><label><input type="checkbox" required/><span>By creating an account, I agree to this website's <a href="/information/license">privacy policy</a> and <a href="/information/license">terms of service</a></span></label><label><input type="checkbox"/><span>I consent to receive marketing emails.</span></label></div>}
  <button className="auth-reference-submit">{submitted?(signup?'Account created ✓':'Logged in ✓'):(signup?'Sign Up →':'Login →')}</button><p className="auth-reference-switch">{signup?<>Already have an account? <a href="/log-in">Log in</a></>:<>Don't have an account? <a href="/sign-up">Sign Up</a></>}</p>
 </form>{!signup&&<div className="auth-reference-test"><span>Test login</span><p>Test user: dipayan.kundu29@gmail.com<br/>Password: Marvel0987</p></div>}</div></section>
}

export default function SitePages({ slug }) {
  const titleMap = {'about-one':'About One','about-two':'About Two','faq':'FAQ','pricing-one':'Pricing One','pricing-two':'Pricing Two','pricing-three':'Pricing Three','career':'Career','events':'Events','team':'Team','blog-one':'Blog One','blog-two':'Blog Two','blog-three':'Blog Three','contact-one':'Contact One','contact-two':'Contact Two','contact-three':'Contact Three'}
  const routeTitle=titleMap[slug]||slug.split('/').at(-1).replaceAll('-',' ').replace(/\b\w/g,c=>c.toUpperCase())
  useEffect(()=>{document.title=`Elearna - ${routeTitle||'Pages'}`;window.scrollTo(0,0)},[slug,routeTitle])
  let content
  if(slug==='about-one') content=<AboutPage/>
  else if(slug==='about-two') content=<AboutPage two/>
   else if(slug==='faq') content=<><PageHero title="Frequently asked questions" description="Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit nam id" variant="faq-hero"/><FAQBlock full/><CallToAction/></>
  else if(slug.startsWith('pricing-')) content=<PricingPage variant={slug}/>
  else if(slug==='career') content=<CareerPage/>
  else if(slug==='events') content=<EventsPage/>
  else if(slug==='team') content=<TeamPage/>
  else if(slug.startsWith('blog-posts/')) content=<BlogPage postSlug={slug.split('/')[1]}/>
  else if(slug.startsWith('events/')) content=<CmsArticle type="event" slug={slug.split('/')[1]}/>
  else if(slug.startsWith('team-members/')) content=<CmsArticle type="team" slug={slug.split('/')[1]}/>
  else if(slug.startsWith('blog-')) content=<BlogPage variant={slug}/>
  else if(slug.startsWith('contact-')) content=<ContactPage variant={slug}/>
  else content=<UtilityPage slug={slug}/>
  const utility=['404','401','log-in','sign-up','reset-password','checkout','unlock-access','customize-template','information/license','information/style-guide'].includes(slug)
  return <div className={`site-page site-page-${slug.replaceAll('/','-')}`}>
    {!utility&&<SiteHeader/>}<main>{content}</main>
    {!utility&&(slug==='about-one'||slug==='about-two'?<AboutOneFooter/>:slug==='contact-three'?null:<Footer/>)}
  </div>
}
