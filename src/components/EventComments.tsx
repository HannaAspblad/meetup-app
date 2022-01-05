import { useEffect, useState } from "react"
import * as API from "../api/api"

const EventComments = ({ event }: any) => {
  const [user, setUser] = useState(sessionStorage.getItem("User"))
  const [comment, setComment] = useState(String)
  const [submitDisabled, setSubmitDisabled] = useState(true)
  const [commentingDisabled, setCommentingDisabled] = useState(false)

  useEffect(() => {
    if (user === null) {
      setCommentingDisabled(true)
    }
  }, [user])

  const submit = async () => {
    await API.addComment(comment, event.id, user)

    setComment("")
    setSubmitDisabled(true)
  }

  const handleEventTarget = async (e: any) => {
    if (e.target.value.length < 1) {
      setComment("")
      setSubmitDisabled(true)
    } else {
      setComment(e.target.value)
      setSubmitDisabled(false)
    }
  }

  return (
    <div>
      {event !== undefined &&
      event.comments !== undefined &&
      Object.keys(event.comments).length > 0 ? (
        <div>
          {event.comments.map((comment: any) => {
            return (
              <ul className="comments" key={comment.id}>
                <li>{comment.authorId} commented</li>
                <li>{comment.comment}</li>
              </ul>
            )
          })}
        </div>
      ) : (
        <p>No comments</p>
      )}

      <form className="comments-form">
        <textarea
          disabled={commentingDisabled}
          aria-label="comment"
          value={comment}
          onChange={(e) => {
            handleEventTarget(e)
          }}
        />
        <button aria-label="submit" onClick={submit} disabled={submitDisabled}>
          Add comment
        </button>
      </form>
    </div>
  )
}

export default EventComments
