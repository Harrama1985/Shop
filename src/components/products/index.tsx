import React, { FC, useContext, useEffect, useState } from 'react'
import './products.scss'
import firebase from '../../firebase/firebase'
import { ContextProducts } from '../../store/firebase/context'
import { ContextGender } from '../../store/storeGender/context'
import { IProduct } from '../../common/interfaces/interfaces'
import Product from './product'
import { useLocation } from 'react-router'
import Container from '../container'
import { BsExclamationSquareFill } from 'react-icons/bs'

interface IProps{
  filterPrice:string
}
const Products :FC<IProps> = ({children,filterPrice}) => {

  const {stateData,dispatch} = useContext(ContextProducts)
 
  const location = useLocation()
  const gender= location.pathname.includes('women') ? 'women' : 'men';
  const pathName:string[] = location.pathname.split('/');
  const filterCategory:string = pathName[pathName.length-1]


  const fetchData =async()=>{

    let snapshot

    if(filterCategory == 'categories'){

      if(filterPrice == ''){
        snapshot = await firebase.firestore.collection(gender).get()
      }else if(filterPrice =='price low to high'){
        snapshot = await firebase.firestore.collection(gender).orderBy('price','desc').get()
      }else if(filterPrice =='price higt to low'){
        snapshot = await firebase.firestore.collection(gender).orderBy('price','asc').get()
      }

    }else{

      if(filterPrice == ''){
        snapshot = await firebase.firestore.collection(gender).where('category','==',filterCategory).get()
      }else if(filterPrice =='price low to high'){
        snapshot = await firebase.firestore.collection(gender).where('category','==',filterCategory).orderBy('price','asc').get()
      }else if(filterPrice =='price higt to low'){
        snapshot = await firebase.firestore.collection(gender).where('category','==',filterCategory).orderBy('price','desc').get()
      }
    }
    //@ts-ignore
    const listProducts = snapshot.docs.map((doc)=>{
      return {
        id:doc.id,
        ...doc.data()
        }
    })

    dispatch({type:'GET_DATA',payload:listProducts})
  }

  useEffect(() => {

    fetchData()
  }, [gender,filterCategory,filterPrice])

  return (
    <Container>
      <div className='products'>
        {children}
        <div className="products__list">
          {stateData.products.map((item:IProduct)=>(
            
              <Product gender={gender} data={item} key={item.id}/>
          
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Products