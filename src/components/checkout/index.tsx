import { FC, useEffect, useState } from "react";
import ProductCart from "../product-cart";
import Container from "../container";
import "./checkout.scss";
import Stripe from "./stripe";
import { IprodCart } from "../../common/interfaces/interfaces";
const Checkout: FC = ({}) => {
  const [products, setProducts] = useState<IprodCart[]>([])
  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products')||'[]')
    setProducts(products)
  }, [localStorage.getItem('products')])
  return (
    <Container>
      <section className="checkout">
        <div className="checkout__box">
          <h3 className="checkout__title">We are glad you're here!</h3>
          <ul className="checkout__items">
            {products.length>0 ? products.map((item:IprodCart)=>(<ProductCart key={item.id} data={item}/>)) : 'Your cart is empty, Please add some items'}
          </ul>
          <footer className="checkout__fixed">
            <p className="checkout__total">Total</p>
            <p className="checkout__price">$333.00</p>
          </footer>
        </div>
        {/* stripe  */}
        <div className="checkout__stripe">
          <Stripe />
        </div>
      </section>
    </Container>
  );
};

export default Checkout;
