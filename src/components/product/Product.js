import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <Row>
      <Col sm={2}>{product.property.previewImage.url}</Col>
      <Col sm={8}>{product.property.title}</Col>
      <Col sm={2}>{product.offer.displayPrice.amount}</Col>
    </Row>
  )
}

export default Product