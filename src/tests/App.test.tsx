import React from "react"

import App from "../App"
import { shallow } from "enzyme"

describe("App", () => {
  test("Smoke test App", () => {
    shallow(<App />)
  })
})
