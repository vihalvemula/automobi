import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext, Fragment } from "react";
import Login from "./Login";
import Search from "./Search";

import Product from "./Product";
import CartContext from "../store/CartContext";

const Header = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [res, setRes] = useState([]);
  const [products, setProducts] = useState([]);
  const [x, setX] = useState(false);
  const cartCtx = useContext(CartContext);
  const [z, setZ] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://auto-cart-e2d15-default-rtdb.firebaseio.com/products.json"
      );
      const responseData = await response.json();
      const loadedProducts = [];

      for (const key in responseData) {
        loadedProducts.push({
          id: key,
          name: responseData[key].name,
          img: responseData[key].img,
          price: responseData[key].price,
        });
      }
      setProducts(loadedProducts);
    };
    fetchProducts();
  }, []);

  const getTerm = (y) => {
    console.log(y);
    if (y.trim() !== "") {
      console.log(cartCtx.items.length);
      console.log(props.pre);
      setX(true);
      const pro = products
        .filter((x) => {
          return x.name.trim().toLowerCase().includes(y.toLowerCase());
        })
        .map((x) => (
          <Product
            key={x.id}
            id={x.id}
            name={x.name}
            price={x.price}
            img={x.img}
          />
        ));
      if (pro.length === 0) {
        alert("NO Products found");
        setX(false);
        props.onOp();
      }
      setRes(pro);
    } else {
      setX(false);
      alert("Please Enter the product Name");
      props.onOp();
      console.log("jkdfmnsd");
    }
  };
  const onHand = () => {
    setX(false);
    console.log(x);
  };

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const box = `${classes.nobox} ${x ? classes.box : " "}`;

  return (
    <Fragment>
      <div className={classes.header}>
        {cartIsShown && <Login z={z} onClose={hideCartHandler} />}
        <Fragment>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/products"
            onClick={() => {
              props.onOp();
              onHand();
              props.onShowSearch();
            }}
          >
            <h1>Auto-Cart.com</h1>
          </Link>
        </Fragment>
        <div>
          {props.s && <Search onSearch={getTerm} onClo={props.onClo} />}
        </div>
        <div
          className={classes.cart}
          onClick={() => {
            props.onOp();
            onHand();
            props.onhideSearch();
          }}
        >
          <HeaderCartButton />
        </div>
        <div onClick={showCartHandler} className={classes.log}>
          <label>Login/Sign-in </label>
        </div>
      </div>

      <div className={box}>
        <div className={classes.flex}>{x && res}</div>
      </div>
    </Fragment>
  );
};

export default Header;
