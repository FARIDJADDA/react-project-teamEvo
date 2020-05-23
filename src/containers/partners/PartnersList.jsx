import React from "react";
import { useSelector } from "react-redux";
import PartnerComponent from "./../../components/components/partners";

/**
 * @param  {} { partners, onDelete } represent an object composed from the partners object and also the onDelete dispatcher
 *
 */
function PartnersList() {
  const partners = useSelector((state) => state.partners);
  if (!partners.length) {
    return <div>No Partners</div>;
  }
  return (
    <div>
      <h2> Partners </h2>
      {partners.map((partner, index) => {
        return <PartnerComponent partner={partner} key={index} />;
      })}
    </div>
  );
}

export default PartnersList;
