import React from "react";
import "./Cdpr.css";

const CdprComponent = ({ data }) => {
  return (
    <div className='cdpr-item'>
      <h6>{data.title}</h6>
      <p>{data.paragraphe}</p>
    </div>
  );
};

export default CdprComponent;
