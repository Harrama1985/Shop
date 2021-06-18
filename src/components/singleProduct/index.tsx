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
  const location = useLocation();
  const gender = location.pathname.includes("women") ? "women" : "men";
  const pathName = location.pathname.split("/");
  const prodId = pathName[pathName.length - 1];
  const [prod, setProd] = useState<IProduct>();

  const getData = async () => {
    const snapshot = await firebase.firestore
      .collection(gender)
      .doc(prodId)
      .get();
    const snapData = snapshot.data();
    const data: IProduct = {
      title: snapData?.title,
      price: snapData?.price,
      colors: snapData?.colors,
      size: snapData?.size,
      images: snapData?.images,
      category: snapData?.category,
      id: snapshot.id,
    };
    setProd(data);
  };
  useEffect(() => {
    getData();
  }, [gender]);

  return (
    <Container>
      <section className="single-product">
        <Slider product={prod} />
        <DetailsProduct product={prod} />
      </section>
    </Container>
  );
};

export default SingleProduct;
