import React from "react"
import { render, screen } from "@testing-library/react"
import EventCard from "../components/EventCard"
import { shallow } from "enzyme"
import { BrowserRouter as Router } from "react-router-dom"

const dummyEvent = {
  id: "event-abc",
  title: "Ugly cars lovers meetup",
  location: "Stockholm",
  time: new Date("2011-11-10"),
  comments: [
    {
      id: "comment-abc",
      authorId: "user-jkl",
      comment: "pretty boring meetup",
    },

    {
      id: "comment-def",
      authorId: "user-abc",
      comment: "i agree",
    },
  ],
}

describe("EventCard component", () => {
  test("Smoke test Event card", () => {
    shallow(
      <Router>
        <EventCard />
      </Router>
    )
  })

  test("Should display sign up button", () => {
    render(
      <Router>
        <EventCard />
      </Router>
    )

    const bookingButton = screen.getByRole("button", { name: "booking" })
    expect(bookingButton).toBeInTheDocument()
  })
})

test("Should render event information", () => {
  render(
    <Router>
      <EventCard event={dummyEvent} />
    </Router>
  )

  expect(screen.getByText("Ugly cars lovers meetup")).toBeInTheDocument()
  expect(screen.getByText("Stockholm")).toBeInTheDocument()
  expect(
    screen.getByText(`${dummyEvent.time.toLocaleDateString()}`)
  ).toBeInTheDocument()
})
