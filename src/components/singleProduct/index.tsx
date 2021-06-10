import React, { FC } from "react";
import DetailsProduct from "./detailsProduct";
import Slider from "./slider";
import "./singleProduct.scss";
import Container from "../container";

interface Props {}

const SingleProduct: FC<Props> = () => {
  return (
    <Container>
      <section className="single-product">
        <Slider />
        <DetailsProduct />
      </section>
    </Container>
  );
};

export default SingleProduct;
