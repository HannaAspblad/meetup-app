import { useEffect } from "react"
import * as API from "../api/api"

const Start = () => {
  useEffect(() => {
    populatePage()
  })

  const populatePage = async () => {
    const result = await API.getAllEvents()
    return result
  }
  return <h2>Start page</h2>
}

export default Start
