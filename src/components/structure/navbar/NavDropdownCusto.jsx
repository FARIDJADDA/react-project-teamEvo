import React from "react";
import "./navBar.css";

const NavDropdownCusto = ({ data }) => {
  let child = data.children;
  return (
    <>
      <div className="drop-down">
        <a role="button" href='/about' className=" btn btn-link drop-btn">{data.text}</a>
        <div className="drop-down-content">
          {child.map((e,index) => {
          return <a href={`${data.url}${e.url}`} key={index}> {e.text} </a>
        })}
        </div>
      </div>
    </>
  );
};

export default NavDropdownCusto;



