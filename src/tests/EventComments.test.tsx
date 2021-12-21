import React from "react"
import { render, screen } from "@testing-library/react"
import EventCard from "../components/EventCard"
import { shallow, mount, render as enzymeRender } from "enzyme"
import EventComments from "../components/EventComments"

const dummyComments = [
  {
    id: "comment-ghi",
    authorId: "user-jkl",
    comment: "loved to meet ponies",
  },

  {
    id: "comment-jkl",
    authorId: "user-abc",
    comment: "i don't like horses",
  },

  {
    id: "comment-mno",
    authorId: "user-ghi",
    comment: "i made new pony friends",
  },
]

describe("Event comments component", () => {
  test("Event comments components smoke test", () => {
    shallow(<EventComments />)
  })
  test("Component should render comments", () => {
    render(<EventComments comments={dummyComments} />)
    expect(screen.getByText("loved to meet ponies")).toBeInTheDocument()
  })
})
