import React, { FC, useContext } from "react";
import { ContextGender } from "../../../store/storeGender/context";
import "./select.scss";
interface Props {
  type: string;
  selectOption: string[];
}

const Select: FC<Props> = ({ type, selectOption }) => {
  const {state} = useContext(ContextGender);
  return (
    <div className="select">
      <h6 className="select__title">select {type}</h6>
      {type === "color" && (
        <ul className="select__option">
          {selectOption.map((item: string, index: number) => (
            <li className="select__color" key={index} style={{backgroundColor:item}} >
          
            </li>
          ))}
        </ul>
      )}
      {type === "size" && (
        <ul className="select__option">
          {selectOption.map((item: string, index: number) => (
            <li className={`select__size border-${state.gender}`} key={index}>
              {item.toUpperCase()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
