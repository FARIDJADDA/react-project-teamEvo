import React from "react";
import "./StaffTextComponent.css";

const StaffTextComponent = ({ data }) => {
  return (
    <>
      <p>{data.text}</p>
    </>
  );
};

export default StaffTextComponent;
