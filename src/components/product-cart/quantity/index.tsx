import { FC } from "react";
import "./quantity.scss";

interface IProps {
  gender: string;
}
const Quantity: FC<IProps> = ({ gender }) => {
  return (
    <div className="qte">
      <button className="qte__plus">-</button>
      <span className={`qte__number border-${gender}  `}>1</span>
      <button className="qte__plus">+</button>
    </div>
  );
};

export default Quantity;
