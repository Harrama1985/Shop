import  { FC} from 'react'
import { Link } from 'react-router-dom'
import './inner.scss'

interface IProps{
  gender:string;
  isHover:()=>void;
  notHover:()=>void;
}

const Inner:FC<IProps> = ({gender,isHover,notHover}) => {

  return (
    <div className={`inner ${gender}`} 
        onMouseOver={isHover} 
        onMouseLeave={notHover}>
      <div className="inner__images">
        <div className="inner__img--top">
          <img src={`/images/${gender}Top.jpeg`} alt={`${gender}Top`} />
        </div>
        <div className="inner__img--bottom">
        <img src={`/images/${gender}Bottom.jpeg`} alt={`${gender}Bottom`} />
        </div>
      </div>
      <div className='inner__content'>
        <span className='inner__subTitle'>shop</span>
        <Link to={gender} 
              className='inner__title'
              onClick={isHover}
              >{gender}</Link>
      </div>
    </div>
  )
}

export default Inner