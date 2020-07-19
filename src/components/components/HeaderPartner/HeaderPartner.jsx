import React from "react";
import "./HeaderPartner.css";

const HeaderPartner = () => {
  return (
    <div className='partnersTogether p-5'>
      <h2> Partners </h2>
      <h4>
        <span className='yellowWord'>TOGETHER</span>, WE STAND
      </h4>
      <button type='button' className='buttonYellow'>
        <a href='mailto:exemple@team-evo.com'>BECOME PARTNERS</a>
      </button>
    </div>
  );
};

export default HeaderPartner;
