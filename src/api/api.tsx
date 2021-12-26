import { users, events } from "../db/database"

export const getAllEvents = async () => {
  return events
}

export const getEventById = async (id: string) => {
  const meetupById = events.find((meetup) => meetup.id === id)
  return meetupById
}

export const logIn = async (user: any) => {
  const existingUser = users.find((u) => u.username === user.username)

  if (existingUser && existingUser.password === user.password) {
    return true
  }

  return false
}
