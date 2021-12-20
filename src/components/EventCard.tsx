const EventCard = (props: any) => {
  console.log(props.event)
  return (
    <div>
      <h3>eventcard</h3>

      {props.length > 0 ? (
        props.events.map((event: any) => (
          <div key={event.id} className="event-card"></div>
        ))
      ) : (
        <p className="error-message">No events</p>
      )}

      {/* <p>{props.event.title}</p> */}
    </div>
  )
}

export default EventCard
