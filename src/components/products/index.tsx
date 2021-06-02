import React, { FC } from 'react'
import './products.scss'
const Products :FC = ({children}) => {

  return (
    <div className='products'>
      {children}
    </div>
  )
}

export default Products