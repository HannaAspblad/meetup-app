import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as API from "../api/api"
import EventCard from "../components/EventCard"
import EventComments from "../components/EventComments"

const Event = () => {
  const { id }: string | any = useParams()
  const [event, setEvent] = useState(Object)

  useEffect(() => {
    populatePage()
  })

  const populatePage = async () => {
    const result = await API.getEventById(id)
    setEvent(result)
  }

  return (
    <div>
      <h2>Event</h2>
      {event !== undefined && Object.keys(event).length > 0 && (
        <>
          <div className="event-card">
            <EventCard event={event} />
          </div>
          <div className="event-comments">
            <EventComments comments={event.comments} />
          </div>
        </>
      )}
    </div>
  )
}

export default Event
