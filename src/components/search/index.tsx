import React, { FC, useContext, useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import {BsSearch} from 'react-icons/bs'
import './search.scss'
import { ContextGender } from '../../store/storeGender/context'

interface IProps{
  active?:boolean;
}
const Search:FC<IProps> = ({active}) => {
  const [search, setSearch] = useState<boolean>(false)
  const {state} = useContext(ContextGender)
  
  return !active ? (
    <div className={`search border-${state.gender}`}>
      {search && <input className='search__input' placeholder='What are you looking for?'/>}
      {search && <span className='search__icon' onClick={()=>setSearch(false)}><FaTimes/></span>}
      {!search && <span className='search__icon' onClick={()=>setSearch(true)}><BsSearch/></span>}
    </div>
   )
  :(
    <div className={`search border-${state.gender}`}>
    <input className='search__input' placeholder='What are you looking for?'/>
    <span className='search__icon'><BsSearch/></span>
  </div>
  )
  }
 

export default Search