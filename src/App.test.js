import '@testing-library/jest-dom'
import { cleanup, render, screen } from "@testing-library/react"
import App from "./App"

afterEach(() => {
    cleanup()
})

test("it should have the correct title", () => {
})