import React from "react";
import { Row } from "react-bootstrap";

const AboutComponent = ({about}) => {
    return (
        <Row >
            <h1>{about.title} </h1>
            <p>{about.text}</p>
        </Row>
    )
}

export default AboutComponent;