import React, { FC, useContext, useEffect } from 'react'
import './products.scss'
import firebase from '../../firebase/firebase'
import { ContextProducts } from '../../store/firebase/context'
import { ContextGender } from '../../store/storeGender/context'
import { IProduct } from '../../common/interfaces/interfaces'
import Product from './product'
import { useLocation } from 'react-router'
import Container from '../container'


const Products :FC = ({children}) => {
  const {stateData,dispatch} = useContext(ContextProducts)
  const {state} = useContext(ContextGender)
  const location = useLocation()
  const gender= location.pathname.includes('women') ? 'women' : 'men';
  
  const fetchData =async()=>{
    const snapshot = await firebase.firestore.collection(gender).get()
    const listProducts = snapshot.docs.map((doc)=>{
      return {
        ...doc.data()
        }
    })
  dispatch({type:'GET_DATA',payload:listProducts})
  }

  useEffect(() => {
    fetchData()
  }, [gender])

  return (
    <Container>
      <div className='products'>
        {children}
        <div className="products__list">
          {stateData.products.map((item:IProduct)=>(
            <Product key={item.id} data={item}/>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Products