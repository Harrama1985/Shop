import { useContext } from "react";
import { FC } from "react";
import { BsTrash } from "react-icons/bs";
import { IprodCart } from "../../common/interfaces/interfaces";
import { ContextGender } from "../../store/storeGender/context";
import "./productCart.scss";
import Quantity from "./quantity";
interface IProps{
  data:IprodCart
}

const ProductCart: FC<IProps> = ({data}) => {
  const { state } = useContext(ContextGender);
  console.log(data);
  
  return (
    <li className="productCart">
      <div className="productCart__img">
        <img src={data.img} alt='image' />
      </div>
      <h4 className="productCart__name">{data.title}</h4>
      {/* qte */}
      <Quantity gender={state.gender} />
      <p className="productCart__price">${data.price}</p>
      <button className={`productCart__delete text-${state.gender}`}>
        <BsTrash />
      </button>
    </li>
  );
};

export default ProductCart;
