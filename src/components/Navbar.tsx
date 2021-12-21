import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <Link to="/">Start</Link>
      <Link to="/login">Log in</Link>
      <Link to="/user">User</Link>
    </div>
  )
}
export default Navbar
