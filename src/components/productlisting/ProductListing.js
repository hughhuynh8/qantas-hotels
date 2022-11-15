import React from 'react'
import { ListGroup } from 'react-bootstrap'
import Product from '../product/Product'

const ProductListing = ({ products }) => {
  return (
    <ListGroup variant="flush">
      {products.map((product) => 
        <Product key={product.id} product={product}></Product>
      )}
    </ListGroup>
  )
}

export default ProductListing