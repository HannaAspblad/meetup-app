import React from "react"

import User from "../views/User"
import { shallow } from "enzyme"
import { BrowserRouter as Router } from "react-router-dom"
import { getUser } from "../api/api"
import { render } from "@testing-library/react"

jest.mock("../api/api")

describe("User view", () => {
  test("Smoke test User view", () => {
    shallow(
      <Router>
        <User />
      </Router>
    )
  })
})

describe("User view mock functions", () => {
  test("Should call getUser", () => {
    render(
      <Router>
        <User />
      </Router>
    )

    expect(getUser).toHaveBeenCalledTimes(1)
  })
})
