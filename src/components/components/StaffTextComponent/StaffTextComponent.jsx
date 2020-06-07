import React from "react";

const StaffTextComponent = ({ data }) => {
  return <p style={{ textAlign: "justify" }}>{data.text}</p>;
};

export default StaffTextComponent;
