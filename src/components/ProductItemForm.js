import classes from "./ProductItemForm.module.css";

const ProductItemForm = (props) => {
  const submitHandlerForm = (event) => {
    event.preventDefault();
    let enteredAmount = 1;
    props.onAddToCart(enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandlerForm}>
      <button>+ Add</button>
    </form>
  );
};

export default ProductItemForm;
