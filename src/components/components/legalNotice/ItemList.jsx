import React from "react";
import ParagraphComponent from "./ParagraphComponent";
import { Row, Col } from "react-bootstrap";

const RenderData = ({ data }) => {
  return data.map((item) => {
    return (
      <ParagraphComponent
        text={item.text}
        title={item.title}
        list={item.list}
        key={item.title}
      />
    );
  });
};

export default ({ data }) => {
  return (
    <>
      <Row fluid className="legal-content">
        <Col>
          <ol>
            <RenderData data={data} />
          </ol>
        </Col>
      </Row>
    </>
  );
};
