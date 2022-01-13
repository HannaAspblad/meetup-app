import { useEffect, useState } from "react"
import * as API from "../api/api"
import EventCard from "../components/EventCard"

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
      <h2>All meetups</h2>

      <div className="event-grid">
        {events.length > 0 ? (
          events.map((event: any) => (
            <div key={event.id}>
              <EventCard event={event} />
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
