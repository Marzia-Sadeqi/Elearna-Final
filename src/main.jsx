import { routePath } from './basePath.js'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import HomeTwo from './HomeTwo.jsx'
import HomeThree from './HomeThree.jsx'
import CourseOne from './CourseOne.jsx'
import CourseDetails from './CourseDetails.jsx'
import SitePages from './SitePages.jsx'
import LandingPage from './LandingPage.jsx'
import './index.css'
import './sitewide-layout.css'

const pathname = routePath()
let Page = App
if (pathname === '/') {
  Page = LandingPage
  document.title = 'Elearna - Webflow Ecommerce website template'
} else if (pathname === '/home-one') {
  Page = App
  document.title = 'Elearna - Home One'
} else if (pathname === '/home-two') {
  Page = HomeTwo
  document.title = 'Elearna - Home Two'
} else if (pathname === '/home-three') {
  Page = HomeThree
  document.title = 'Elearna - Home Three'
} else if (pathname === '/course-one' || pathname === '/course-two' || pathname === '/course-three') {
  Page = () => <CourseOne variant={pathname.slice(1)} />
  document.title = `Elearna - ${pathname.slice(1).replace(/(^|-)[a-z]/g, match => match.toUpperCase()).replaceAll('-', ' ')}`
} else if (pathname.startsWith('/category/')) {
  const categorySlug = pathname.split('/')[2]
  Page = () => <CourseOne variant="course-three" categorySlug={categorySlug} />
  document.title = `Elearna - ${categorySlug[0]?.toUpperCase()}${categorySlug.slice(1)} Courses`
} else if (pathname === '/course-details' || pathname.endsWith('/course-details')) {
  Page = CourseDetails
  document.title = 'Elearna - Course Details'
} else if (pathname.startsWith('/product/')) {
  Page = CourseDetails
} else if (/^\/(blog-posts|events|team-members)\//.test(pathname)) {
  const slug = pathname.slice(1)
  Page = () => <SitePages slug={slug} />
  document.title = `Elearna - ${slug.split('/').at(-1).replaceAll('-', ' ').replace(/\b\w/g, char => char.toUpperCase())}`
} else if (['/about-one','/about-two','/faq','/pricing-one','/pricing-two','/pricing-three','/career','/events','/team','/blog-one','/blog-two','/blog-three','/contact-one','/contact-two','/contact-three','/contact-us','/404','/401','/checkout','/customize-template','/unlock-access','/log-in','/login','/sign-up','/register','/reset-password','/license','/instructor-details','/blog-details','/information/license','/information/style-guide'].includes(pathname)) {
  const aliases={'/contact-us':'contact-one','/login':'log-in','/register':'sign-up','/license':'information/license','/instructor-details':'team-members/lee-schmitt','/blog-details':'blog-posts/the-evolution-of-teaching-tools-in-the-21st-century'}
  const slug = aliases[pathname] || pathname.slice(1)
  document.title = `Elearna - ${slug === 'faq' ? 'FAQ' : slug.split('-').map(word => word[0].toUpperCase()+word.slice(1)).join(' ')}`
  Page = () => <SitePages slug={slug} />
} else if (pathname !== '/' && !['/home-one','/home-two','/home-three','/course-one','/course-two','/course-three'].includes(pathname)) {
  Page = () => <SitePages slug="404" />
  document.title = 'Elearna - Page not found'
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
)
