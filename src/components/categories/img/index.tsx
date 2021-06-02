import React, { FC } from 'react'
import './img.scss'
interface Props {
  src:string;
  alt:string;
  large?:boolean;
}


const Img:FC<Props> = ({src,alt,large}) => {
  return (
    <div className={`image ${large && 'large'}`}>
      <img src={src} alt={alt}/>
    </div>
   )
 }

export default Img