import { useContext } from "react";
import CartContext from "../store/CartContext";
import classes from "./Product.module.css";
import ProductItemForm from "./ProductItemForm";

const Product = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      img: props.img,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <div className={classes.card}>
      <img src={props.img} alt={"products"}></img>

      <div className={classes.np}>
        <h1 style={{ fontSize: "small" }}>{props.name}</h1>

        <div className={classes.inline}>
          <h2>Price:{props.price}</h2>
          <ProductItemForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
      </div>
    </div>
  );
};

export default Product;
