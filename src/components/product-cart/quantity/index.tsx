import { FC, useState } from "react";
import "./quantity.scss";

interface IProps {
  gender: string;
}
const Quantity: FC<IProps> = ({ gender }) => {
  const [count, setCount] = useState<number>(1);
  return (
    <div className="qte">
      <button
        onClick={() => setCount((prev) => (prev = prev - 1))}
        className={`qte__plus text-${gender}`}
      >
        -
      </button>

      <span className={`qte__number border-${gender}  `}>{count}</span>
      <button
        onClick={() => setCount((prev) => (prev = prev + 1))}
        className={`qte__plus text-${gender}`}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
