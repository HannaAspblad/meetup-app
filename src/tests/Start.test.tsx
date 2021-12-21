import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import Start, { eventsByDate } from "../views/Start"
import { shallow, mount, render as enzymeRender } from "enzyme"

//mock functions
import { populatePage } from "../views/StartMock"

const dummyEvents = [
  {
    id: "event-test",
    time: new Date("2011-11-10"),
  },

  {
    id: "event-test-2",
    time: new Date("2012-11-10"),
  },

  {
    id: "event-test-3",
    time: new Date("2009-11-10"),
  },
]

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
describe("Start page event sorting", () => {
  test("Should order events by date", () => {
    const ordered = eventsByDate(dummyEvents)
    expect(ordered[0].id).toBe("event-test-2")
  })
})
describe("Start view mock functions", () => {
  test("Should call getAllEvents and eventsByDate", () => {
    const getAllEventsMock = jest.fn()
    const eventsByDateMock = jest.fn()
    const mockObject = {
      getAllEvents: getAllEventsMock,
      eventsByDate: eventsByDateMock,
      events: dummyEvents,
    }

    populatePage(mockObject)

    expect(getAllEventsMock.mock.calls.length).toBe(1)
    expect(eventsByDateMock.mock.calls.length).toBe(1)
    expect(eventsByDateMock).toHaveBeenCalledWith(dummyEvents)
  })
})
