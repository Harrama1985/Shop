import { FC, useEffect, useRef, useState } from "react";
import Logo from "../Logo";
import { AiOutlineShopping } from "react-icons/ai";
import Switch from "./switch";
import "./header.scss";
import Search from "../search";
import { useLocation } from "react-router";
import Cart from "../cart";

const Header: FC = ({}) => {
  const [showCart, setShowCart] = useState(false);
  const location = useLocation();
  const isPathName =
    location.pathname !== "/women" && location.pathname !== "/men";
  // const ref = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   //@ts-ignore
  //   const bodyClick = (event) => {
  //     //@ts-ignore
  //     if (ref.current && ref.current.contains(event.target)) {
  //       return;
  //     } else {
  //       setShowCart(false);
  //     }
  //   };
  //   document.body.addEventListener("click", bodyClick);
  //   return () => {
  //     document.body.removeEventListener("click", bodyClick);
  //   };
  // }, []);
  return (
    <header className="header">
      <Logo notHome />
      {isPathName && <Switch />}
      <div className="header__icons">
        {isPathName && <Search />}
        <span
          className="header__icon"
          onClick={() => setShowCart((prev) => !prev)}
        >
          <AiOutlineShopping />
        </span>
      </div>
      {<Cart showCart={showCart} />}
    </header>
  );
};

export default Header;
