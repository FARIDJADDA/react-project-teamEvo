import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './PartnerDetail.css'

const PartnerDetail = ({partner}) => {
    console.log(partner)
  return (
    <Col>
    {
      partner ? 
      partner.detail.map((data) =>{
        return(
          <Row className="detail-text">
            {data.title ? <h3>{data.title}</h3> :  <></>}
            {data.text ? <p>{data.text}</p> : <></>}
          </Row>
          
        )
      })
      : <></>
    }
    </Col>
  );
};

export default PartnerDetail;