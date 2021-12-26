import { useState } from "react"
import * as API from "../api/api"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [username, setUsername] = useState(String)
  const [password, setPassword] = useState(String)
  const navigate = useNavigate()

  const submit = async () => {
    const userId = await API.logIn({ username: username, password: password })
    if (userId) {
      navigate(`/user/${userId}`)
      sessionStorage.setItem("User", userId)
    } else {
      //errormessage
      console.log("invalid")
    }
  }

  return (
    <div>
      <h1>login</h1>

      <form>
        <input
          aria-label="username"
          type="text"
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        />
        <input
          aria-label="password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <button aria-label="submit" onClick={submit}>
          Log in
        </button>
      </form>
    </div>
  )
}
export default Login
