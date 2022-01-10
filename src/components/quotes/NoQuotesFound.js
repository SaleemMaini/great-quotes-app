import classes from "./NoQuotesFound.module.css";
import React from "react"


const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <a href="/new-quote" className="btn">
        Add a Quote
      </a>
    </div>
  );
};

export default NoQuotesFound;
