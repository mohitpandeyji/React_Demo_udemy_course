import React from "react";
import classes from "./BlogCard.module.css";
const BlogCard = (props) => {
  return (
    <div className={classes.BlogCard}>
      <p>hello blog - passing data to function based component using props</p>
      <p>{props.title}</p>
    </div>
  );
};

export default BlogCard;
