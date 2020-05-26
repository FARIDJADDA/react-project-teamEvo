import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import HeaderComponent from "../components/generic/HeaderComponent";
import ItemList from "../components/generic/ItemList";
import "../components/generic/style.scss";

export default () => {
  const data = useSelector((state) => state.vision);

  // use map to create the 'internal layout':
  const RenderData = () => {
    return data.map((item) => {
      return (
        <>
          {item.header.button !== undefined ? (
            <HeaderComponent
              title={item.header.title}
              button={item.header.button}
            />
          ) : (
            <HeaderComponent title={item.header.title} />
          )}
          {
            <>
              <ItemList data={item.content} />
            </>
          }
        </>
      );
    });
  };
  return (
    <>
      <Container fluid className="content">
        <RenderData />
      </Container>
    </>
  );
};
