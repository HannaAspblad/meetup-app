import { useEffect, useState } from "react"
import * as API from "../api/api"

const EventCard = ({ event }: any) => {
  const [user, setUser] = useState(sessionStorage.getItem("User"))
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    if (user !== null || user !== undefined) {
      setDisabled(true)
    } else {
      checkBookedEvents()
    }
  }, [user])

  const checkBookedEvents = async () => {
    const userInfo = await API.getUser(user)

    for (let currentEvent of userInfo.bookedEvents) {
      if (currentEvent.id === event.id) {
        setDisabled(true)
      }
    }
  }

  const signUp = async () => {
    setDisabled(true)
    await API.signUpToEvent(event.id, user)
  }
  return (
    <div>
      {event !== undefined && Object.keys(event).length > 0 && (
        <div>
          <h3>{event.title}</h3>
          <p>{event.location}</p>
          <p>{event.time.toLocaleDateString()}</p>
        </div>
      )}
      <button aria-label="booking" onClick={signUp} disabled={disabled}>
        Sign up
      </button>
    </div>
  )
}

export default EventCard
