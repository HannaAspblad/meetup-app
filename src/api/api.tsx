import { users, events } from "../db/database"
import { v4 as uuidv4 } from "uuid"

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
    return existingUser.id
  }

  return false
}

export const addComment = async (comment: string, id: string) => {
  const user = sessionStorage.getItem("User")

  const event = events.findIndex((event) => event.id === id)

  if (event && event !== undefined) {
    events[event].comments.push({
      id: uuidv4(),
      authorId: user,
      comment: comment,
    })
    console.log(events[event].comments)
    return events[event].comments
  }
}

export const signUpToEvent = async (eventId: string, userId: any) => {
  const user = users.findIndex((user) => user.id === userId)
  console.log(users[user].bookedEvents)

  users[user].bookedEvents.push({
    id: eventId,
  })

  return users[user].bookedEvents
}

export const getUser = async (userId: any) => {
  const user = users.findIndex((user) => user.id === userId)

  return users[user]
}
export const getEventsByIds = async (eventIds: any) => {
  const userEvents: any = []
  for (let currentId of eventIds) {
    userEvents.push(events.find((event) => event.id === currentId))
  }

  console.log(userEvents)

  return userEvents
}
