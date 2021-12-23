import React from "react"
import { render, screen } from "@testing-library/react"
import EventCard from "../components/EventCard"
import { shallow, mount, render as enzymeRender } from "enzyme"

const dummyEvent = {
  id: "event-abc",
  title: "Ugly cars lovers meetup",
  location: "Stockholm",
  time: new Date("2011-11-10"),
}

describe("EventCard component", () => {
  test("Smoke test Event card", () => {
    shallow(<EventCard />)
  })
})

test("Should render event information", () => {
  render(<EventCard event={dummyEvent} />)

  expect(screen.getByText("Ugly cars lovers meetup")).toBeInTheDocument()
  expect(screen.getByText("Stockholm")).toBeInTheDocument()
  expect(
    screen.getByText(`${dummyEvent.time.toLocaleDateString()}`)
  ).toBeInTheDocument()
})
