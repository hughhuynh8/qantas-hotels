import React from 'react'
import { Col, ListGroup } from 'react-bootstrap'
import Details from './Details'
import Image from './Image'
import Price from './Price'

const Product = ({ product }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-stretch" style={{paddingLeft: '0'}}>
      <Col sm={2}><Image img={product.property.previewImage} promo={product.offer.promotion}></Image></Col>
      <Col sm={8}>
        <Details title={product.property.title} address={product.property.address} offer={product.offer} rating={product.property.rating}></Details>
      </Col>
      <Col sm={2}>
        <Price price={product.offer.displayPrice.amount} currency={product.offer.displayPrice.currency} nights={1} savings={product.offer?.savings?.amount}  />
        {/* <Price price={123} currency="AUD" nights={1} savings={null} /> */}
        
      </Col>
    </ListGroup.Item>
  )
}

export default Product