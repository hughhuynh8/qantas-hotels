import React from 'react'

const Summary = ({ product, quantity, location }) => {
  return (
    <div style={{ marginTop: '10px' }}><strong>{quantity}</strong> <i>{product} in</i> <strong>{location}.</strong></div>
  )
}

export default Summary