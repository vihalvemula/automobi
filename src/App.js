import CartItems from "./components/CartItems";
import Header from "./components/Header";
import Products from "./components/Products";
import CartProvider from "./store/CartProvider";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import Fotter from "./components/Fotter";

function App(props) {
  const [cartIsShown, setCartIsShown] = useState(true);
  const [s, setS] = useState(true);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const showSearch = () => {
    setS(true);
  };

  const hideSearch = () => {
    setS(false);
  };
  return (
    <CartProvider>
      <Header
        onClo={hideCartHandler}
        onOp={showCartHandler}
        onhideSearch={hideSearch}
        onShowSearch={showSearch}
        s={s}
      />

      <Switch>
        <Route path="/" exact>
          <Redirect to="/products" />
        </Route>
        <Route path="/products">
          {cartIsShown && <Products />}

          {cartIsShown && <Fotter />}
        </Route>

        <Route path="/cartitems" exact>
          <CartItems onShowSearch={showSearch} />
        </Route>
      </Switch>
    </CartProvider>
  );
}

export default App;
