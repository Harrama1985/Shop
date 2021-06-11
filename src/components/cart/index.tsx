import { FC } from "react";
import { Link } from "react-router-dom";
import "./cart.scss";

interface IProps {
  showCart: boolean;
}

const Cart: FC<IProps> = ({ showCart }) => {
  return (
    <div className={`cart ${showCart ? "cart--show" : ""}`}>
      <header>
        <span>your Items</span>
      </header>
      <div className="cart__list">
        Your cart is empty, Please add some items
      </div>
      <footer>
        <span>total : $222</span>
        <button>
          <Link to="/checkout">checkout</Link>
        </button>
      </footer>
    </div>
  );
};

export default Cart;
