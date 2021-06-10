import React, { FC } from 'react'
import DetailsProduct from './detailsProduct'
import Slider from './slider'

interface Props {}


const SingleProduct :FC<Props> = () => {
  return (
    <section>
      <Slider/>
      <DetailsProduct/>
    </section>
   )
 }

export default SingleProduct