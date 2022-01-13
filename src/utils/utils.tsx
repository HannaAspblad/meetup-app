export const eventsByDate = (events: any) => {
  const sortedEvents = events.sort((a: any, b: any) => b.time - a.time)

  return sortedEvents
}

export const passedEvent = (eventTime: any) => {
  let bothDates = []

  const currentDate = new Date()

  bothDates.push(eventTime)
  bothDates.push(currentDate)
  const passedEvent = bothDates.sort((a: any, b: any) => b.time - a.time)

  if (currentDate > passedEvent[0]) {
    return true
  }
  return false
}
