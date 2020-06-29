import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const TweetDeckPage = () => {
  return (
    <Container fluid>
      <Row className='justify-content-md-center'>
        <Col lg={8} md={8} sm={12} xs={12} className='p-3'>
          <TwitterTimelineEmbed
            sourceType='profile'
            screenName='TeamEvoAB'
            theme='dark'
            options={{ height: 600 }}
          />
        </Col>
      </Row>
      <Row className='justify-content-md-center'>
        <Col lg={5} md={5} sm={12} xs={12} className='p-3'>
          <TwitterTimelineEmbed
            sourceType='profile'
            screenName='ItsBotha'
            theme='dark'
            options={{ height: 500 }}
          />
        </Col>
        <Col lg={5} md={5} sm={12} xs={12} className='p-3'>
          <TwitterTimelineEmbed
            sourceType='profile'
            screenName='Earil1'
            theme='dark'
            options={{ height: 500 }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default TweetDeckPage;
