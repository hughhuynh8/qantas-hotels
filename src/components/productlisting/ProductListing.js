import React from 'react'
import Product from '../product/Product'

const ProductListing = ({ products }) => {
  return (
    <div>
      {products.map((product) => 
        <Product key={product.id} product={product}></Product>
      )}
    </div>
  )
}

export default ProductListing