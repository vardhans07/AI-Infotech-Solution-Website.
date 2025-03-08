import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from "react-router-dom"; // Import both Link and NavLink

export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={props.logo || "/images/logo.jpg"} alt="AI Infotech Solutions Logo" className="logo-img" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink 
                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                                to="/" 
                                aria-current="page"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                                to="/about"
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                                to="/contact"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

Header.defaultProps = {
    logo: "/images/logo.jpg", // Default logo path
    searchBar: true
};

Header.propTypes = {
    logo: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
};
