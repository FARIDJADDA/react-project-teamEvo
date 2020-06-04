import React from "react";
import { useSelector } from "react-redux";
import PartnerComponent from "./../../components/Partners/Partners";
import { Container } from "react-bootstrap";
import WaitData from "./../../components/Spinner/WaitData";

/**
 * @param  {} { partners, onDelete } represent an object composed from the partners object and also the onDelete dispatcher
 *
 */
function PartnersList() {
  const partners = useSelector((state) => state.partners);
  if (!partners.length) {
    return <WaitData />;
  }
  return (
    <Container fluid>
      {partners.map((partner, index) => {
        return <PartnerComponent partner={partner} key={index} />;
      })}
    </Container>
  );
}

export default PartnersList;
