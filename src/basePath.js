// Makes the site work from a sub-path such as https://<user>.github.io/Elearna-website/
// Local dev and Vercel use base "/", so nothing changes there.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '') // "" or "/Elearna-website"

export const withBase = (url) =>
  BASE && typeof url === 'string' && url.startsWith('/') && !url.startsWith('//') && !url.startsWith(BASE + '/') && url !== BASE
    ? BASE + url
    : url

export const routePath = () => {
  let path = window.location.pathname
  if (BASE && (path === BASE || path.startsWith(BASE + '/'))) path = path.slice(BASE.length)
  return path.replace(/\/$/, '') || '/'
}

if (BASE) {
  const ATTRS = new Set(['href', 'src', 'poster'])
  const original = Element.prototype.setAttribute
  Element.prototype.setAttribute = function (name, value) {
    return original.call(this, name, ATTRS.has(name) ? withBase(value) : value)
  }
}
