import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import * as API from "../api/api"

const User = () => {
  const { id }: string | any = useParams()
  const [user, setUser] = useState(Object)

  useEffect(() => {
    getUser()
  })
  const getUser = async () => {
    const user = await API.getUser(id)
    setUser(user)
  }

  return (
    <div>
      <h1>welcome {user.username}</h1>
    </div>
  )
}
export default User
