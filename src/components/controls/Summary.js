import React from 'react'

const Summary = ({ product, quantity, location }) => {
  return (
    <div><strong>{quantity}</strong> <i>{product} in</i> <strong>{location}.</strong></div>
  )
}

export default Summary