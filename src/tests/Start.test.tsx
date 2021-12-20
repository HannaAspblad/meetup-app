import React from "react"
import { render, screen } from "@testing-library/react"
import Start from "../views/Start"
import { shallow } from "enzyme"

import { populatePage } from "../views/StartMock"

describe("Start", () => {
  test("Smoke test Start", () => {
    shallow(<Start />)
  })
})

describe("Mock API calls", () => {
  test("Should call getAllEvents", () => {
    const getAllEventsMock = jest.fn()
    const mockObject = { getAllEvents: getAllEventsMock }

    populatePage(mockObject)
    expect(getAllEventsMock.mock.calls.length).toBe(1)
  })
})
