import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Login from "./Login"
import { Link } from "react-router-dom"
import * as API from "../api/api"

const User = () => {
  const navigate = useNavigate()

  const { id }: string | any = useParams()
  const [user, setUser] = useState(Object)
  const [events, setEvents] = useState(Array)

  useEffect(() => {
    getUser()
  }, [user])

  const getUser = async () => {
    const currentUser = await API.getUser(id)

    setUser(currentUser)
    getUserEvents()
  }

  const logOut = () => {
    setUser(sessionStorage.removeItem("User"))
    navigate("/login")
  }

  const getUserEvents = async () => {
    const eventIds: any = []

    if (user.bookedEvents !== undefined && user.bookedEvents.length > 0) {
      user.bookedEvents.forEach((event: any) => {
        eventIds.push(event.id)
      })

      const userEvents = await API.getEventsByIds(eventIds)
      setEvents(userEvents)
    } else setEvents([])
  }
  if (user === null || user === undefined) {
    return <Login />
  }

  if (sessionStorage.getItem("User") !== id) {
    return (
      <div>
        <p>Log in to see your meetups</p>
        <Login />
      </div>
    )
  }
  return (
    <div>
      <h3>welcome {user.username}</h3>
      <p>List of your upcoming events</p>
      <div>
        {events.length > 0 ? (
          events.map((event: any) => (
            <div key={event.id}>
              <Link to={`/event/${event.id}`}>
                <p>{event.title}</p>
              </Link>
            </div>
          ))
        ) : (
          <p className="error-message">No events</p>
        )}
      </div>
      <button onClick={logOut}>Log out</button>
    </div>
  )
}
export default User
