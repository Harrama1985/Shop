import React, { FC } from 'react'
import Categories from '../components/categories'

interface Props {}


const Men:FC<Props> = () => {
  const imgLeft ={src:'/images/menTop.jpeg',alt:'men1'}
  const imgRight ={src:'/images/menBottom.jpeg',alt:'men2'}

  return (
    <Categories imgLeft={imgLeft} imgRight={imgRight} gender='men'/>
  )
}

export default Men