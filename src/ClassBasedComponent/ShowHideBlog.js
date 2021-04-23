import React, { Component } from "react";
import "../App.css";
import BlogCard from "./BlogCard";

class ShowHideBlog extends Component {
  state = {
    blogShow: true,
  };

  bArr = [
    {
      title: "class based comp Blog 1",
    },
    {
      title: "class based comp Blog 2",
    },
    {
      title: "class based comp Blog 3",
    },
  ];
  func = () => {
    return "hello function called";
  };

  blogArrCard = this.bArr.map((item, pos) => {
    return <BlogCard title={item.title} func={this.func()} key={pos} />;
  });
  clickButton = () => {
    //    let updatedState = !this.state.blogShow

    this.setState((preState, prevProps) => {
      return { blogShow: !preState.blogShow };
    });
  };

  render() {
    return (
      <div className="App" style={{ backgroundColor: "blue" }}>
        <button onClick={this.clickButton}>
          {" "}
          {this.state.blogShow ? "HIDE BLOGS" : "SHOW BLOGS"}
        </button>
        {this.state.blogShow ? this.blogArrCard : null}
      </div>
    );
  }
}

export default ShowHideBlog;
