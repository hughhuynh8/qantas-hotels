import '@testing-library/jest-dom'
import { cleanup, render, screen } from "@testing-library/react"
import App from "./App"

afterEach(() => {
    cleanup()
})

test("it should have the correct title", () => {
    render(<App/>)
    const text = screen.getByRole('heading', { name: /Qantas/i })
    expect(text).toBeInTheDocument()   
})