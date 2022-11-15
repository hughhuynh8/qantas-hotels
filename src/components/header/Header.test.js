import '@testing-library/jest-dom'
import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import Header from './Header'

afterEach(() => {
    cleanup()
})

describe('The header component', () => {
    test('alt contains correct value', () => {
      const altText = "image alt text for the logo"
      render(<Header imgSrc="../../images/logo.png" altText={altText}/>)
      const testImage = screen.queryByRole("img")
      expect(testImage).toHaveAttribute('alt', altText);
    })
  
    test('contains correct homepage link', () => {
        const homepageUrl = "/home/page"
        render(<Header homeUrl={homepageUrl} />)
        const testLink = screen.getByRole("link")
        expect(testLink.href).toContain(homepageUrl);
      })
  });