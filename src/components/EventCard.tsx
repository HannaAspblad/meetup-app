import { useState } from "react"
import * as API from "../api/api"

const EventCard = ({ event }: any) => {
  const [user, setUser] = useState(sessionStorage.getItem("User"))

  const signUp = async () => {
    console.log("signup")
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

      <button aria-label="booking" onClick={signUp}>
        Sign up
      </button>
    </div>
  )
}

export default EventCard
