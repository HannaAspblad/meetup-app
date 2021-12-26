import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [user, setUser] = useState(sessionStorage.getItem("User"))
  return (
    <div className="navbar-wrapper">
      <Link to="/">Start</Link>
      <Link to="/login">Log in</Link>
      <Link to={`/user/${user}`}>User</Link>
    </div>
  )
}
export default Navbar
