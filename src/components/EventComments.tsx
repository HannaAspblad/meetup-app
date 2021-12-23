const EventComments = ({ comments }: any) => {
  console.log(typeof comments)
  if (comments !== undefined && Object.keys(comments).length > 0) {
    return (
      <div>
        <div>
          {comments.map((comment: any) => {
            return (
              <ul key={comment.id}>
                <li>{comment.authorId} commented</li>
                <li>{comment.comment}</li>
              </ul>
            )
          })}
        </div>
      </div>
    )
  }
  return <p>No comments</p>
}

export default EventComments
