import React from "react"

import User from "../views/User"
import { shallow } from "enzyme"

//mock functions
import { getUser, getEvents } from "../views/UserMock"

const dummyUser = {
  id: "user-abc",
  username: "hanna",
  password: "lösenord",
  bookedEvents: [{ id: "event-abc" }, { id: "event-def" }],
}

describe("User view", () => {
  test("Smoke test User view", () => {
    shallow(<User />)
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

  test("Should call getEventsByIds", () => {
    const getEventsMock = jest.fn()

    const mockObject = {
      getEventsByIds: getEventsMock,
    }
    const events: any = []
    dummyUser.bookedEvents.forEach((event) => {
      events.push(event.id)
    })

    getEvents(mockObject, events)

    expect(getEventsMock.mock.calls.length).toBe(1)

    expect(getEventsMock).toHaveBeenCalledWith(["event-abc", "event-def"])
  })
})
