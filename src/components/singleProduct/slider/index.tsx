import { FC, useContext } from 'react'
import { useState } from 'react'
import { IProduct } from '../../../common/interfaces/interfaces'
import { ContextGender } from '../../../store/storeGender/context'
import './slider.scss'
interface Props {
  product:IProduct | any
}

const Slider :FC<Props> = ({product}) => {
  
  const {state} = useContext(ContextGender)
  const [indexActive, setIndexActive] = useState(1)
  const [newList, setNewList] = useState<string[]>([product?.images[0]])

  const rightClick=()=>{
    if(product?.images.length-1<indexActive) return;
    setIndexActive(prev=>prev=prev+1)
    setNewList([...newList,product?.images[indexActive]])
  }

  const leftClick=()=>{
    if(indexActive===1) return;
    setIndexActive(prev=>prev=prev-1)
    //@ts-ignore
    const oldList= [...newList]
    oldList.pop()
    setNewList(oldList)
  }

  return (
    <div className='slider'>
      <div className="slider__imgs">
        {newList.map((item:string,index:number)=>(
        <div className={`slider__img border-${state.gender}
                        ${'slider__img--active'}`} 
            style={{zIndex:10+index, transform: `translate(-50%,10%) rotate(${index%2===0 ? '-':''}${index*5}deg)`}} key={index}>
          <img src={item}/>
        </div>
        ))}
      </div>
      <div className="slider__arrows">
        <div className="slider__left">
          <span onClick={leftClick}>{'<'}</span>
        </div>
        <div className="slider__right" >
          <span onClick={rightClick}>{'>'}</span>
        </div>
      </div>
    </div>
  )
}

export default Slider