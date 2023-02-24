import React from "react";
import "./style.css";

function Welcome(props) {
  return <main className="welcome" id="welcome">{props.children}</main>;
}

export default Welcome;
