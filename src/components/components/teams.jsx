import React from "react";

const styles = {
  borderBottom: "2px solid #eee",
  background: "#fafafa",
  margin: ".75rem auto",
  padding: ".6rem 1rem",
  maxWidth: "500px",
  borderRadius: "7px",
};

const TeamsComponent = ({ team: { firstName, lastName }, id, onDelete }) => {
  return (
    <div style={styles}>
      <h2>{firstName}</h2>
      <h2>{lastName}</h2>
      <button
        className='btn btn-danger'
        type='button'
        onClick={() => onDelete(id)}>
        Remove
      </button>
    </div>
  );
};

export default TeamsComponent;
