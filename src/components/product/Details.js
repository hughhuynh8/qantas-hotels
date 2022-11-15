import { Rating } from '@mui/material'
import React from 'react'
import { Card } from 'react-bootstrap'
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';


const Details = ({ title, address, offer, rating}) => {
  const ratings = (rating.ratingType === 'star') ?
    <Rating name="half-rating-read" defaultValue={rating.ratingValue} precision={0.5} readOnly style={{marginLeft: '15px', verticalAlign: 'middle'}} /> :
    <Rating
            name="customized-rating"
            defaultValue={rating.ratingValue}
            precision={0.5}
            icon={<CircleIcon fontSize="small" />}
            emptyIcon={<CircleOutlinedIcon fontSize="small" />}
            readOnly
            style={{marginLeft: '15px', verticalAlign: 'middle'}} 
          />

  return (
    <Card style={{ border: 'none', height: '100%' }}>
      <Card.Body className='d-flex flex-column'>
        <Card.Title>
          {title}
          {ratings}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{address}</Card.Subtitle>
        <Card.Link href="#" style={{ color: 'red'}}>{offer.name}</Card.Link>

        <footer className='mt-auto' style={{ color: 'green'}}>{offer.cancellationOption.cancellationType === 'FREE_CANCELLATION' ? 'Free cancellation' : null}</footer>
      </Card.Body>
    </Card>
  )
}

export default Details