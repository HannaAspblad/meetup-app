import React from "react"
// import { render, screen } from "@testing-library/react"
import App from "../App"
import { shallow, mount, render as enzymeRender } from "enzyme"

describe("App", () => {
  test("Smoke test App", () => {
    // mount(<App />)
    shallow(<App />)
  })
})
