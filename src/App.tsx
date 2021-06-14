import React, { useContext, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router";
import Checkout from "./components/checkout";
import Header from "./components/header";
import Home from "./pages/Home";
import Men from "./pages/Men";
import NotFound404 from "./pages/NotFound404";
import Products from "./pages/ProdutsPage";
import SingleProductPage from "./pages/SingleProduct";
import Women from "./pages/Women";
import { ContextGender } from "./store/storeGender/context";

const App: React.FC = () => {
  const location = useLocation();

  const { state, dispatch } = useContext(ContextGender);
  useEffect(() => {
    const body = document.body;
    if (state.gender === "women") {
      body.classList.remove("men");
      body.classList.add("women");
    } else {
      body.classList.remove("women");
      body.classList.add("men");
    }
  }, [state.gender]);

  useEffect(() => {
    const gender = location.pathname.includes("women") ? "women" : "men";
    dispatch({ type: gender.toUpperCase(), payload: gender.toLowerCase() });
  }, []);

  return (
    <>
      {location.pathname !== "/" && <Header />}
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route
            path="/women/products/:category/:id"
            component={SingleProductPage}
          />
          <Route
            path="/men/products/:category/:id"
            component={SingleProductPage}
          />
          <Route path="/women/products/:id" component={Products} />
          <Route path="/men/products/:id" component={Products} />
          

          <Route path="/men">
            <Men />
          </Route>
          <Route path="/women">
            <Women />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route>
            <NotFound404 />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
