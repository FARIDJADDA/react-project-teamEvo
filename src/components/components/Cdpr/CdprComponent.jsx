import React from "react";
import "./Cdpr.css";

const CdprComponent = ({ data }) => {
  return (
    <>
      <>
        <h6>{data.title}</h6>
        <p className='para'>{data.paragraphe}</p>
      </>
    </>
  );
};

export default CdprComponent;
