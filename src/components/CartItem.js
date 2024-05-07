import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.price}`;

  return (
    <div className="classes.card1">
      <li className={classes["cart-item"]}>
        <div className={classes.pic}>
          <img src={props.img} alt={"products"}></img>
          <div className={classes.roo}>
            <h2 style={{ fontSize: "small" }}>{props.name}</h2>
            <span className={classes.price}>Price : {price}</span>
          </div>
        </div>
        <div className={classes.actions}>
          <button onClick={props.onRemove}>−</button>
          <span className={classes.amount}>x{props.amount}</span>
          <button onClick={props.onAdd}>+</button>
        </div>
      </li>
    </div>
  );
};

export default CartItem;
