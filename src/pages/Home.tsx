import React, { FC, useContext, useEffect} from 'react'
import Hero from '../components/hero'
import Inner from '../components/inner'
import Logo from '../components/Logo'
import { ContextGender } from '../store/storeGender/context'

const Home :FC= () => {

  const {dispatch} = useContext(ContextGender)
  
  useEffect(() => {
    dispatch({type:'WOMEN',payload:''})
  }, [])

  return (
    <div>
      <Logo/>
      <Hero>
        <Inner gender='women' 
              isHover={()=>dispatch({type:'WOMEN',payload:'women'})}
              notHover={()=>dispatch({type:'WOMEN',payload:''})}
                />
        <Inner gender='men' 
                isHover={()=>dispatch({type:'MEN',payload:'men'})}
                notHover={()=>dispatch({type:'WOMEN',payload:''})} />
      </Hero> 
    </div>

  )
}

export default Home