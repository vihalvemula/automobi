import classes from "./EmptyCart.module.css";
import Modal from "../back/Modal";
import { Link } from "react-router-dom";

const EmptyCart = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Cart is Empty</h2>
        <Link style={{ textDecoration: "none", color: "white" }} to="products">
          <button className={classes.btn} onClick={props.onShowSearch}>
            Add Items To Cart
          </button>
        </Link>
      </div>
    </Modal>
  );
};

export default EmptyCart;
