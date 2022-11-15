import '@testing-library/jest-dom'
import { cleanup, render, screen } from "@testing-library/react"
import Summary from './Summary';

afterEach(() => {
    cleanup()
})

describe('The summary component', () => {
    test('should show correct quantity value', () => {
      const quantity = 5
      render(<Summary quantity={quantity}/>)
      const quantityElem = screen.getByText(quantity)
      expect(quantityElem).toBeVisible()
    })

    test('should show correct product value', () => {
      const product = "hotels"
      render(<Summary product={product}/>)
      const productElem = screen.getByText(new RegExp(product, "i"))
      expect(productElem).toBeInTheDocument()
    })

    test('should show correct location value', () => {
      const location = "Melbourne"
      render(<Summary location={location}/>)
      const locationElem = screen.getByText(new RegExp(location, "i"))
      expect(locationElem).toBeVisible()
    })
  
  });