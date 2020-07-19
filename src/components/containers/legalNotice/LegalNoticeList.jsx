import React from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";

import HeaderBloc from "./../../components/HeaderBloc/HeaderBloc";
import LegalNoticeItem from "./../../components/LegalNotice/LegalNoticeItem";

const LegalNoticeList = () => {
  const legal = useSelector((state) => state.legal);
  return (
    <Container fluid>
      <HeaderBloc
        background={{
          backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/react-project-team-evo.appspot.com/o/HomeImage%2Favaa-06-25.png?alt=media&token=a50f9414-1697-4dac-b033-96f14e320b19')`,
          backgroundSize: "100% 350%",
          backgroundPosition: "center 40%",
          borderBottom: "solid 3px #c8d600",
        }}
        firstTitle={
          <h1
            style={{
              marginTop: 30,
              marginBottom: 30,
              fontFamily: "KoratakiW01-Book",
            }}>
            Legal Notice
          </h1>
        }
      />
      {legal.map((data, index) => {
        return <LegalNoticeItem key={index} data={data} />;
      })}
    </Container>
  );
};

export default LegalNoticeList;
