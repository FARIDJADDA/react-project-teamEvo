import React from "react";
import { Container } from "react-bootstrap";
import AboutList from "../../containers/about/AboutList";
import HeaderBloc from "./../components/HeaderBloc/HeaderBloc";

const AboutPage = () => {
  return (
    <>
      <Container fluid>
        <HeaderBloc
          background={{
            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/react-project-team-evo.appspot.com/o/HomeImage%2Favaa-06-25.png?alt=media&token=a50f9414-1697-4dac-b033-96f14e320b19')`,
            backgroundSize: "100% 280%",
            backgroundPosition: "center 35%",
            borderBottom: "solid 3px #c8d600",
          }}
          firstTitle={
            <h1 style={{ marginTop: 10, fontFamily: "KoratakiW01-Book" }}>
              <span className='hashtag'>#</span>WeAre
              <span className='yellow-title' style={{ fontSize: 36 }}>
                EVO
              </span>
            </h1>
          }
          secondTitle={
            <h2 style={{ fontFamily: "Bebas Neue", fontSize: 36 }}>
              <span
                className='yellow-title'
                style={{
                  fontFamily: "Bebas Neue",
                  fontSize: 36,
                  letterSpacing: 10,
                }}>
                TOGETHER
              </span>
              , WE STAND
            </h2>
          }
        />
        <AboutList />
      </Container>
    </>
  );
};

export default AboutPage;
