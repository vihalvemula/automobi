import { useState, useContext, Fragment } from "react";

import CartContext from "../store/CartContext";
import classes from "./CartItems.module.css";
import CartItem from "./CartItem";
import Login from "./Login";

import EmptyCart from "./EmptyCart";

const CartItems = (props) => {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;
  const totalAmount = `$${cartCtx.totalAmount.toFixed(0)}`;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          img={item.img}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const items = (
    <div className={classes.back}>
      {cartIsShown && <Login onClose={hideCartHandler} />}

      <div className={classes.cartdiv}>{cartItems}</div>

      <div className={classes.actions}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h4 style={{ marginTop: "5px", marginBottom: 0 }}>
            Delivery and payment options can be selected later
          </h4>
          <p style={{ marginBottom: 0, marginTop: "15px" }}>
            Safe and Secure Payments
          </p>
          <p style={{ marginTop: "5px" }}>
            100% Payment Protection, Easy Returns Policy
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <span>
            <h3>Total Amount:{totalAmount}</h3>
          </span>
          {/* <button className={classes["button--alt"]} onClick={props.onClose}>
      close
      </button> */}
          {hasItems && (
            <button className={classes.button} onClick={showCartHandler}>
              Order
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <Fragment>
      {hasItems ? items : <EmptyCart onShowSearch={props.onShowSearch} />}
    </Fragment>
  );
};

export default CartItems;
