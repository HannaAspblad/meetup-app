import { useEffect, useState } from "react"
import * as API from "../api/api"
import EventCard from "../components/EventCard"
import { Link } from "react-router-dom"

export const eventsByDate = (events: any) => {
  const sortedEvents = events.sort((a: any, b: any) => b.time - a.time)
  return sortedEvents
}

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
              <Link to={`/event/${event.id}`}>
                <EventCard event={event} />
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
