import React from "react";
import "./navBar.css";
import { NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const NavDropdownCusto = ({ data }) => {
  let child = data.children;
  return (
    <>
      <NavDropdown
        title={data.text}
        id='basic-nav-dropdown'
        className='drop-down about-button'>
        {child.map((e, index) => {
          return (
            <NavDropdown.Item key={index} className='dropdown-color'>
              <NavLink to={`${data.url}${e.url}`}>{e.text}</NavLink>
            </NavDropdown.Item>
          );
        })}
      </NavDropdown>
    </>
  );
};

export default NavDropdownCusto;
