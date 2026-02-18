import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="site-header">
      <nav className="nav-menu">
        <NavLink to="/" end>HOME</NavLink>
        <NavLink to="/experience">EXPERIENCE</NavLink>
        <NavLink to="/education">EDUCATION</NavLink>
        <NavLink to="/hobbies">HOBBIES</NavLink>
      </nav>
    </header>
  )
}
