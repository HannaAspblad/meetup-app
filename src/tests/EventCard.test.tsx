import React from "react"
import { render, screen } from "@testing-library/react"
import EventCard from "../components/EventCard"
import { shallow, mount } from "enzyme"

//Mock functions
import { signUp } from "../components/EventCardMock"

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
    shallow(<EventCard />)
  })

  test("Should display sign up button", () => {
    shallow(<EventCard />)
    const bookingButton = screen.getByRole("button", { name: "booking" })
    expect(bookingButton).toBeInTheDocument()
  })
})

test("Should render event information", () => {
  shallow(<EventCard event={dummyEvent} />)

  expect(screen.getByText("Ugly cars lovers meetup")).toBeInTheDocument()
  expect(screen.getByText("Stockholm")).toBeInTheDocument()
  expect(
    screen.getByText(`${dummyEvent.time.toLocaleDateString()}`)
  ).toBeInTheDocument()
})

describe("Mock API calls", () => {
  test("Should call signUpToEvent", () => {
    shallow(<EventCard event={dummyEvent} />)
    const signUpToEventMock = jest.fn()

    const mockObject = { signUpToEvent: signUpToEventMock }

    signUp(mockObject, "event-id", "user-id")
    expect(signUpToEventMock.mock.calls.length).toBe(1)
  })
})
