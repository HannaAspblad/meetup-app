import React from "react"

import User from "../views/User"
import { shallow } from "enzyme"
import { BrowserRouter as Router } from "react-router-dom"

//mock functions
import { getUser, getEvents } from "../views/UserMock"

const dummyUser = {
  id: "user-abc",
  username: "hanna",
  password: "lösenord",
  time: new Date("2012-11-10"),
  bookedEvents: [
    { id: "event-abc", time: new Date("2001-11-10") },
    { id: "event-def", time: new Date("2322-11-10") },
  ],
}

describe("User view", () => {
  test("Smoke test User view", () => {
    shallow(
      <Router>
        <User />
      </Router>
    )
  })
})

describe("User view mock functions", () => {
  test("Should call getUser", () => {
    const getUserMock = jest.fn()

    const mockObject = {
      getUser: getUserMock,
    }

    getUser(mockObject, dummyUser.id)

    expect(getUserMock.mock.calls.length).toBe(1)

    expect(getUserMock).toHaveBeenCalledWith("user-abc")
  })

  test("Should call getEvents", () => {
    const getEventsMock = jest.fn()
    const eventsByDateMock = jest.fn()

    const mockObject = {
      getEventsByIds: getEventsMock,
      eventsByDate: eventsByDateMock,
    }
    const eventIds: any = []

    dummyUser.bookedEvents.forEach((event) => {
      eventIds.push(event.id)
    })

    getEvents(mockObject, eventIds, dummyUser.bookedEvents)

    expect(getEventsMock.mock.calls.length).toBe(1)
    expect(eventsByDateMock.mock.calls.length).toBe(1)

    expect(getEventsMock).toHaveBeenCalledWith(["event-abc", "event-def"])
  })
})
