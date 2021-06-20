import React, { FC, useContext, useEffect, useState } from "react";
import { IprodCart, IProduct } from "../../../common/interfaces/interfaces";
import { ContextGender } from "../../../store/storeGender/context";
import Select from "../select";
import "./detailsProduct.scss";
interface Props {
  product: IProduct | any;
}

const DetailsProduct: FC<Props> = ({ product }) => {
  const { state } = useContext(ContextGender);
  const [error, setError] = useState({})
  const [prod, setProd] = useState<IprodCart>({
    id:'',
    title:'',
    price:0,
    color:'',
    size:'',
    qte:0,
    img:''
  })

  useEffect(() => {
    product?.id && setProd(prevState=>{
      return {
        ...prevState,
        id:product.id,
        title:product.title,
        price:product.price,
        qte:1,
        img:product.images[0]
      }
    })
  }, [product])

  const selectColor=(item:string)=>{
    setProd(prevState=>{
      return {
        ...prevState,
        color:item
      }
    })
  }

  const selectSize=(item:string)=>{
    setProd(prevState=>{
      return {
        ...prevState,
        size:item
      }
    })
  }

  const addToCart =()=>{
    const products = JSON.parse(localStorage.getItem('products')||'[]')
    if(prod.id){
      if(!prod.color){
        setError(prev=>{return {...prev,color:'Choose color'}})
      }else if(!prod.size){
        setError(prev=>{return {...prev,size:'Choose your size'}})
      }else{
        localStorage.setItem('products',JSON.stringify([...products,prod]))
      }
    }
  }

  return product?.title ? (
    <div className="details">
      <h2 className="details__title">{product.title}</h2>
      <p className="details__price">${product.price}</p>
      <Select type="color" selectOption={product.colors} onSelect={selectColor}/>
      <Select type="size" selectOption={product.size} onSelect={selectSize}/>
      <button
        className={`details__add-cart text_in-${state.gender} bg-${state.gender}`}
        onClick={addToCart}
      >
        add to cart
      </button>
    </div>
  ) : (
    <div>loading</div>
  );
};

export default DetailsProduct;
