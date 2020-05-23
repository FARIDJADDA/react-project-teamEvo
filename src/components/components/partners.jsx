import React from "react";

const styles = {
  borderBottom: "2px solid #eee",
  background: "#fafafa",
  margin: ".75rem auto",
  padding: ".6rem 1rem",
  maxWidth: "500px",
  borderRadius: "7px",
};
const PartnerComponent = ({ partner: { name, website, image } }) => {
  console.log(name, website, image);
  return (
    <>
      <div style={styles}>
        <div> Toto </div>
        <h2>{name}</h2>
        <p>
          <img src={image} alt='logo' style={{ height: 50 }} />
          {website}
        </p>
      </div>
    </>
  );
};

export default PartnerComponent;
