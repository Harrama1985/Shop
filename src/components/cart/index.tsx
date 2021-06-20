import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IprodCart } from "../../common/interfaces/interfaces";
import "./cart.scss";

interface IProps {
  showCart: boolean;
}

const Cart: FC<IProps> = ({ showCart }) => {
  const [products, setProducts] = useState<IprodCart[]>([])
  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products')||'[]')
    setProducts(products)
  }, [localStorage.getItem('products')])
  return (
    <div className={`cart ${showCart ? "cart--show" : ""}`}>
      <header>
        <span>your Items</span>
      </header>
      <div className="cart__list">
        {products.length>0 ? products.map((item:IprodCart)=>{
          return (
            <div>{item.color}</div>
          )
        }):'Your cart is empty, Please add some items'}
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
