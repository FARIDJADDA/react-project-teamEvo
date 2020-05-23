import React from "react";
import { NavDropdown } from "react-bootstrap";
import "./navBar.css";

const NavDropdownCusto = ({ data }) => {
  let child = data.children;
  return (
    <>
      <NavDropdown
        className='navdropdown'
        title={data.text}
        id='basic-nav-dropdown'
        href={data.url}>
        {child.map((i, index) => {
          return (
            <NavDropdown.Item href={`${data.url}${i.url}`} key={index}>
              {i.text}
            </NavDropdown.Item>
          );
        })}
      </NavDropdown>
    </>
  );
};

export default NavDropdownCusto;
