import React, { FC, useContext, useEffect, useState } from "react";
import DetailsProduct from "./detailsProduct";
import Slider from "./slider";
import "./singleProduct.scss";
import Container from "../container";
import { useLocation } from "react-router-dom";
import { ContextProducts } from "../../store/firebase/context";
import { IProduct } from "../../common/interfaces/interfaces";

interface Props {}

const SingleProduct: FC<Props> = () => {

  const {stateData} = useContext(ContextProducts)
  const location = useLocation()
  const gender= location.pathname.includes('women') ? 'women' : 'men';
  const pathName = location.pathname.split('/')
  const prodId=pathName[pathName.length-1]
  const [prod, setProd] = useState<IProduct|null>(null)
  
  useEffect(() => {
    const singleProduct = stateData.products.filter((item:IProduct)=>item.id === prodId)
    setProd(singleProduct[0])
  }, [gender])

  return (
    <Container>
      <section className="single-product">
        <Slider product = {prod}/>
        <DetailsProduct product={prod}/>
      </section>
    </Container>
  );
};

export default SingleProduct;
