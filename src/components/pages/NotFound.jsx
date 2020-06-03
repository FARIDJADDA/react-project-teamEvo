import React from 'react';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons"
const NotFound = () => {
    return (
    <div className="notFound">
        <div className="notFoundContent">
            <h1><span style={{color:'#c8d600', fontSize: '4rem'}}>Oups</span>, cette page n'existe pas !</h1>
            <span style={{color:'white', fontSize:'2rem'}}>
            <FontAwesomeIcon
            icon={faRobot}
            /></span>
            <NavLink exact to="/">
                <span>Retourner à l'accueil</span>
            </NavLink>
            <span style={{color:'white', fontSize:'2rem'}}>
            <FontAwesomeIcon
            icon={faRobot}
            /></span>
        </div>
    </div>
    );
};

export default NotFound;