import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const TweetDeckPage = () => {
  return (
    <Container fluid>
      <Row className='justify-content-md-center'>
        <Col lg={3} md={12} sm={12} xs={12} className='p-3'>
          <TwitterTimelineEmbed
            sourceType='profile'
            screenName='TeamEvoAB'
            theme='dark'
            options={{ height: 600 }}
          />
        </Col>
        <Col lg={3} md={12} sm={12} xs={12} className='p-3'>
          <TwitterTimelineEmbed
            sourceType='profile'
            screenName='ItsBotha'
            theme='dark'
            options={{ height: 600 }}
          />
        </Col>
        <Col lg={3} md={12} sm={12} xs={12} className='p-3'>
          <TwitterTimelineEmbed
            sourceType='profile'
            screenName='Earil1'
            theme='dark'
            options={{ height: 600 }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default TweetDeckPage;
