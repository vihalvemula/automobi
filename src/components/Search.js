import classes from "./Search.module.css";
import { Fragment, useState } from "react";

const Search = (props) => {
  const [term, setTerm] = useState("");

  const onChangeHandler = (event) => {
    setTerm(event.target.value);
  };

  const submitformHandler = (event) => {
    event.preventDefault();
    props.onSearch(term);

    setTerm("");
  };

  return (
    <form onSubmit={submitformHandler}>
      <div className={classes.search}>
        <div className={classes.mid}>
          <input
            type="text"
            value={term}
            placeholder="Search Products"
            onChange={onChangeHandler}
          ></input>

          <button
            disabled={term.length === 0}
            type="submit"
            onClick={props.onClo}
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
