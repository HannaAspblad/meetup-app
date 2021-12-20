import React from "react"
import { render, screen } from "@testing-library/react"
import Event from "../views/Event"
import { shallow } from "enzyme"

//Mock functions
import { populatePage } from "../views/EventMock"

describe("Start", () => {
  test("Smoke test Event", () => {
    shallow(<Event />)
  })
})

describe("Mock API calls", () => {
  test("Should call getEventById", () => {
    const getEventByIdMock = jest.fn()
    const id = "123"
    const mockObject = { getEventById: getEventByIdMock }

    populatePage(mockObject, id)
    expect(getEventByIdMock.mock.calls.length).toBe(1)
    expect(getEventByIdMock).toHaveBeenCalledWith("123")
  })
})
