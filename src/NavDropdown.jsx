import {useState} from 'react'
import './nav-dropdown.css'

export default function NavDropdown({label,items}) {
  const [open,setOpen]=useState(false)
  return <div className={`site-nav-dropdown${open?' open':''}`} onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)} onFocus={()=>setOpen(true)} onBlur={event=>{if(!event.currentTarget.contains(event.relatedTarget))setOpen(false)}}>
    <a href={items[0][1]} aria-haspopup="true" aria-expanded={open}>{label}<span aria-hidden="true">⌄</span></a>
    <div className="site-nav-dropdown-menu">{items.map(([title,href])=><a href={href} key={href}>{title}</a>)}</div>
  </div>
}
