import React from 'react'
import ProductsList from './ProductsList'


function ProductTable({products}) {
  return (
    <div>
    <p>Products</p>
    <ProductsList listproducts = {products}/>
    </div>
  )
}

export default ProductTable