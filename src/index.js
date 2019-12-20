import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/homePage.css';
import * as serviceWorker from './serviceWorker';
import RouterCoder from "./RouterCoder.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';


// Import Pages
const routing = (
    <RouterCoder />
)

ReactDOM.render(routing, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
