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
        {data.list && (
          <ul>
            <li>
              <h4>Propriétaire:</h4>
              <p>{data.list.owner}</p>
            </li>
            <li>
              <h4>Créateur:</h4>
              <p>{data.list.creator}</p>
            </li>
            <li>
              <h4>Responsable Publication:</h4>
              <p>{data.list.publisher}</p>
            </li>
            <li>
              <h4>Webmaster:</h4>
              <p>{data.list.webmaster}</p>
            </li>
            <li>
              <h4>Hébergeur:</h4>
              <p>{data.list.hoster}</p>
            </li>
            <li>
              <h4>Crédits:</h4>
              <p>{data.list.credits}</p>
            </li>
          </ul>
        )}
      </Col>
    </Row>
  );
};

export default LegalNoticeItem;
