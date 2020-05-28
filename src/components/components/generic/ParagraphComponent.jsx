import React from "react";
import Linkify from "react-linkify";

export default ({ text, title, variant }) => {
  return (
    <>
      <li className={variant ? "bgLight" : ""}>
        <div className={variant ? "bgApply" : ""}></div>
        <h3>{title}</h3>

        {text === "teamevo.eu/codeofconduct" ? (
          <>
            <div style={{ textAlign: "center" }}>
              <a href="https://teamevo.eu/files/An-esports-Code-of-Conduct.pdf">
                <span style={{ color: "#c8d600", textDecoration: "underline" }}>
                  Our Code of Conduct
                </span>
              </a>
            </div>
          </>
        ) : (
          <>
            <p>
              <Linkify> {text}</Linkify>
            </p>
          </>
        )}
      </li>
    </>
  );
};
