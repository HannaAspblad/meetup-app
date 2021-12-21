const EventCard = ({ event }: any) => {
  return (
    <div>
      <h3>eventcard</h3>
      {event !== undefined && (
        <div>
          <p>{event.title}</p>
          <p>{event.location}</p>
          <p>{`${event.time}`}</p>
          {/* <p>{event.time.toLocaleDateString()}</p> */}
        </div>
      )}
    </div>
  )
}

export default EventCard
