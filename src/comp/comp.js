import React from "react";
import "../App.css";
import BlogCard from "./BlogCard";
const bArr = [
  {
    title: "Blog 1",
    likeCount: 0,
  },
  {
    title: "Blog 2",
    likeCount: 0,
  },
  {
    title: "Blog 3",
    likeCount: 0,
  },
];
const blogArrCard = bArr.map((item, pos) => {
  return <BlogCard title={item.title} key={pos} />;
});
function Comp() {
  return <div className="App">{blogArrCard}</div>;
}

export default Comp;
