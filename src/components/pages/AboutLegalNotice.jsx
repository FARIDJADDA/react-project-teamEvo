import { useSelector } from "react-redux";
import React from "react";
import { Container } from "react-bootstrap";
import HeaderComponent from "../components/legalNotice/HeaderComponent";
import ItemList from "../components/legalNotice/ItemList";
import "../components/legalNotice/style.scss";

export default () => {
  const data = useSelector((state) => state.legal);
  return (
    <>
      <Container fluid className="legal">
        <HeaderComponent title="Legal Notice" />
        <ItemList data={data} />
      </Container>
    </>
  );
};
