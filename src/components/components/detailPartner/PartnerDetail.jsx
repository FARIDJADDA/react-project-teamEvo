import React from "react";
import { Row, Col } from "react-bootstrap";
import "./PartnerDetail.css";

const PartnerDetail = ({ partner }) => {
  if (!partner.detail) {
    return null;
  }
  return (
    <Col md={12} lg={12}>
      {partner ? (
        partner.detail.map((data, index) => {
          return (
            <Row key={index} className='detail-text'>
              {data.title ? <h3>{data.title}</h3> : <></>}
              {data.text ? <p>{data.text}</p> : <></>}
            </Row>
          );
        })
      ) : (
        <></>
      )}
    </Col>
  );
};

export default PartnerDetail;
