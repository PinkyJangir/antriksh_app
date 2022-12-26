import React from "react";
import './Navbar.css'
import {Link} from 'react-router-dom';
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light  fixed-top">
            <div className="container">
                <img src="https://antrikshglobal.com/wp-content/uploads/2020/10/logo-Antriksh.png" alt="Bootstrap" width="150" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About Us">About Us</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/Services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Case_study">Case Studies</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Blogs">Blogs</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact Us">Contact Us</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;