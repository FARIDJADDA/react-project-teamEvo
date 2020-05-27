import React from "react";
import "./navBar.css";
import { NavLink } from "react-router-dom";

const NavDropdownCusto = ({ data }) => {
  let child = data.children;
  return (
    <>
      <div className='drop-down'>
        <NavLink
          role='button'
          to='/about'
          className='btn btn-link drop-btn white'>
          {data.text}
        </NavLink>
        <div className='drop-down-content'>
          {child.map((e, index) => {
            return (
              <NavLink to={`${data.url}${e.url}`} key={index} className='white'>
                {" "}
                {e.text}{" "}
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NavDropdownCusto;
