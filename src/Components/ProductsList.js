import React from 'react'

function ProductsList({listproducts}) {
  return (
  
        <ul>
{listproducts.map((aProduct) => {
    return <li>{aProduct.name } - {aProduct.price}</li>
})}
        </ul>
    
  )
}

export default ProductsList
