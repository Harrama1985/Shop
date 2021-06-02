import React, { FC } from 'react'
import Categories from '../components/categories'

interface Props {}


const Men:FC<Props> = () => {
  const imgLeft ={src:'/images/men1.jpg',alt:'men1'}
  const imgRight ={src:'/images/men2.jpg',alt:'men2'}

  return (
    <Categories imgLeft={imgLeft} imgRight={imgRight} gender='men'/>
  )
}

export default Men