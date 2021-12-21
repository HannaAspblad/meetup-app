import React from "react"
import { render, screen } from "@testing-library/react"
import { shallow, mount, render as enzymeRender } from "enzyme"
import Login from "../views/Login"

//mock functions
import { submit } from "../views/LoginMock"

describe("Login view", () => {
  test("Smoke test Login view", () => {
    shallow(<Login />)
  })
})

describe("Login view API calls", () => {
  test("Should call logIn function with correct credentials", () => {
    render(<Login />)
    const logInMock = jest.fn()
    const mockObject = { logIn: logInMock }
    const credentials = { name: "hanna", password: "password" }
    submit(mockObject, credentials)
    expect(logInMock).toHaveBeenCalledWith({
      name: "hanna",
      password: "password",
    })
  })
})
