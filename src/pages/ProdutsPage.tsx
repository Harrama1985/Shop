import React, { FC, useContext, useState } from 'react'
import { isTemplateExpression } from 'typescript';
import Container from '../components/container';
import DropDawn from '../components/dropDawn';
import Products from '../components/products';
import { ContextGender } from '../store/storeGender/context';

interface Props {
  match:{
    params:{
      id:string;
    }
  }
  history:any;
}

const ProductsPage :FC<Props> = ({match,history}) => {

  const paramId = match.params.id
  const list =['categories','clothes','shoes','accessories']
  const sortList = ['price low to high','price higt to low']
  const {state} = useContext(ContextGender)
  const [sort, setSort] = useState<string>('sort')

  const [filterPrice, setFilterPrice] = useState<string>('')
  
  const handlerClick =(item:string)=>{
    history.push(`/${state.gender}/products/${item}`)
  }
  const handlerSort =(item:string)=>{
    setFilterPrice(item)
    setSort(item)
  }
  
  return (
    <Products filterPrice={filterPrice}>
      <Container>
        <div className='products__nav'>
          <DropDawn list={list} paramId={paramId} handlerClick={handlerClick}/>
          <DropDawn list={sortList} sort={sort} handlerClick={handlerSort}/>
        </div>
      </Container>
    </Products>
  )
}

export default ProductsPage