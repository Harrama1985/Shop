import React, { FC, useContext } from 'react'
import { ContextGender } from '../../../store/storeGender/context'
import './img.scss'
interface Props {
  src:string;
  alt:string;
  large?:boolean;
}


const Img:FC<Props> = ({src,alt,large}) => {
  const {state} = useContext(ContextGender)
  return (
    <div className={`image border-${state.gender} ${large && 'large'}`}>
      <img src={src} alt={alt}/>
    </div>
   )
 }

export default Img