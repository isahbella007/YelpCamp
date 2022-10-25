import React from "react";
import logo from "../../assets/Logo.svg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
        <div className="header-container">
            <div className="header-items">
                <div className="header-image-container">
                    <img src={logo} alt="crypto"></img>
                    <a href="/home"> Home</a>
                </div>
                <nav>
                    <a href="/earn"> Products</a>
                    <a href="#"> Features</a>
                    <a href="#"> About</a>
                    <a href="#">Contact</a>
                    <a href="#" className="a-login">
                    Login
                    </a>
                    <div className="vertical-line"></div>
                </nav>

                <button className="hamburger">
                    <div className="bar"></div>
                </button>
            </div>
            <nav className="mobile-nav">
            <a href="#"> Products</a>
            <a href="#"> Features</a>
            <a href="#"> About</a>
            <a href="#">Contact</a>
            <div className="mobile-nav-bottom">
                <a href="#" className="a-login">
                Login
                </a>
                <div className="vertical-line"></div>
                    <button className="register-btn">
                    <p>Register</p>
                </button>
            </div>
            </nav>
      </div>
    </>
  );
};

export default Navbar;
