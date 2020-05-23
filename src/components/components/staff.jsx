import React from "react";

export default ({ staff: { firstName, lastName, role, pseudo } }) => {
  return (
      <div>
        <h2>{pseudo}</h2>
        <h2>{firstName}{lastName}</h2>
        <h2>{role}</h2>
      </div>
  );
};
