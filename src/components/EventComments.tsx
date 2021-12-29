import { useEffect, useState } from "react"
import * as API from "../api/api"

const EventComments = ({ event }: any) => {
  const [user, setUser] = useState(sessionStorage.getItem("User"))
  const [comment, setComment] = useState(String)
  const [disabled, setDisabled] = useState(false)
  const [allComments, setAllComments] = useState(Object)

  useEffect(() => {
    if (!user) {
      setDisabled(true)
    }
  }, [user])

  useEffect(() => {
    setAllComments(comment)
  }, [comment])

  const submit = async () => {
    await API.addComment(comment, event.id, user)
    setAllComments(event.comments)
  }

  if (event === undefined) return null
  return (
    <div>
      {event.comments !== undefined &&
      Object.keys(event.comments).length > 0 ? (
        <div>
          {event.comments.map((comment: any) => {
            return (
              <ul key={comment.id}>
                <li>{comment.authorId} commented</li>
                <li>{comment.comment}</li>
              </ul>
            )
          })}
        </div>
      ) : (
        <p>No comments</p>
      )}
      <input
        aria-label="comment"
        type="text"
        onChange={(e) => {
          setComment(e.target.value)
        }}
      />
      <button aria-label="submit" onClick={submit} disabled={disabled}>
        Add comment
      </button>
    </div>
  )
}

export default EventComments
