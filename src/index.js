import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Mohit from "./Mohit";
import Comp from "./comp/comp";
import ShowHideBlog from "./ClassBasedComponent/ShowHideBlog";
import Product from "./ProductComponent/product";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
ReactDOM.render(<Mohit />, document.getElementById("mohit"));
ReactDOM.render(<Comp />, document.getElementById("react-component"));
ReactDOM.render(
  <ShowHideBlog />,
  document.getElementById("classBased-component")
);
ReactDOM.render(<Product />, document.getElementById("product"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
