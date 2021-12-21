export const submit = (user: object) => {
  console.log("hej")
}
const Login = () => {
  return (
    <div>
      <h1>login</h1>
      <button className="login-button" onClick={submit}>
        login
      </button>
    </div>
  )
}
export default Login
