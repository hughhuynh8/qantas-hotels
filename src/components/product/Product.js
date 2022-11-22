import React from 'react'
import { Col, ListGroup } from 'react-bootstrap'
import Details from './Details'
import Image from './Image'
import Price from './Price'

const Product = ({ product }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-stretch row px-0">
      <Col lg={2} md={3} xs={12}><Image img={product.property.previewImage} promo={product.offer.promotion}></Image></Col>
      <Col lg={8} md={6} xs={8}>
        <Details title={product.property.title} address={product.property.address} offer={product.offer} rating={product.property.rating}></Details>
      </Col>
      <Col lg={2} md={3} xs={4}>
        <Price price={product.offer.displayPrice.amount} currency={product.offer.displayPrice.currency} nights={1} savings={product.offer?.savings?.amount}  />
      </Col>
    </ListGroup.Item>
  )
}

export default Product