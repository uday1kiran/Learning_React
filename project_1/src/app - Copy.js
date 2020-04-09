console.log("helo react!!");

var template = <p>THis is JSX from app.js</p>;
var appRoot = document.getElelmentById('app');

ReactDOM.render(template, appRoot);

var template1 = <h1 id="app1">Something new</h1>;
ReactDOM.render(template1);

