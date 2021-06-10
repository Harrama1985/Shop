import React, { FC } from 'react'
import { IProduct } from '../../../common/interfaces/interfaces';
import './product.scss'
interface Props {
  data:IProduct
}

const Product :FC<Props> = ({data}) => {

  return (
      <div className='product'>
        <div className="product__image">
          <img src={data.images[0]} alt="img" className="product__img" />
        </div>
        <div className="product__content">
          <h3 className="product__title">{data.title}</h3>
          <p className="product__price">${data.price}</p>
        </div>
      </div>
)
 }

export default Product