import React, { FC } from 'react'
import Categories from '../components/categories'

interface Props {}


const Women:FC<Props> = () => {
  const imgLeft ={src:'/images/men1.jpg',alt:'men1'}
  const imgRight ={src:'/images/men2.jpg',alt:'men2'}

  return (
    <Categories imgLeft={imgLeft} imgRight={imgRight} gender='women'/>
  )
 }

export default Women