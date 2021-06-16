import React, { FC, useContext, useEffect, useState } from "react";
import DetailsProduct from "./detailsProduct";
import Slider from "./slider";
import "./singleProduct.scss";
import Container from "../container";
import { useLocation } from "react-router-dom";
import { IProduct } from "../../common/interfaces/interfaces";
import firebase from "../../firebase/firebase";

interface Props {}

const SingleProduct: FC<Props> = () => {

  const location = useLocation()
  const gender= location.pathname.includes('women') ? 'women' : 'men';
  const pathName = location.pathname.split('/')
  const prodId=pathName[pathName.length-1]
  const [prod, setProd] = useState<IProduct|null>(null)
  
  const getData= async ()=>{
    
  }
  useEffect(() => {
    
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
