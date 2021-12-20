import React from "react"
import { render, screen } from "@testing-library/react"
import Start from "../views/Start"
import { shallow, mount, render as enzymeRender } from "enzyme"

//mock functions
import { populatePage } from "../views/StartMock"

describe("Start view", () => {
  test("Smoke test Start", () => {
    shallow(<Start />)
  })

  test("Should display error message if no events", () => {
    const wrapper = shallow(<Start />)
    let element
    const errorMessage = wrapper.find(".event-grid > .error-message")
    const eventGrid = wrapper.find(".event-grid > EventCard")

    if (eventGrid.length !== 0) {
      element = eventGrid
    } else {
      element = errorMessage
    }

    expect(element.length).not.toBe(0)
  })
})

describe("Start view mock API calls", () => {
  test("Should call getAllEvents", () => {
    const getAllEventsMock = jest.fn()
    const mockObject = { getAllEvents: getAllEventsMock }

    populatePage(mockObject)
    expect(getAllEventsMock.mock.calls.length).toBe(1)
  })
})
