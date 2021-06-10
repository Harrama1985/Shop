import React, { FC } from 'react'
import './slider.scss'
interface Props {}


const Slider :FC<Props> = () => {
  return (
    <div className='slider'>
      <div className="slider__imgs">

      <img src='/images/men1.jpg'/> 
      </div>
      <div className="slider__arrows">
        <div className="slider__left">
          <span>{'<'}</span>
        </div>
        <div className="slider__right">
          <span>{'>'}</span>
        </div>
      </div>
    </div>
   )
 }

export default Slider