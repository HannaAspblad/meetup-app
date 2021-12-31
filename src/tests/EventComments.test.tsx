import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { shallow } from "enzyme"
import EventComments from "../components/EventComments"

//Mock functions
import { submit } from "../components/EventCommentsMock"

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

  // test("Should clear input field after submitting a comment", () => {
  //   render(<EventComments />)

  //   const inputField = screen.getByRole("textbox", { name: "comment" })
  //   const submitButton = screen.getByRole("button", {
  //     name: "submit",
  //   })

  //   fireEvent.change(inputField, { target: { value: "amazing meetup" } })
  //   const comment = (inputField as HTMLInputElement).value
  //   fireEvent.click(submitButton)
  //   expect(comment).toBe("")
  // })
})

describe("Mock API calls", () => {
  test("Should call addComments with correct text", () => {
    render(<EventComments event={dummyEvent} />)
    const addCommentMock = jest.fn()
    const inputComment = screen.getByRole("textbox", { name: "comment" })
    fireEvent.change(inputComment, { target: { value: "amazing meetup" } })
    const comment = (inputComment as HTMLInputElement).value
    const mockObject = { addComment: addCommentMock }
    submit(mockObject, comment, "id")
    expect(addCommentMock.mock.calls.length).toBe(1)
    expect(addCommentMock).toHaveBeenCalledWith("amazing meetup", "id")
  })
})
