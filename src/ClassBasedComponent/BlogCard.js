import React, { Component } from "react";
import classes from "./BlogCard.module.css";
class BlogCard extends Component {
  state = {
    likeCount: 0,
  };
  onLike = () => {
    this.setState((prevState, prevProc) => {
      return { likeCount: prevState.likeCount + 1 };
    });
  };

  render() {
    return (
      <div className={classes.BlogCard}>
        <p>hello blog - passing data to class based component using props</p>
        <p>{this.props.title}</p>
        <p>{this.props.func}</p>
        <p> Like Counts : {this.state.likeCount}</p>
        <button onClick={this.onLike}>Like</button>
      </div>
    );
  }
}

export default BlogCard;
