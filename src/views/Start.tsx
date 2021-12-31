import { useEffect, useState } from "react"
import * as API from "../api/api"
import EventCard from "../components/EventCard"
import { Link } from "react-router-dom"
import { eventsByDate } from "../utils/utils"

const Start = () => {
  const [events, setEvents] = useState(Array)

  useEffect(() => {
    populatePage()
  })

  const populatePage = async () => {
    const result = await API.getAllEvents()
    eventsByDate(result)
    setEvents(result)
  }

  return (
    <div>
      <h2>Start page</h2>

      <div className="event-grid">
        {events.length > 0 ? (
          events.map((event: any) => (
            <div key={event.id} className="event-card">
              <EventCard event={event} />
              <Link to={`/event/${event.id}`}>
                <p>Meetup details</p>
              </Link>
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
