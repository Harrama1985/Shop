import React, { FC } from 'react'
import './hero.scss'

const Hero:FC = ({children}) => {
  return (
    <section className='hero'>
     {children}
    </section>
   )
 }

export default Hero