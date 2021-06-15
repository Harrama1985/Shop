import React, { FC, useContext } from 'react'
import { ContextGender } from '../../../store/storeGender/context'
import Select from '../select'
import './detailsProduct.scss'
interface Props {}


const DetailsProduct :FC<Props> = () => {
  const {state} = useContext(ContextGender)
  
  return (
    <div className='details'>
      <h2 className='details__title'>title</h2>
      <p className="details__price">$105</p>
      <Select type='color' selectOption={['green','orange','black']}/>
      <Select type= 'size'selectOption={['l','xl','xxl']}/>
      <button className={`details__add-cart text_in-${state.gender} bg-${state.gender}`}>add to cart</button>
    </div>
   )
 }

export default DetailsProduct