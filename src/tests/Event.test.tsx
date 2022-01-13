import React from "react"
import { render, waitFor } from "@testing-library/react"
import Event from "../views/Event"
import { shallow } from "enzyme"
import { getEventById } from "../api/api"
import { BrowserRouter as Router } from "react-router-dom"

jest.mock("../api/api")

describe("Event view", () => {
  test("Smoke test Event view", () => {
    shallow(<Event />)
  })

  test("Should render Event card component", () => {
    const wrapper = shallow(<Event />)
    const eventWrapper = wrapper.find(".event-comments > EventComments")
    expect(eventWrapper.length).not.toBe(0)
  })

  test("Should render Event comments component", () => {
    const wrapper = shallow(<Event />)
    const eventWrapper = wrapper.find(".page-wrapper >div > EventCard")
    expect(eventWrapper.length).not.toBe(0)
  })
})

describe("Mock API calls", () => {
  test("Should call getEventById", async () => {
    render(
      <Router>
        <Event />
      </Router>
    )
    await waitFor(() => {
      expect(getEventById).toHaveBeenCalledTimes(1)
    })
  })
})
