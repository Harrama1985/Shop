import React, { FC, MouseEvent, useContext, useEffect, useRef, useState } from 'react'
import {AiOutlineLeft} from 'react-icons/ai'
import { ContextGender } from '../../store/storeGender/context'
import './dropDawn.scss'

interface Props {
  handlerClick:(item:string) => void;
  list:string[];
  paramId?:string;
  sort?:string
}


const DropDawn :FC<Props> = ({handlerClick,list,paramId,sort}) => {
  
  const [active, setActive] = useState(false)
  
  const ref = useRef<HTMLDivElement>(null)

  const {state} = useContext(ContextGender)

  useEffect(() => {
    //@ts-ignore
    const bodyClick = (event)=>{
      if(ref.current?.contains(event.target)){
        return;
      }else{
        setActive(false)
      }
    }
    document.body.addEventListener('click',bodyClick)
    return ()=> document.body.removeEventListener('click',bodyClick)
  }, [])
  const displayClass =(item:string)=>{
    if(sort){
      return item === sort && 'dropdawn__item--active'
    }else{
      return item === paramId && 'dropdawn__item--active'
    }
    
  }
  return (
    <div className={`dropdawn text-${state.gender}`} onClick={()=>setActive(prev=>!prev)} ref={ref}>
      <div className={`dropdawn__label border-${state.gender}`}>
        <h4 className='dropdawn__title'>{ sort ? sort : paramId}</h4>
        <span className='dropdawn__icon'><AiOutlineLeft/></span>
      </div>
      {active && <ul className='dropdawn__list'>
        {list.map((item,i)=>{
          return(<li className={`dropdawn__item ${displayClass(item)} border-${state.gender} ${state.gender}`} 
                      key={i} onClick={()=>handlerClick(item)}>{item}</li>)
        })}
      </ul>}
    </div>
   )
 }

export default DropDawn