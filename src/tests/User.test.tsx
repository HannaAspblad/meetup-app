import React from "react"
import { render, screen } from "@testing-library/react"
import User from "../views/User"
import { shallow } from "enzyme"

//mock functions
import { getUser } from "../views/UserMock"

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
})
