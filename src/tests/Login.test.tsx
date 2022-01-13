import React from "react"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { shallow } from "enzyme"
import Login from "../views/Login"
import { BrowserRouter as Router } from "react-router-dom"

import { logIn } from "../api/api"
jest.mock("../api/api")

describe("Login view", () => {
  test("Smoke test Login view", () => {
    shallow(
      <Router>
        <Login />
      </Router>
    )
  })

  test("Should render input form", () => {
    render(
      <Router>
        <Login />
      </Router>
    )

    const inputUserName = screen.getByRole("textbox", { name: "username" })

    const inputPassword = screen.getByLabelText("password")

    const submitButton = screen.getByRole("button", {
      name: "submit",
    })

    expect(inputUserName).toBeInTheDocument()
    expect(inputPassword).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })
})

describe("Login view API calls", () => {
  test("Should call logIn function", async () => {
    render(
      <Router>
        <Login />
      </Router>
    )

    const button = screen.getByRole("button", { name: "submit" })

    fireEvent.click(button)

    await waitFor(() => {
      expect(logIn).toHaveBeenCalledTimes(1)
    })
  })

  test("Should call logIn function with correct credentials", () => {
    render(
      <Router>
        <Login />
      </Router>
    )

    const inputUserName = screen.getByRole("textbox", { name: "username" })
    const inputPassword = screen.getByLabelText("password")

    fireEvent.change(inputUserName, { target: { value: "hanna" } })
    fireEvent.change(inputPassword, { target: { value: "password" } })

    const username = (inputUserName as HTMLInputElement).value
    const password = (inputPassword as HTMLInputElement).value

    const credentials = { username: username, password: password }

    logIn(credentials)
    expect(logIn).toHaveBeenCalledWith({
      username: "hanna",
      password: "password",
    })
  })
})
