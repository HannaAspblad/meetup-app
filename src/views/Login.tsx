import { useState } from "react"
import * as API from "../api/api"

const Login = () => {
  const [username, setUsername] = useState(String)
  const [password, setPassword] = useState(String)

  const submit = async () => {
    const valid = await API.logIn({ username: username, password: password })
    if (valid) {
      //redirect
      console.log("valid")
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
