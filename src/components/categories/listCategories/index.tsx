import React, { FC } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './listCategories.scss'
interface Props {
  gender:string;
}

const ListCategories:FC<Props> = ({gender}) => {
  return (
    <div className='listCategories'>
      <h5 className='listCategories__title'>Categories:</h5>
      <ul className='listCategories__links'>
        <li className='listCategories__item'><Link className={gender} to={`/${gender}/products/categories`}>all categories</Link></li>
        <li className='listCategories__item'><Link className={gender} to={`/${gender}/products/accessories`}>accessories</Link></li>
        <li className='listCategories__item'><Link className={gender} to={`/${gender}/products/clothes`}>clothes</Link></li>
        <li className='listCategories__item'><Link className={gender} to={`/${gender}/products/shoes`}>shoes</Link></li>
      </ul>
    </div>
   )
 }

export default ListCategories