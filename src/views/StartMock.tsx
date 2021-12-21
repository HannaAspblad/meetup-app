export const populatePage = (mock: any) => {
  mock.getAllEvents()
  mock.eventsByDate(mock.events)
}
