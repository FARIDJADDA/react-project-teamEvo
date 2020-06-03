import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import ValuesItem from "../components/ValuesAndVisions/ValuesItem/ValuesItem";
import HeaderBloc from "../components/HeaderBloc/HeaderBloc";
import WaitData from "../../components/components/Spinner/WaitData"

const AboutValuesAndVisions = () => {
  const valuesAndVisions = useSelector((state) => state.vision);

  if (!valuesAndVisions.length) {
    return (
      <WaitData />
    );
  }

  return (
    <Container fluid>
      <HeaderBloc
        background={{
          backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/react-project-team-evo.appspot.com/o/valuesImage%2Favaa-01-25.png?alt=media&token=6d21715b-428b-443c-9a2a-6e2f900d0701')`,
          backgroundSize: "100% 400%",
          backgroundPosition: "center 20%",
          borderBottom: "solid 3px #c8d600",
        }}
        firstTitle={
          <h1 style={{ marginTop: 15, fontFamily: "KoratakiW01-Book" }}>
            Our Values
          </h1>
        }
        button={
          <button
            style={{
              fontWeight: "bold",
              fontFamily: "bebas Neue",
              padding: "1px 12px",
              fontSize: "20px",
              backgroundColor: "#c8d600",
              borderStyle: "none",
            }}>
            #WEAREEVO
          </button>
        }
      />

      {valuesAndVisions
        .filter((data) => data.filter === "our values")
        .map((data) => {
          return <ValuesItem data={data} />;
        })}

      <HeaderBloc
        background={{
          backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/react-project-team-evo.appspot.com/o/background-game%2Ffond-valorant.png?alt=media&token=aaffe6b0-9365-476e-930b-c58ed42a0bdf')`,
          backgroundSize: "100% 250%",
          backgroundPosition: "center 20%",
          borderBottom: "solid 3px #c8d600",
          borderTop: "solid 3px #c8d600",
        }}
        firstTitle={
          <h1 style={{ marginTop: 15, fontFamily: "KoratakiW01-Book" }}>
            Code of
          </h1>
        }
        secondTitle={
          <h1
            style={{
              marginBottom: 15,
              color: "#c8d600",
              fontFamily: "KoratakiW01-Book",
            }}>
            Conduct
          </h1>
        }
      />

      {valuesAndVisions
        .filter((data) => data.filter === "code of conduct")
        .map((data) => {
          return <ValuesItem data={data} />;
        })}

      <HeaderBloc
        background={{
          backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/react-project-team-evo.appspot.com/o/background-game%2Ffond-r6.png?alt=media&token=edf0ee31-8a6a-49a6-a28c-3dcc5a6293be')`,
          backgroundSize: "100% 250%",
          backgroundPosition: "center 45%",
          borderBottom: "solid 3px #c8d600",
          borderTop: "solid 3px #c8d600",
        }}
        firstTitle={
          <h1
            style={{
              margin: "50px 0 50px 0",
              fontFamily: "KoratakiW01-Book",
            }}>
            Our visions
          </h1>
        }
      />

      {valuesAndVisions
        .filter((data) => data.filter === "our visions")
        .map((data) => {
          return <ValuesItem data={data} />;
        })}
    </Container>
  );
};

export default AboutValuesAndVisions;
