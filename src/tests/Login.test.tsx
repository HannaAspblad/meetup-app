import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { shallow, mount, render as enzymeRender } from "enzyme"
import Login from "../views/Login"

//mock functions
import { submit } from "../views/LoginMock"

describe("Login view", () => {
  test("Smoke test Login view", () => {
    shallow(<Login />)
  })

  test("Should render input form", () => {
    render(<Login />)

    const inputUserName = screen.getByRole("textbox", { name: "username" })
    // const inputPassword = screen.getByRole("textbox", { name: "password" })
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
  test("Should call logIn function", () => {
    render(<Login />)

    const logInMock = jest.fn()
    const mockObject = { logIn: logInMock }
    const credentials = { name: "hanna", password: "password" }
    submit(mockObject, credentials)

    expect(logInMock).toHaveBeenCalledTimes(1)
    expect(logInMock).toHaveBeenCalledWith({
      name: "hanna",
      password: "password",
    })
  })

  test("Should call logIn function with correct credentials", () => {
    render(<Login />)

    const logInMock = jest.fn()

    const inputUserName = screen.getByRole("textbox", { name: "username" })
    const inputPassword = screen.getByLabelText("password")

    const mockObject = { logIn: logInMock }

    fireEvent.change(inputUserName, { target: { value: "hanna" } })
    fireEvent.change(inputPassword, { target: { value: "password" } })

    const username = (inputUserName as HTMLInputElement).value
    const password = (inputPassword as HTMLInputElement).value

    const credentials = { username: username, password: password }

    submit(mockObject, credentials)
    expect(logInMock).toHaveBeenCalledWith({
      username: "hanna",
      password: "password",
    })
  })
})
