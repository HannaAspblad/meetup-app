import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import * as API from "../api/api"

const Navbar = () => {
  const [user, setUser] = useState(sessionStorage.getItem("User"))
  const [displayMenu, setDisplayMenu] = useState(false)

  useEffect(() => {
    try {
      getUser()
    } catch (err) {}
  })
  const toggleMenu = () => {
    if (!displayMenu) {
      setUser(sessionStorage.getItem("User"))
      setDisplayMenu(true)
    } else {
      setDisplayMenu(false)
    }
  }
  const getUser = async () => {
    const currentUser = await API.getUser(user)

    setUser(currentUser.id)
  }
  return (
    <div className="navbar-wrapper">
      <button onClick={toggleMenu}>Menu</button>
      {displayMenu ? (
        <div className="navbar-menu">
          <Link to="/" onClick={toggleMenu}>
            All meetups
          </Link>

          <Link to={`/user/${user}`} onClick={toggleMenu}>
            Your page / Log in
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}
export default Navbar
