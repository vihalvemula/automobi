import { Fragment } from "react";
import classes from "./Fotter.module.css";

const Fotter = (props) => {
  return (
    <div className={classes.action}>
      <Fragment>
        <h1>About Auto-Cart </h1>
        <p>
          India’s Ultimate Online Shopping Site Auto-Cart vision is to create
          India’s most reliable and frictionless commerce ecosystem that creates
          life-changing experiences for buyers and sellers. Nisheel Rao along
          with Vihal Rao, started Auto-Cart.com - India’s largest online
          Auto-Mobile marketplace, with the widest assortment of 35 million plus
          products across 800 plus diverse categories from over 125,000
          regional, national, and international brands and retailers. With
          millions of users and more than 300,000 sellers, Auto-Cart is the
          online shopping site for Internet users across the country, delivering
          to 6000+ cities and towns in India.
        </p>
      </Fragment>
    </div>
  );
};

export default Fotter;
