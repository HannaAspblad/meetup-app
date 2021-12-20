import { useEffect } from "react"
import * as API from "../api/api"

const Event = () => {
  useEffect(() => {
    populatePage()
  })

  const populatePage = async () => {
    const result = await API.getEventById("id")
    return result
  }

  return <h2>Event</h2>
}
export default Event
