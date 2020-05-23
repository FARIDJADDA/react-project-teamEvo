import React from "react";
import { useSelector } from "react-redux";
import "./partnersBloc.css";

const PartnersBloc = () => {
  const partners = useSelector((state) => state.partners);
  return (
    <>
      <div className='d-flex justify-content-center container-fluid partnersbloc'>
        <div className='row width30'>
          {partners.map((partner, index) => {
            return (
              <div className='col-md center' key={index}>
                <a href='/partners'>
                  <img src={partner.image} alt={`${partner.name}-logo`} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PartnersBloc;
