import React, { FC, useState } from 'react'
import Logo from '../Logo'
import {AiOutlineShopping} from 'react-icons/ai'
import Switch from './switch'
import './header.scss'
import Search from '../search'
import { useLocation } from 'react-router'
interface IProps{
  gender:string;
}
const Header:FC<IProps> = ({gender}) => {
  const location = useLocation()
  const isPathName= location.pathname !== '/women' && location.pathname !== '/men'
  return (
    <header className='header'>
      <Logo notHome/>
      {isPathName && <Switch/>}
      <div className='header__icons'>
        {isPathName && <Search/>}
        <span className='header__icon'><AiOutlineShopping /></span>
      </div>
    </header>
  )
}

export default Header