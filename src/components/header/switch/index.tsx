import { FC, useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { ContextGender } from '../../../store/storeGender/context'
import './switch.scss'

interface Props {}

const Switch :FC<Props> = () => {

  const history = useHistory()
  
  const {state,dispatch} = useContext(ContextGender)

  const handlerClick=()=>{
    if(state.gender === 'men'){
      dispatch({type:'WOMEN',payload:'women'})
      history.push('/women/products/categories')
    }else{
      dispatch({type:'MEN',payload:'men'})
      history.push('/men/products/categories')
    }
  }
  return (
    <div className='switch'>
      <span className='switch__text'>shop women</span>
      <div className='switch__box' onClick={handlerClick}><span className={`switch__circle ${state.gender}`}></span></div>
      <span className='switch__text'>shop men</span>
    </div>
   )
 }

export default Switch