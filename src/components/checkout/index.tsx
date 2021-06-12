import { FC } from "react";
import ProductCart from "../product-cart";
import Container from "../container";
import "./checkout.scss";
import Stripe from "./stripe";
const Checkout: FC = ({}) => {
  return (
    <Container>
      <section className="checkout">
        <div className="checkout__box">
          <h3 className="checkout__title">We are glad you're here!</h3>
          <ul className="checkout__items">
            <ProductCart />
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
