import React from "react";

import "./footer.css";
import { Col } from "react-bootstrap";

const FooterList = ({ footer, title }) => {
  return (
    <Col className='p-3' xs={6} lg={2}>
      <ul>
        <h2>{title}</h2>
        {footer
          .filter((elem) => {
            return elem.title === title;
          })
          .map((elem, index) => {
            return (
              <li key={index}>
                <a target='_blank' rel='noopener noreferrer' href={elem.url}>
                  {elem.text}
                </a>
              </li>
            );
          })}
      </ul>
    </Col>
  );
};
export default FooterList;
