import { users, events } from "../db/database"

export const getAllEvents = async () => {
  return events
}

export const getEventById = async (id: string) => {
  const meetupById = events.find((meetup) => meetup.id === id)
  return meetupById
}
