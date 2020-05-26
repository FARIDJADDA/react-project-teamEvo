import React from "react";
import Linkify from "react-linkify";

import ContentList from "./ContentList";
export default ({ text, title, list }) => {
  return (
    <li>
      <h3>{title}</h3>

      <p>
        <Linkify> {text}</Linkify>
      </p>
      {list !== undefined ? <ContentList list={list} /> : <></>}
    </li>
  );
};
