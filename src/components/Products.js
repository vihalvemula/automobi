import { useEffect, useState } from "react";

import Product from "./Product";
import classes from "./Products.module.css";

const Products = (props) => {
  const [products, setProducts] = useState([]);

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

  const Items = products.map((x) => (
    <Product key={x.id} id={x.id} name={x.name} price={x.price} img={x.img} />
  ));

  return (
    <div className={classes.box}>
      <div className={classes.flex}>{Items}</div>
    </div>
  );
};

export default Products;
