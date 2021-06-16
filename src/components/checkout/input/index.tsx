import { FC } from "react";
import "./input.scss";
interface IProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  required: boolean;
  autoComplete: string;
  value: string;
  onChange: () => void;
}
const Input: FC<IProps> = ({
  label,
  id,
  type,
  placeholder,
  required,
  autoComplete,
  value,
  onChange,
}) => {
  return (
    <div className="input">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        // autoComplete={autoComplete}
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id} className="label">
        {label}
      </label>
    </div>
  );
};

export default Input;
