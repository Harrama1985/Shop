import { useContext } from "react";
import { FC } from "react";
import { BsTrash } from "react-icons/bs";
import { ContextGender } from "../../store/storeGender/context";
import "./productCart.scss";
import Quantity from "./quantity";
const ProductCart: FC = ({}) => {
  const { state } = useContext(ContextGender);
  return (
    <li className="productCart">
      <div className="productCart__img">
        <img src="/images/men1.jpg" alt="img-product" />
      </div>
      <h4 className="productCart__name">name of product</h4>
      {/* qte */}
      <Quantity gender={state.gender} />
      <p className="productCart__price">$333</p>
      <button className={`productCart__delete text-${state.gender}`}>
        <BsTrash />
      </button>
    </li>
  );
};

export default ProductCart;
