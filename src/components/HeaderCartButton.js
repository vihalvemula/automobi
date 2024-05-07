import { useContext } from "react";
import CartContext from "../store/CartContext";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";
import { Link } from "react-router-dom";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  return (
    <Link style={{ textDecoration: "none", color: "white" }} to="/cartitems">
      <button className={classes.button}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </Link>
  );
};

export default HeaderCartButton;
