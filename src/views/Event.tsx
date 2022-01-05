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
      <h2>Meetup details</h2>
      <div className="page-wrapper">
        <div>
          <EventCard event={event} />
        </div>
        <div className="event-comments">
          <h3>Comments</h3>
          <EventComments event={event} />
        </div>
      </div>
    </div>
  )
}

export default Event
