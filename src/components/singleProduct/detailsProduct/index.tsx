import React, { FC } from 'react'

interface Props {}


const DetailsProduct :FC<Props> = () => {
  return (
    <div className='details'>
      <h2 className='details__title'>title</h2>
      <p className="details__title">$105</p>
      
    </div>
   )
 }

export default DetailsProduct