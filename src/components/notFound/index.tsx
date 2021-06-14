import { FC, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContextGender } from "../../store/storeGender/context";
import "./notFound.scss";
const NotFound: FC = () => {
  return (
    <section className="notFound">
      <p className="notFound__title">$404$</p>
      <p className="notFound__text">page not found </p>
      <button className="notFound__btn">
        <Link to="/">go back to home</Link>
      </button>
    </section>
  );
};

export default NotFound;
