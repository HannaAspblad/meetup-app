import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [user, setUser] = useState(sessionStorage.getItem("User"))

  return (
    <div className="navbar-wrapper">
      <Link to="/">All meetups</Link>
      <Link to={`/user/${user}`}>Your page</Link>
    </div>
  )
}
export default Navbar
