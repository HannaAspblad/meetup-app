import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import * as API from "../api/api"

const Navbar = () => {
  const [user, setUser] = useState(sessionStorage.getItem("User"))

  useEffect(() => {
    try {
      getUser()
    } catch (err) {}
  })

  const getUser = async () => {
    const currentUser = await API.getUser(user)
    return currentUser
  }
  return (
    <div className="navbar-wrapper">
      <Link to="/">All meetups</Link>
      <Link to={`/user/${user}`}>Your page</Link>
    </div>
  )
}
export default Navbar
