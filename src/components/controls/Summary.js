import React from 'react'

const Summary = ({ product, quantity, location }) => {
  return (
    <div><strong>{quantity}</strong> {product} in <strong>{location}.</strong></div>
  )
}

export default Summary