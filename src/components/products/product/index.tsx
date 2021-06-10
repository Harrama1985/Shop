import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import { IProduct } from '../../../common/interfaces/interfaces';
import './product.scss'
interface Props {
  gender: string
  data:IProduct
}

const Product :FC<Props> = ({data, gender}) => {
  return (
      <div className='product'>
            <Link to={`/${gender}/products/${data.category}/${data.id}`} >
        
        <div className="product__image">
          <img src={data.images[0]} alt="img" className="product__img" />
        </div>
        <div className="product__content">
          <h3 className="product__title">{data.title}</h3>
          <p className="product__price">${data.price}</p>
        </div>
        </Link>
      </div>
)
 }

export default Product