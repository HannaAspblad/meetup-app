import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as API from "../api/api"
import EventCard from "../components/EventCard"

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

      <div className="event-card">
        <EventCard event={event} />
      </div>
    </div>
  )
}
export default Event
