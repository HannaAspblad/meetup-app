import { useEffect, useState } from "react"
import * as API from "../api/api"
import EventCard from "../components/EventCard"

const Start = () => {
  const [events, setEvents] = useState(Array)

  useEffect(() => {
    populatePage()
  })

  const populatePage = async () => {
    const result = await API.getAllEvents()
    setEvents(result)
  }
  return (
    <div>
      <h2>Start page</h2>

      <div className="event-grid">
        {events.length > 0 ? (
          events.map((event: any) => (
            <div key={event.id} className="event-card">
              {/* <Link to={`/event/${event.id}`}> */}
              <EventCard event={event} />
              {/* </Link> */}
            </div>
          ))
        ) : (
          <p className="error-message">No events</p>
        )}
      </div>
    </div>
  )
}

export default Start
