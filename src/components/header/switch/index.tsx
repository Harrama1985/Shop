import { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import './switch.scss'

interface Props {}

const Switch :FC<Props> = () => {
  const [gender, setGender] = useState<string>('')
  const history = useHistory()
  useEffect(() => {
    setGender(history.location.pathname.slice(1))
  }, [])
  const handlerClick=()=>{
    setGender(prevState=> prevState==='men' ? 'women':'men')
  }
  return (
    <div className='switch'>
      <span className='switch__text'>shop women</span>
      <div className='switch__box' onClick={handlerClick}><span className={`switch__circle ${gender}`}></span></div>
      <span className='switch__text'>shop men</span>
    </div>
   )
 }

export default Switch