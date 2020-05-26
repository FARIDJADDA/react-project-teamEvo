import React from "react";
import ParagraphComponent from "./ParagraphComponent";
import { Row, Col } from "react-bootstrap";

const RenderData = ({ data }) => {
  return data.map((item) => {
    return (
      <ParagraphComponent
        text={item.text}
        title={item.title}
        key={item.title}
        variant={item.variant}
      />
    );
  });
};

export default ({ data }) => {
  return (
    <>
      <Row fluid className="principal-content">
        <Col>
          <ol>
            <RenderData data={data} />
          </ol>
        </Col>
      </Row>
    </>
  );
};
