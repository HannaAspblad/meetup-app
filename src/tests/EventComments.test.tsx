import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { shallow } from "enzyme"
import EventComments from "../components/EventComments"
import { addComment } from "../api/api"

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

describe("Event comments component", () => {
  test("Event comments components smoke test", () => {
    shallow(<EventComments />)
  })
  test("Component should render comments", () => {
    render(<EventComments event={dummyEvent} />)
    expect(screen.getByText("pretty boring meetup")).toBeInTheDocument()
  })

  test("Should render input field and submit button to add new comment", () => {
    render(<EventComments />)

    const inputComment = screen.getByRole("textbox", { name: "comment" })
    const submitButton = screen.getByRole("button", {
      name: "submit",
    })

    expect(inputComment).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })

  test("Should clear input field after submitting a comment", () => {
    render(<EventComments />)

    const inputField = screen.getByRole("textbox", { name: "comment" })
    let inputComment = (inputField as HTMLInputElement).value
    inputComment = "amazing meetup"

    fireEvent.change(inputField, { target: { value: "" } })
    inputComment = (inputField as HTMLInputElement).value

    expect(inputComment).toBe("")
  })
})

describe("Mock API calls", () => {
  test("Should call addComments with correct text", () => {
    render(<EventComments event={dummyEvent} />)

    const inputComment = screen.getByRole("textbox", { name: "comment" })
    fireEvent.change(inputComment, { target: { value: "amazing meetup" } })
    const comment = (inputComment as HTMLInputElement).value

    addComment(comment, dummyEvent.id, "user-id")

    expect(addComment).toHaveBeenCalledWith(
      "amazing meetup",
      "event-abc",
      "user-id"
    )
  })
})
