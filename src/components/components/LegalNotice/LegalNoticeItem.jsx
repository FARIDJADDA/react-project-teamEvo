import React from "react";
import { Row, Col } from "react-bootstrap";
import "./LegalNoticeItem.css";

const LegalNoticeItem = ({ data }) => {
  console.log(data);
  return (
    <Row className='justify-content-md-center mt-4 mb-4 legal-content'>
      <Col md={12} lg={8}>
        <h1>{data.title}</h1>
        <p>{data.text}</p>
        {data.position === 1 ? (
          <ul>
            <li>
              <h4>Propriétaire:</h4>
              <p>{data.owner}</p>
            </li>
            <li>
              <h4>Créateur:</h4>
              <p>{data.creator}</p>
            </li>
            <li>
              <h4>Responsable Publication:</h4>
              <p>{data.publisher}</p>
            </li>
            <li>
              <h4>Webmaster:</h4>
              <p>{data.webmaster}</p>
            </li>
            <li>
              <h4>Hébergeur:</h4>
              <p>{data.hoster}</p>
            </li>
            <li>
              <h4>Crédits:</h4>
              <p>{data.credits}</p>
            </li>
          </ul>
        ) : (
          ""
        )}
      </Col>
    </Row>
  );
};

export default LegalNoticeItem;
