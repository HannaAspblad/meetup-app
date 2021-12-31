export const eventsByDate = (events: any) => {
  const sortedEvents = events.sort((a: any, b: any) => b.time - a.time)

  return sortedEvents
}
