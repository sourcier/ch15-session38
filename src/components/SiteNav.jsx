import { Link, NavLink } from "react-router-dom";

function SiteNav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <NavLink to="/About">About</NavLink>
    </nav>
  )
}

export default SiteNav;
