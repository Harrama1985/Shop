import React, { FC, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGender } from '../../store/storeGender/context'
import './logo.scss'
interface IProps{
  notHome?:boolean;
}
const Logo:FC<IProps> = ({notHome}) => {
  const {state} = useContext(ContextGender)


  return (
    <div className={`logo ${state.gender} ${notHome ? 'notHome':''}`} >
      <Link to='/'>
      <h1 className='logo__text'>
        <span className={`logo__black text-${state.gender}`}>sh</span>
        <span className={`logo__white text-${state.gender}`}>op.</span>
      </h1>
      </Link>
    </div>
   )
 }

export default Logo