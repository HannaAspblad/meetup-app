import React from "react"
import { render, screen } from "@testing-library/react"
import Event from "../views/Event"
import { shallow } from "enzyme"

//Mock functions
import { populatePage } from "../views/EventMock"

describe("Event view", () => {
  test("Smoke test Event view", () => {
    shallow(<Event />)
  })

  test("Should render Event comments component", () => {
    const wrapper = shallow(<Event />)
    const comments = wrapper.find(".event-comments > EventComments")
    expect(comments.length).not.toBe(0)
  })

  test("Should render Event card component", () => {
    const wrapper = shallow(<Event />)
    const comments = wrapper.find(".event-card > Card")
    expect(comments.length).not.toBe(0)
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
