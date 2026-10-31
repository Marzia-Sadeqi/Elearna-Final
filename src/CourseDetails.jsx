import { useEffect, useState } from 'react'
import CourseMegaMenu from './CourseMegaMenu.jsx'
import PageMegaMenu from './PageMegaMenu.jsx'
import NavDropdown from './NavDropdown.jsx'
import './course-details.css'
import './course-details-layout.css'

const cdn = `${import.meta.env.BASE_URL}assets/`
const catalog = [
  ['building-single-page-applications-with-angular', 'Development', 'Building single page applications with angular', '5.00 (328)', '66eb9dfb3e87f8984b5a15b6_Course-Small-Image.webp'],
  ['database-integration-with-mongodb', 'Development', 'Database integration with MongoDB', '4.49 (756)', '66eb9e1184c0c12d2244968d_Course-Small-Image-9.webp'],
  ['operations-management-and-process-improvement', 'Finance', 'Operations management and process improvement', '5.00 (812)', '66eb9e25c4d132b7abc4dcb2_Course-Small-Image-8.webp'],
  ['risk-management-and-business-continuity', 'Management', 'Risk management and business continuity', '4.88 (210)', '66eb9e363f6e47ec5245cf09_Course-Small-Image-7.webp'],
  ['design-systems-and-pattern-libraries', 'Design', 'Design systems and pattern libraries', '5.00 (1.2K)', '66fe66cdef763efcc757aefb_Course-Image-2.webp'],
  ['full-stack-development-with-the-mern-stack', 'Development', 'Full-stack development with the MERN stack', '5.00 (985)', '66eb9e61096e930736b651e4_Course-Small-Image-5.webp'],
  ['grow-your-brand-and-reach-your-audience', 'Management', 'Grow your brand and reach your audience', '4.88 (210)', '66eb9fb02faddeb03288c28e_Course-Small-Image-2.webp'],
  ['the-complete-guide-to-personal-and-business-finance', 'Finance', 'The complete guide to personal and business finance', '4.88 (210)', '66eb9ece25b132baef1462d5_Course-Small-Image-3.webp'],
  ['understanding-corporate-finance-and-investments', 'Finance', 'Understanding corporate finance and investments', '4.88 (210)', '6710bb2b1bfbb88a06696c70_Course-Image-4.webp'],
  ['advanced-photoshop-techniques-for-designers', 'Design', 'Advanced photoshop techniques for designers', '5.00 (1.2K)', '6710bcf4976ba1d072d8b476_Course-Image-4-2.webp'],
  ['crisis-management-and-problem-solving-strategies', 'Management', 'Crisis management and problem-solving strategies', '4.88 (210)', '6710c8cf232065a7046261dc_Course-Image-7.webp'],
  ['learn-interactive-web-design-by-building-real-projects', 'Design', 'Learn interactive Web Design by building real projects', '5.00 (1.2K)', '66fe66442929de6e874b3284_Course-Image.webp'],
]

const financeLessons = [
  { title: 'Introduction to Corporate Finance and Investments', video: 'setu9Ir1miY' },
  { title: 'Budgeting basics, creating and sticking to a budget', video: 'PcFXt8o7uGg' },
  { title: 'Retirement planning and strategies for a secure future', video: 'EFHoH15i4Zg' },
  { title: 'Risk management for protecting your financial assets', video: 'De2unauLBks' },
  { title: 'Financial markets overview and how they work', video: 'pLgPFfFdpDs' },
]

const crisisLessons = [
  { title: 'Introduction to crisis management and problem-solving', video: 'setu9Ir1miY' },
  { title: 'Coaching and mentoring for developing future leaders', video: 'PcFXt8o7uGg' },
  { title: 'Crisis management and preparing for the unexpected', video: 'EFHoH15i4Zg' },
  { title: 'Project management essentials tools and methodologies', video: 'pLgPFfFdpDs' },
  { title: 'Marketing management and understanding market dynamics', video: 'pLgPFfFdpDs' },
  { title: 'Negotiation skills and finding win-win solutions', video: 'Gp8A55gZnBU' },
]

const angularLessons = [
  { title: 'Introduction to angular and single page applications', video: 'setu9Ir1miY' },
  { title: 'Angular components', video: 'PcFXt8o7uGg' },
  { title: 'Angular modules and services', video: 'EFHoH15i4Zg' },
  { title: 'Angular routing and navigation', video: 'De2unauLBks' },
  { title: 'Working with forms in angular', video: 'pLgPFfFdpDs' },
  { title: 'HTTP client and APIs', video: 'Gp8A55gZnBU' },
  { title: 'State management in angular', video: 'QjDQlD3jUQk' },
  { title: 'Advanced angular features', video: 'EcIEiuzvJgo' },
  { title: 'Deploying angular applications', video: 'gKcltWATLvk' },
]

const photoshopLessons = [
  { title: 'Introduction to photoshop techniques for designers', video: 'setu9Ir1miY' },
  { title: 'Responsive web design for making sites mobile-friendly', video: 'PcFXt8o7uGg' },
  { title: 'User experience (UX) basics design for the user', video: 'EFHoH15i4Zg' },
  { title: 'Creating compelling user interfaces (UI)', video: 'De2unauLBks' },
  { title: 'Mastering color theory with effective color schemes', video: 'pLgPFfFdpDs' },
]

const operationsLessons = [
  { title: 'Introduction to personal finance and managing your money', video: 'setu9Ir1miY' },
  { title: 'Budgeting basics, creating and sticking to a budget', video: 'PcFXt8o7uGg' },
  { title: 'Retirement planning and strategies for a secure future', video: 'EFHoH15i4Zg' },
  { title: 'Risk management for protecting your financial assets', video: 'De2unauLBks' },
  { title: 'Financial markets overview and how they work', video: 'pLgPFfFdpDs' },
  { title: 'Investment strategies and active vs. passive investing', video: 'Gp8A55gZnBU' },
  { title: 'Introduction to corporate finance and key concepts and tools', video: 'QjDQlD3jUQk' },
]

const courseInfo = {
  'building-single-page-applications-with-angular': { weeks: '4 weeks', level: 'Intermediate', hours: '5 hours', lessons: 6, curriculumCount: 9, students: '12k Enrolled', hero: 'angular-course-hero.webp' },
  'database-integration-with-mongodb': { weeks: '4 weeks', level: 'Intermediate', hours: '5 hours', lessons: 10, students: '7k Enrolled', hero: '66d831a6884e433507631ecb_Course-Background-3.webp' },
  'operations-management-and-process-improvement': { weeks: '4 weeks', level: 'Expert', hours: '5 hours', lessons: 12, curriculumCount: 7, students: '23k Enrolled', hero: 'operations-course-hero.webp' },
  'risk-management-and-business-continuity': { weeks: '4 weeks', level: 'Intermediate', hours: '5 hours', lessons: 3, students: '8k Enrolled', hero: '66d831a65d24001133ce1b9f_Course-Background-5.webp' },
  'design-systems-and-pattern-libraries': { weeks: '4 weeks', level: 'Intermediate', hours: '5 hours', lessons: 8, students: '25k Enrolled', hero: '66d831a6c4e5401855628a37_Course-Background-6.webp' },
  'full-stack-development-with-the-mern-stack': { weeks: '4 weeks', level: 'Intermediate', hours: '5 hours', lessons: 12, students: '22k Enrolled', hero: '66d831a6dae65024b112fdba_Course-Background-2.webp' },
  'grow-your-brand-and-reach-your-audience': { weeks: '4 weeks', level: 'Intermediate', hours: '5 hours', lessons: 5, students: '11k Enrolled' },
  'the-complete-guide-to-personal-and-business-finance': { weeks: '4 weeks', level: 'Intermediate', hours: '5 hours', lessons: 8, students: '14k Enrolled' },
  'advanced-photoshop-techniques-for-designers': { weeks: '4 weeks', level: 'Beginner', hours: '10 hours', lessons: 8, curriculumCount: 5, students: '25k Enrolled', hero: 'photoshop-course-hero.webp' },
  'learn-interactive-web-design-by-building-real-projects': { weeks: '4 weeks', level: 'Intermediate', hours: '5 hours', lessons: 9, students: '18k Enrolled' },
}

const lessonIntroduction = 'Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit. Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada.'

const courseFacts = [
  ['Time span', '10 weeks', '66ed2b4dd66d1f67877ff988_Clock-Icons.svg', '30px'],
  ['Lectures', '10 Lessons', '66ed2b4db284234066c29758_Books-Icons.svg', '28px'],
  ['Skill level', 'Expert', '66ed2b4deb1f70f5a655d940_Skills-Arrow.svg', '36px'],
  ['Video lessons', '2 hours', '66ed2b4d31c3e04c229773da_Video-Icons.svg', '29px'],
  ['Students', '8k Enrolled', '66ed2b4d04e91f137e0edb2c_Persons.svg', '30px'],
]

const relatedCourses = [
  { slug: 'building-single-page-applications-with-angular', category: 'Development', title: 'Building single page applications with angular', rating: '5.00 (328)', price: 'Free', image: '66ebabcd61399462d208146a_Course-Portrait-Image.webp' },
  { slug: 'database-integration-with-mongodb', category: 'Development', title: 'Database integration with MongoDB', rating: '4.49 (756)', price: '$59', image: '66ebabde3e87f8984b6782a1_Course-Portrait-Image-9.webp' },
  { slug: 'operations-management-and-process-improvement', category: 'Finance', title: 'Operations management and process improvement', rating: '5.00 (812)', price: 'Free', image: '66ebabf4c17d78e3224b9b5b_Course-Portrait-Image-8.webp' },
]

export default function CourseDetails() {
  const isCorporateFinancePage = window.location.pathname.includes('understanding-corporate-finance-and-investments') || window.location.pathname.includes('/corporate-finance/')
  const [tab, setTab] = useState(isCorporateFinancePage ? 'Curriculum' : 'Overview')
  const [lessonIndex, setLessonIndex] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const slug = window.location.pathname.split('/').filter(Boolean).at(-1) === 'course-details'
    ? window.location.pathname.split('/').filter(Boolean).at(-2)
    : window.location.pathname.split('/').filter(Boolean).at(-1)
  const aliases = { 'single-page-angular': 'building-single-page-applications-with-angular', 'mongodb-integration': 'database-integration-with-mongodb', 'process-improvement': 'operations-management-and-process-improvement', 'risk-management': 'risk-management-and-business-continuity', 'design-systems': 'design-systems-and-pattern-libraries', 'mern-stack': 'full-stack-development-with-the-mern-stack', 'brand-audience': 'grow-your-brand-and-reach-your-audience', 'personal-business-finance': 'the-complete-guide-to-personal-and-business-finance', 'corporate-finance': 'understanding-corporate-finance-and-investments', 'photoshop-techniques': 'advanced-photoshop-techniques-for-designers', 'crisis-management': 'crisis-management-and-problem-solving-strategies' }
  const course = catalog.find(item => item[0] === (aliases[slug] || slug)) || catalog[0]
  const isCorporateFinance = course[0] === 'understanding-corporate-finance-and-investments'
  const isCrisisManagement = course[0] === 'crisis-management-and-problem-solving-strategies'
  const detailInfo = courseInfo[course[0]]
  const knownCurricula = {
    'building-single-page-applications-with-angular': angularLessons,
    'operations-management-and-process-improvement': operationsLessons,
    'advanced-photoshop-techniques-for-designers': photoshopLessons,
  }
  const lessons = isCorporateFinance ? financeLessons : isCrisisManagement ? crisisLessons : knownCurricula[course[0]] || Array.from({ length: detailInfo?.curriculumCount || detailInfo?.lessons || 6 }, (_, index) => ({
    title: index === 0 ? `Introduction to ${course[2]}` : `${course[2]} — Lesson ${index + 1}`,
    video: ['setu9Ir1miY', 'PcFXt8o7uGg', 'EFHoH15i4Zg', 'De2unauLBks', 'pLgPFfFdpDs', 'Gp8A55gZnBU'][index % 6],
  }))
  const facts = isCorporateFinance ? courseFacts : isCrisisManagement ? [
    ['Time span', '3 weeks', '66ed2b4dd66d1f67877ff988_Clock-Icons.svg', '30px'],
    ['Lectures', '6 Lessons', '66ed2b4db284234066c29758_Books-Icons.svg', '28px'],
    ['Skill level', 'Intermediate', '66ed2b4deb1f70f5a655d940_Skills-Arrow.svg', '36px'],
    ['Video lessons', '8 hours', '66ed2b4d31c3e04c229773da_Video-Icons.svg', '29px'],
    ['Students', '8k Enrolled', '66ed2b4d04e91f137e0edb2c_Persons.svg', '30px'],
  ] : [
    ['Time span', detailInfo?.weeks || '4 weeks', '66ed2b4dd66d1f67877ff988_Clock-Icons.svg', '30px'],
    ['Lectures', `${detailInfo?.lessons || 6} Lessons`, '66ed2b4db284234066c29758_Books-Icons.svg', '28px'],
    ['Skill level', detailInfo?.level || 'Intermediate', '66ed2b4deb1f70f5a655d940_Skills-Arrow.svg', '36px'],
    ['Video lessons', detailInfo?.hours || '5 hours', '66ed2b4d31c3e04c229773da_Video-Icons.svg', '29px'],
    ['Students', detailInfo?.students || '8k Enrolled', '66ed2b4d04e91f137e0edb2c_Persons.svg', '30px'],
  ]
  const heroImage = isCorporateFinance ? '6710bb33ef51448b568bfb5a_Course-Image-3-2.webp' : isCrisisManagement ? course[4] : detailInfo?.hero || course[4]
  useEffect(() => { document.title = `Elearna - ${course[2]}`; window.scrollTo(0, 0) }, [course])
  const detailLayoutClass = isCorporateFinance ? ' corporate-course-detail' : isCrisisManagement ? ' crisis-course-detail reference-course-detail' : ' reference-course-detail'
  return <div className={`course-one-page course-detail-page${detailLayoutClass}`}>
    <header className="course-detail-header">
      <div className="course-detail-topbar"><div className="course-shell course-detail-topline"><span>Are you interested in online coaching? <a href="/contact-one">Contact us.</a></span><div><a href="mailto:support@example.com">support@example.com</a><i/>Call: <a href="tel:8881234567">(888) 123 4567</a></div></div></div>
      <div className="course-shell course-detail-nav-row">
        <a className="course-detail-brand" href="/"><img src={`${cdn}66c6fb8bf82fe9cef5f78d65_Elearna.svg`} alt="Elearna"/></a>
        <nav className="course-detail-links"><div className="course-detail-home"><a href="/">Home <span>⌄</span></a><div><a href="/home-one">Home One</a><a href="/home-two">Home Two</a><a href="/home-three">Home Three</a></div></div><CourseMegaMenu compact/><PageMegaMenu compact/><NavDropdown label="Blog" items={ [['Blog One','/blog-one'],['Blog Two','/blog-two'],['Blog Three','/blog-three']] }/><NavDropdown label="Contact" items={ [['Contact One','/contact-one'],['Contact Two','/contact-two'],['Contact Three','/contact-three']] }/></nav>
        <div className="course-detail-actions"><a className="course-detail-cart" href="/course-one"><img src={`${cdn}66c6fb8ba5e099697cc76c17_Cart.svg`} alt="Cart"/><b>0</b></a><a href="/login">Login</a><i/><a href="/register">Register</a></div>
        <button className="course-detail-menu-button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        {menuOpen && <nav className="course-detail-mobile-links"><a href="/">Home</a><a href="/course-one">Courses</a><a href="/about-one">Pages</a><a href="/blog-one">Blog</a><a href="/contact-one">Contact</a></nav>}
      </div>
    </header>
    <main>
      <section className="detail-hero course-background-hero" style={{ '--course-detail-image': `url("${cdn}${heroImage}")` }}>
        <div className="course-hero-overlay"/>
        <div className="course-shell course-hero-content"><span className="course-kicker">{course[1]}</span><h1>{course[2]}</h1><div className="detail-rating"><img src={`${cdn}66c6fb8b857efb6c4c737b5d_Rating.svg`} alt="5 star rating"/><span>{course[3]}</span></div></div>
      </section>
      <div className="course-shell detail-facts">{facts.map(([label,value,icon,width])=><div className="detail-fact" key={label}><img src={`${cdn}${icon}`} style={{width}} alt=""/><div><span>{label}</span><strong>{value}</strong></div></div>)}</div>
      {!isCorporateFinance ? <>
      <section className="course-details-section">
        <div className="course-detail-content">
          <nav className="course-detail-tabs" aria-label="Course information">{['Overview','Curriculum','Instructor','FAQ','Query'].map(name=><a key={name} href={`#course-${name.toLowerCase()}`} aria-current={tab===name?'page':undefined} className={tab===name?'active':''} onClick={e=>{e.preventDefault();setTab(name)}}>{name}</a>)}</nav>
          <div className="course-detail-panel" id={`course-${tab.toLowerCase()}`}>
            {tab === 'Curriculum' ? <div className="curriculum-tab">
              <nav className="curriculum-tabs-menu" aria-label="Course lessons">{lessons.map((item,index)=><a key={item.video} href={`#lesson-${index+1}`} aria-current={lessonIndex===index?'page':undefined} className={`course-details-tabs-options${lessonIndex===index?' w--current':''}`} onClick={e=>{e.preventDefault();setLessonIndex(index)}}>Lesson {index+1}</a>)}</nav>
              <article className="curriculum-lesson" id={`lesson-${lessonIndex+1}`}>
                <h2>{lessons[lessonIndex].title}</h2>
                <h3>Introduction</h3><p>{lessonIntroduction}</p>
                <div className="lesson-video"><iframe src={`https://www.youtube.com/embed/${lessons[lessonIndex].video}`} title={`Lesson ${lessonIndex+1}: ${lessons[lessonIndex].title}`} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/></div>
                <h3>Main features</h3><ul><li>Lorem ipsum dolor sit amet consectetur.</li><li>Et facilisis nunc quam quam etiam donec pellentesque ut.</li><li>Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam.</li><li>Molestie pharetra morbi eu odio volutpat.</li><li>Cursus velit elit senectus auctor vitae tristique velit.</li><li>Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada.</li></ul>
                <img className="lesson-detail-image" src={`${cdn}66f27b23782c6572c6eae153_Details.webp`} alt="Lesson details and key takeaways" loading="lazy"/>
              </article>
            </div> : tab === 'Overview' ? <div className="course-overview-richtext">
              <h3>Course description</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit. Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada. Adipiscing nulla hac enim vivamus elementum massa. Est feugiat sed eget vestibulum.</p>
              <p aria-hidden="true">&nbsp;</p>
              <h4>Main features</h4>
              <ul><li>Lorem ipsum dolor sit amet consectetur.</li><li>Et facilisis nunc quam quam etiam donec pellentesque ut.</li><li>Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam.</li><li>Molestie pharetra morbi eu odio volutpat.</li><li>Cursus velit elit senectus auctor vitae tristique velit.</li><li>Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada.</li></ul>
              <p aria-hidden="true">&nbsp;</p>
              <h4>What is the target audience?</h4>
              <p>Lorem ipsum dolor sit amet consectetur. Nibh urna quis tempus elit ultrices amet. Convallis facilisis duis vivamus ut suspendisse imperdiet vel eleifend maecenas. Mi senectus eu nec mattis lacus dolor in diam cursus. Eu magna enim sed duis enim fames vitae ornare pretium. Consequat egestas amet eget neque sed. Quis elementum amet diam sapien adipiscing dis dignissim.</p>
            </div> : tab === 'FAQ' ? <div className="course-overview-richtext"><h3>Frequently asked questions</h3><h4>Who is this course for?</h4><p>This course is suitable for learners who want to develop practical, job-ready skills.</p><h4>Do I get lifetime access?</h4><p>Yes. Lessons are available to revisit whenever you need them.</p></div> : tab === 'Query' ? <form className="course-query" onSubmit={e=>{e.preventDefault(); alert('Thanks! Your question has been received.')}}><h3>Ask a question</h3><input required placeholder="Your name"/><input type="email" required placeholder="Email address"/><textarea required placeholder="Ask a question"/><button className="course-primary">Send question</button></form> : <div className="course-overview-richtext"><h3>About the instructor</h3><p>Your instructor is an experienced industry professional with a passion for helping learners succeed.</p></div>}
          </div>
        </div>
      </section>
      <section className="course-details-more">
        <div className="course-details-more-inner"><span className="course-kicker">ONLINE LEARNING</span><h2>Related courses</h2>
          <div className="course-related-cards">{relatedCourses.map(item=><article className="related-course-card" key={item.slug}>
            <img className="related-course-image" src={`${cdn}${item.image}`} alt="" loading="lazy"/><div className="related-course-shade"/>
            <div className="related-course-content"><span className="related-course-category">{item.category}</span><h3>{item.title}</h3><div className="related-course-rating"><img src={`${cdn}66c6fb8b857efb6c4c737b5d_Rating.svg`} alt="5 star rating"/><span>{item.rating}</span></div><a className="related-course-button" href={`/${item.slug}/course-details`}>Course Details</a></div>
            <span className="related-course-price">{item.price}</span><span className="related-course-frame" aria-hidden="true"/>
          </article>)}</div>
        </div>
      </section>
      </> : <>
      <section className="course-shell detail-body course-learning-content">
        <div className="detail-main">
          <nav className="detail-tabs">{['Overview','Curriculum','Instructor','FAQ','Query'].map(name=><a key={name} href={`#course-${name.toLowerCase()}`} className={tab===name?'selected':''} onClick={e=>{e.preventDefault();setTab(name)}}>{name}</a>)}</nav>
          <div className="detail-copy">
            {tab==='Curriculum' ? <div className="curriculum-tab"><nav className="curriculum-tabs-menu" aria-label="Course lessons">{lessons.map((item,index)=><a key={item.video} href={`#lesson-${index+1}`} className={`course-details-tabs-options${lessonIndex===index?' w--current':''}`} onClick={e=>{e.preventDefault();setLessonIndex(index)}}>Lesson {index+1}</a>)}</nav><article className="curriculum-lesson"><h2>{lessons[lessonIndex].title}</h2><h3>Introduction</h3><p>{lessonIntroduction}</p><div className="lesson-video"><iframe src={`https://www.youtube.com/embed/${lessons[lessonIndex].video}`} title={lessons[lessonIndex].title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/></div><h3>Main features</h3><p>{lessonIntroduction}</p><img className="lesson-detail-image" src={`${cdn}66f27b23782c6572c6eae153_Details.webp`} alt="Lesson details" loading="lazy"/></article></div> : tab==='FAQ' ? <><h2>Frequently asked questions</h2><h3>Who is this course for?</h3><p>This course is suitable for learners who want to develop practical, job-ready skills.</p><h3>Do I get lifetime access?</h3><p>Yes. Lessons are available to revisit whenever you need them.</p></> : tab==='Query' ? <form className="course-query" onSubmit={e=>{e.preventDefault();alert('Thanks! Your question has been received.')}}><h2>Ask a question</h2><input required placeholder="Your name"/><input type="email" required placeholder="Email address"/><textarea required placeholder="Ask a question"/><button className="course-primary">Send question</button></form> : <><h2>{tab==='Overview'?'Course description':tab}</h2><p>{lessonIntroduction}</p><h3>{tab==='Instructor'?'About your instructor':'Main features'}</h3><ul><li>Understand the essential concepts and tools</li><li>Apply your knowledge through practical projects</li><li>Build a portfolio-ready final project</li><li>Learn at your own pace with lifetime access</li></ul></>}
          </div>
        </div>
        <aside className="enroll-card" id="enroll"><img src={cdn+course[4]} alt=""/><div className="enroll-price">Free <del>$99</del></div><a href="#enroll" className="course-primary">Enroll now <b>↗</b></a><h3>This course includes</h3><p>◷　5 hours on-demand video</p><p>▤　6 downloadable lessons</p><p>♧　Certificate of completion</p><p>∞　Lifetime access</p></aside>
      </section>
      <section className="course-related"><div className="course-shell"><span className="course-kicker">ONLINE LEARNING</span><h2>Related courses</h2><div className="course-grid-one">{catalog.filter(x=>x!==course).slice(0,3).map(c=><article className="courser-card-one" key={c[0]}><a className="course-card-image-wrap" href={`/${c[0]}/course-details`}><img src={cdn+c[4]} alt={c[2]}/></a><div className="course-card-content"><span className="course-cat-tag">{c[1]}</span><h3><a href={`/${c[0]}/course-details`}>{c[2]}</a></h3><div className="course-rating-row">★ ★ ★ ★ ★　{c[3]}</div><div className="course-meta-divider"/><a className="details-link" href={`/${c[0]}/course-details`}>Course details ↗</a></div></article>)}</div></div></section>
      </>}
      <section className="course-detail-cta">
        <div className="course-detail-cta-main">
          <h2>Are you ready to start your journey?</h2>
          <div className="course-detail-cta-buttons"><a href="/course-one">Browse Courses</a><a href="/career">Became an Instructor</a></div>
        </div>
      </section>
    </main>
    <footer className="course-detail-footer">
      <div className="course-detail-footer-grid">
        <div className="course-detail-footer-brand"><a href="/"><img src={`${cdn}66c6fb8bf82fe9cef5f78d65_Elearna.svg`} alt="Elearna"/></a><p>Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis eget amet ut tristique cras.</p></div>
        <div><h2>Popular courses</h2><a href="/category/finance">Finance</a><a href="/category/management">Management</a><a href="/category/design">Design</a><a href="/category/development">Web development</a></div>
        <div><h2>Company</h2><a href="/about-one">About</a><a href="/course-two">Courses</a><a href="/blog-one">Blog</a><a href="/contact-one">Contact</a><a href="/information/license">License</a><a href="/pricing-one">Pricing</a></div>
        <div><h2>CMS</h2><a href="/understanding-corporate-finance-and-investments/course-details">Course details</a><a href="/team-members/lee-schmitt">Instructor details</a><a href="/blog-one">Blog details</a></div>
        <div className="course-detail-footer-contact"><h2>Need help?</h2><div><span>Call us</span><a className="contact-value" href="tel:8881234567">(888) 123 4567</a></div><div><span>Need support?</span><a className="contact-value" href="mailto:info@example.com">info@example.com</a></div></div>
      </div>
      <div className="course-detail-footer-bottom"><span>Design by <a href="https://www.radianttemplates.com" target="_blank" rel="noreferrer">Radiant Templates</a></span><span>Powered by <a href="https://webflow.com/?r=0">Webflow</a></span></div>
    </footer>
  </div>
}
