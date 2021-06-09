import React, { FC } from 'react'
import { IProduct } from '../../../common/interfaces/interfaces';

interface Props {
  data:IProduct
}

const Product :FC<Props> = ({data}) => {

  console.log(data.images[0]);
  
  
  return (
    <div className='product'>
      <div className="product__image">
        <img src={''} alt="img" className="product__img" />
      </div>
      <div className="product__content">
        <h3 className="ptoduct__title">{data.title}</h3>
        <p className="product__price">{data.colors}</p>
      </div>
    </div>
   )
 }

export default Product