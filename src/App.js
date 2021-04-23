import React from "react";
import "./App.css";
const bArr = [
  {
    title: "Blog 1",
  },
  {
    title: "Blog 2",
  },
  {
    title: "Blog 3",
  },
];
const blogArrCard = bArr.map((item, pos) => {
  return (
    <div className="BlogCard" key={pos}>
      <p>{item.title}</p>
    </div>
  );
});
function App() {
  return <div className="App">{blogArrCard}</div>;
}

export default App;
