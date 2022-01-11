import React from "react"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import EventCard from "../components/EventCard"
import { shallow } from "enzyme"
import { BrowserRouter as Router } from "react-router-dom"
import { signUpToEvent } from "../api/api"
jest.mock("../api/api")

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

describe("Mock API calls", () => {
  test("Should call signUpToEvent when pressing button", () => {
    render(
      <Router>
        <EventCard />
      </Router>
    )
    const button = screen.getByRole("button", { name: "booking" })

    fireEvent.click(button)

    expect(signUpToEvent).toHaveBeenCalledTimes(1)
  })
})
