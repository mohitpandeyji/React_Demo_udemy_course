import "./App.css";
import React from "react";

const a = "Hello this is my first react app !!! chears";
const firstName = "Mohit";
const lastName = "Pandey";
const getFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};
const detailsInputBox = <input placeholder="enter details" />;
const mArr = [1, 2, 3, 4, 5];
const mObj = { name: "Ram Shyam", age: 55 };
function Mohit() {
  return (
    <div className="BlogCard">
      <h3>{`My full name is ${firstName} ${lastName}`}</h3>
      <h1>Mohit</h1>
      <p>{a}</p>
      <p>
        {" "}
        My Arror Function for full name {getFullName(firstName, lastName)}{" "}
      </p>
      {detailsInputBox}
      {mArr[3]}
      {mObj.name + "  " + mObj.age}
      {mArr[3] > 0 ? "True" : "False"}
    </div>
  );
}

export default Mohit;
