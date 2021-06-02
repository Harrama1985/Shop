import React, { FC, useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import {BsSearch} from 'react-icons/bs'
import './search.scss'

interface IProps{
  active?:boolean;
}
const Search:FC<IProps> = ({active}) => {
  const [search, setSearch] = useState<boolean>(false)

  return !active ? (
    <div className='search'>
      {search && <input className='search__input' placeholder='What are you looking for?'/>}
      {search && <span className='search__icon' onClick={()=>setSearch(false)}><FaTimes/></span>}
      {!search && <span className='search__icon' onClick={()=>setSearch(true)}><BsSearch/></span>}
    </div>
   )
  :(
    <div className='search'>
    <input className='search__input' placeholder='What are you looking for?'/>
    <span className='search__icon'><BsSearch/></span>
  </div>
  )
  }
 

export default Search