import React from "react";
import ReactDOM from "react-dom";
import s from "./style.css";

function App() {
  return (
    <React.Fragment>
      <h1 className={s.blue}>Hello World</h1>
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
