import React, { FC } from 'react'
import Container from '../container'
import Search from '../search'
import Img from './img'
import ListCategories from './listCategories'
import './categories.scss'

interface Props {
  imgLeft:{
    src:string;
    alt:string;
  }
  imgRight:{
    src:string;
    alt:string;
  }
  gender:string;
}


const Categories:FC<Props> = ({imgLeft,imgRight,gender}) => {
  return (
    <section className='categories'>
      <Container>
        <Img src={imgLeft.src} alt={imgLeft.alt}  large/>
        <div className='categories__filter'>
          <Search active/>
          <ListCategories gender={gender}/>
        </div>
        <Img src={imgRight.src} alt={imgRight.alt} />
      </Container>
    </section>
   )
 }

export default Categories