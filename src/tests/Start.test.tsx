import React from "react"

import Start from "../views/Start"

import { shallow } from "enzyme"

import { render } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import { getAllEvents } from "../api/api"

jest.mock("../api/api")

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

describe("Start view mock functions", () => {
  test("Should call getAllEvents", () => {
    render(
      <Router>
        <Start />
      </Router>
    )

    expect(getAllEvents).toHaveBeenCalled()
  })
})
