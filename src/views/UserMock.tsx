export const getUser = (mock: any, userId: string) => {
  mock.getUser(userId)
}

export const getEvents = (mock: any, eventIds: any, events: any) => {
  mock.getEventsByIds(eventIds)
  mock.eventsByDate(events)
}
