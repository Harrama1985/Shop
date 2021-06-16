import React, { FC, useContext } from 'react'
import { IProduct } from '../../../common/interfaces/interfaces'
import { ContextGender } from '../../../store/storeGender/context'
import Select from '../select'
import './detailsProduct.scss'
interface Props {
  product:IProduct|any;
}


const DetailsProduct :FC<Props> = ({product}) => {
  const {state} = useContext(ContextGender)
  console.log(product);
  
  return product.title ? (<div className='details'>
      <h2 className='details__title'>{product.title}</h2>
      <p className="details__price">${product.price}</p>
      <Select type='color' selectOption={product.colors}/>
      <Select type= 'size'selectOption={product.size}/> 
      <button className={`details__add-cart text_in-${state.gender} bg-${state.gender}`}>add to cart</button>
    </div>): <div>loading</div>
   
 }

export default DetailsProduct