import '@testing-library/jest-dom'
import { cleanup, render, screen } from "@testing-library/react"
import Product from './Product'

afterEach(() => {
    cleanup()
})

const mockProduct1 = {
  "id": "cxd650nuyo",
  "property": {
    "propertyId": "P107801",
    "title": "Courtyard by Marriott Sydney-North Ryde",
    "address": [
      "7-11 Talavera Rd",
      "North Ryde"
    ],
    "previewImage": {
      "url": "https://unsplash.it/145/125/?random",
      "caption": "Image of Courtyard by Marriott Sydney-North Ryde",
      "imageType": "PRIMARY"
    },
    "rating": {
      "ratingValue": 4.5,
      "ratingType": "self"
    }
  },
  "offer": {
    "promotion": {
      "title": "Exclusive Deal",
      "type": "MEMBER"
    },
    "name": "Deluxe Balcony Room",
    "displayPrice": {
      "amount": 329.000000000,
      "currency": "AUD"
    },
    "savings": {
      "amount": 30.000000000,
      "currency": "AUD"
    },
    "cancellationOption": {
      "cancellationType": "NOT_REFUNDABLE"
    }
  }
}

const mockProduct2 = {
  "id": "mesq6mggyn",
  "property": {
    "propertyId": "P107802",
    "title": "Primus Hotel Sydney",
    "address": [
      "339 Pitt St",
      "Sydney"
    ],
    "previewImage": {
      "url": "https://unsplash.it/145/125/?random",
      "caption": "Image of Primus Hotel Sydney",
      "imageType": "PRIMARY"
    },
    "rating": {
      "ratingValue": 5,
      "ratingType": "self"
    }
  },
  "offer": {
    "promotion": {
      "title": "Exclusive Deal",
      "type": "MEMBER"
    },
    "name": "Deluxe King",
    "displayPrice": {
      "amount": -375.000000000,
      "currency": "AUD"
    },
    "savings": null,
    "cancellationOption": {
      "cancellationType": "FREE_CANCELLATION"
    }
  }
}

describe('The product component', () => {
  test('should show free cancellation only when available', () => {
    render(<Product product={mockProduct2}/>)
    const freeCancelElem = screen.queryByText(/Free cancellation/)
    expect(freeCancelElem).toBeInTheDocument()
  })

  test('should not show free cancellation when unavailable', () => {
    render(<Product product={mockProduct1}/>)
    const freeCancelElem = screen.queryByText(/Free cancellation/)
    expect(freeCancelElem).not.toBeInTheDocument()
  })

  test('should show correct savings', () => {
    render(<Product product={mockProduct1}/>)
    const savingsElem = screen.queryByText(/Save \$30~/)
    expect(savingsElem).toBeInTheDocument()
  })

  test('should not show free cancellation when unavailable', () => {
    render(<Product product={mockProduct2}/>)
    const savingsElem = screen.queryByText(/Save \$30~/)
    expect(savingsElem).not.toBeInTheDocument()
  })

  test('should show correct price', () => {
    render(<Product product={mockProduct1}/>)
    const priceElem = screen.queryByText(/\$329/)
    expect(priceElem).toBeInTheDocument()
  })

  test('should not show negative price', () => {
    render(<Product product={mockProduct2}/>)
    const priceElem = screen.queryByText(/\$-375/)
    expect(priceElem).not.toBeInTheDocument()
  })


})