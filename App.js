import React from "react";
import ReactDOM from "react-dom/client";
  
const heading = (
  <div id="parent">
    <div id="child1">
      <h1>I am an H1 tag!</h1>
      <h2>I am an H2 tag!</h2>
    </div>

    <div id="child2">
      <h1>I am an H1 tag!</h1>
      <h2>I am an H2 tag!</h2>
    </div>
  </div>
);

    // console.log(parent);
const Kp = ReactDOM.createRoot(document.getElementById("root"));
Kp.render(heading);