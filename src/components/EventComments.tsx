const EventComments = ({ comments }: any) => {
  return (
    <div>
      <h3>comments</h3>

      {comments !== undefined && (
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
      )}
    </div>
  )
}

export default EventComments
