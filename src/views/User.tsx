import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import * as API from "../api/api"

const User = () => {
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
  return (
    <div>
      <h3>welcome {user.username}</h3>

      <div>
        {events.length > 0 ? (
          events.map((event: any) => (
            <div key={event.id}>
              <p>{event.title}</p>
            </div>
          ))
        ) : (
          <p className="error-message">No events</p>
        )}
      </div>
    </div>
  )
}
export default User
