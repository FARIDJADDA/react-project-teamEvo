import React from "react";

export default ({
  list: { owner, creator, publisher, webmaster, hoster, credits },
}) => {
  return (
    <>
      <ul>
        <li>
          <strong>Propriétaire:</strong> {owner}{" "}
        </li>
        <li>
          <strong>Créateur:</strong> {creator}{" "}
        </li>
        <li>
          <strong>Responsable publication:</strong> {publisher}{" "}
        </li>
        <li>
          <strong>Webmaster:</strong> {webmaster}{" "}
        </li>
        <li>
          <strong>Hebergeur:</strong> {hoster}{" "}
        </li>
        <li>
          <strong>Credits:</strong> {credits}{" "}
        </li>
      </ul>
    </>
  );
};
