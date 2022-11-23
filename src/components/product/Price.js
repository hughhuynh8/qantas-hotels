import React from 'react'
import { Card } from 'react-bootstrap'

const Price = ({price, currency, nights, savings}) => {
  let dispPrice = price;
  if(price < 0) {
    console.log("Invalid price ", price)
    dispPrice = "Invalid price"
  }
  return (
    <Card style={{ border: 'none', height: '100%' }}>
      <Card.Body className='d-flex flex-column justify-content-center'>
        <Card.Subtitle className="mb-2 text-muted text-end">{nights} night total {currency}</Card.Subtitle>
        <Card.Title className='text-end'>${dispPrice}</Card.Title>
        {savings ? <footer style={{position: 'absolute', bottom: '16px', right: '16px', color: 'red'}}>Save ${savings}~</footer> : null}
      </Card.Body>
    </Card>
  )
}

export default Price