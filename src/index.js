import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <footer className="App-footer">
      <small>
        <a
          href="https://github.com/laurakomp/dictionary-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced
        </a>{" "}
        code by Laura Komp,{" "}
        <a
          href="https://priceless-bohr-c0b0f4.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </small>{" "}
    </footer>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
