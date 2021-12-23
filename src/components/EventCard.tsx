const EventCard = ({ event }: any) => {
  return (
    <div>
      {event !== undefined && Object.keys(event).length > 0 && (
        <div>
          <h3>{event.title}</h3>
          <p>{event.location}</p>
          <p>{event.time.toLocaleDateString()}</p>
        </div>
      )}
    </div>
  )
}

export default EventCard
