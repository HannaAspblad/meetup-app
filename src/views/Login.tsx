import { useState } from "react"
import * as API from "../api/api"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [username, setUsername] = useState(String)
  const [password, setPassword] = useState(String)
  const [invalid, setInvalid] = useState(Boolean)
  const navigate = useNavigate()

  const submit = async () => {
    const userId = await API.logIn({ username: username, password: password })

    if (userId) {
      navigate(`/user/${userId}`)
      sessionStorage.setItem("User", userId)
      setInvalid(false)
    } else {
      setInvalid(true)
    }
  }

  return (
    <div>
      <h2>Log in</h2>
      <div className="page-wrapper">
        <form className="input-form">
          <label htmlFor="input-username">Username:</label>
          <input
            name="input-username"
            aria-label="username"
            type="text"
            onChange={(e) => {
              setUsername(e.target.value)
            }}
          />
          <label htmlFor="input-password">Password:</label>
          <input
            name="input-password"
            aria-label="password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <button className="form-button" aria-label="submit" onClick={submit}>
            Log in
          </button>
        </form>
        {invalid ? <p className="error-message">Error</p> : ""}
      </div>
    </div>
  )
}
export default Login
