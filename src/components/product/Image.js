import React from 'react'
import { Badge, Card } from 'react-bootstrap'
import './Image.css'

const Image = ({img, promo}) => {
  return (
    <Card className="text-white product-card">
      <Card.Img src={img.url} alt={img.caption} className="product-image" />
      <Card.ImgOverlay>
        <Badge bg="white" className="product-badge" >{promo.title}</Badge>
      </Card.ImgOverlay>
    </Card>
  )
}

export default Image