"use strict";

console.log("helo react!!");

var template = React.createElement(
  "p",
  null,
  "THis is JSX from app.js"
);
var appRoot = document.getElelmentById('app');

ReactDOM.render(template, appRoot);
