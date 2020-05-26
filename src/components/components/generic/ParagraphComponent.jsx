import React from "react";
import Linkify from "react-linkify";

export default ({ text, title, variant }) => {
  return (
    <li className={variant ? "bgLight" : ""}>
      <div className={variant ? "bgApply" : ""}></div>
      <h3>{title}</h3>

      <p>
        <Linkify> {text}</Linkify>
      </p>
    </li>
  );
};
