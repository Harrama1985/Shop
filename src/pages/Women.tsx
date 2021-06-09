import React, { FC } from 'react'
import Categories from '../components/categories'

interface Props {}


const Women:FC<Props> = () => {
  const imgLeft ={src:'/images/womenTop.jpeg',alt:'men1'}
  const imgRight ={src:'/images/womenBottom.jpeg',alt:'men2'}

  return (
    <Categories imgLeft={imgLeft} imgRight={imgRight} gender='women'/>
  )
 }

export default Women