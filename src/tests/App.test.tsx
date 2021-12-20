import React from "react"
import { render, screen } from "@testing-library/react"
import App from "../App"
import { shallow } from "enzyme"

describe("App", () => {
  test("Smoke test App", () => {
    shallow(<App />)
  })
})
