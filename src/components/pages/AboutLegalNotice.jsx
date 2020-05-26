import React from "react";
import { Container } from "react-bootstrap";
import HeaderComponent from "../components/legalNotice/HeaderComponent";
import ItemList from "../components/legalNotice/ItemList";
import "../components/legalNotice/style.scss";

export default () => {
  const data = [
    {
      text:
        "Lorem ipsum dolor sit amet, consectetur teamevo.eu elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum:",
      list: {
        owner: "Team Evo",
        creator: " ",
        publisher:
          "le responsable publication est une personne physique ou une personne morale.",
        webmaster: " ",
        hoster: " ",
        credits: " ",
      },
      title: "Présentation du site.",
    },
    {
      text:
        "Lorem ipsum dolor sit teamevo.eu, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea teamevo.eu commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      title:
        "Conditions générales d'utilisation du site et des services proposés.",
    },
  ];
  return (
    <>
      <Container fluid className="legal">
        <HeaderComponent title="Legal Notice" />
        <ItemList data={data} />
      </Container>
    </>
  );
};
