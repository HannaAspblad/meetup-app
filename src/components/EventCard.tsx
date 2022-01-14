import { useEffect, useState } from "react"
import * as API from "../api/api"
import { passedEvent } from "../utils/utils"
import { Link, useLocation } from "react-router-dom"

const EventCard = ({ event }: any) => {
  const [user, setUser] = useState(sessionStorage.getItem("User"))
  const [disabled, setDisabled] = useState(false)
  const [style, setStyle] = useState(String)
  const route = useLocation()

  useEffect(() => {
    if (user === null || user === undefined) {
      setDisabled(true)
    } else {
      checkBookedEvents()
    }

    checkPassedEvents()
  }, [user, event])

  const checkPassedEvents = () => {
    if (event !== undefined && passedEvent(event.time)) {
      setStyle("passed-event-card")
      setDisabled(true)
    } else {
      setStyle("event-card")
    }
  }

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
    <div className={style}>
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
      {event !== undefined && !route.pathname.includes("/event") && (
        <Link to={`/event/${event.id}`}>
          <p>Meetup details</p>
        </Link>
      )}
    </div>
  )
}

export default EventCard
