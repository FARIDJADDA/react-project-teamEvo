import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import NavDropdownCusto from "./NavDropdownCusto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navBar.css";
import {
  faTwitter,
  faDiscord,
  faLinkedin,
  faYoutube,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";

const FullNavBar = () => {
  const navs = useSelector((state) => state.navs);
  return (
    <>
      <Navbar className='navbarcustom' variant='dark' expand='lg'>
        <Navbar.Brand className='white' href='/'>
          <img
            className='logo-rond'
            alt='logo-rond'
            src='https://firebasestorage.googleapis.com/v0/b/projet-teamevo.appspot.com/o/imageEvo%2Flogo-evo-rond.png?alt=media&token=284e03a4-b60f-4264-8728-5a24eceeabaa'
          />
          <img
            className='logo-evo'
            alt='logo-evo'
            src='https://firebasestorage.googleapis.com/v0/b/projet-teamevo.appspot.com/o/imageEvo%2Flogo-teamevo.png?alt=media&token=ba39d186-ba00-4912-8a73-33b833c9ff37'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto white'>
            {navs.map((route, index) => {
              return !route.children ? (
                <Nav.Link
                  className='white navlink'
                  href={route.url}
                  key={index}>
                  {route.text}
                </Nav.Link>
              ) : (
                <NavDropdownCusto data={route} index={index} key={index} />
              );
            })}
          </Nav>
          <div style={{ display: "flex" }}>
            <Nav.Link href='https://twitter.com/TeamEvoAB'>
              <FontAwesomeIcon className='white' icon={faTwitter} />
            </Nav.Link>
            <Nav.Link href='https://discord.com/' alt='test'>
              <FontAwesomeIcon className='white' icon={faDiscord} />
            </Nav.Link>
            <Nav.Link
              href='https://fr.linkedin.com/company/team-evo-ab'
              alt='test'>
              <FontAwesomeIcon className='white' icon={faLinkedin} />
            </Nav.Link>
            <Nav.Link
              href='https://www.youtube.com/channel/UCNk4BPBPEE5fwJPqZPq_Drg'
              alt='test'>
              <FontAwesomeIcon className='white' icon={faYoutube} />
            </Nav.Link>
            <Nav.Link href='https://www.twitch.tv/team/evo' alt='test'>
              <FontAwesomeIcon className='white' icon={faTwitch} />
            </Nav.Link>
            <Nav.Link href='#toto' alt='test'>
              <strong className='white'>FR</strong>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default FullNavBar;
