import React, { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Images/letter-ye-logo-hexagon-shape-colorful-background-combination-design-business-company-identity-203775981.jpg'
const NavBar = () => {
    const [isSticky, setSticky] = useState(false);
    const [isCollapsed, setCollapsed] = useState(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);
    return (
        <>
             <div className="navigation-wrap bg-light start-header start-style">
                <div className="container-fluid">
                <Navbar collapseOnSelect
                    expand="lg"
                    variant="light"
                    fixed="top"
                    className={(isSticky || isCollapsed) ? "shadow-sm bg-white py-2" : "py-3"} >
                    <Navbar.Brand  style={{ color: "#3a4256", fontSize: "1.55rem" }} className="navbar-brand ml-md-5" href="/" target="_blank">
                        <img
                              width="60"
                             height="60"
                            className="d-inline-block align-top"
                             src={logo} alt="logo" />
                    </Navbar.Brand>

                <Navbar.Toggle onClick={
                () => setCollapsed(!isCollapsed ? 'show' : null)}
                aria-controls="responsive-navbar-nav" />
                    
                    <Navbar.Collapse className="collapse navbar-collapse" id="responsive-navbar-nav">
                        <Nav className="navbar-nav ml-auto py-4 py-md-0 {isCollapsed}">
                            <Nav.Link className="nav-item nav-link pl-4 pl-md-0 mr-0 mr-md-5  active" onClick={() => window.scrollTo(500, 0)}>Home</Nav.Link>
                            <Nav.Link  href="#About" className="nav-item nav-link pl-4 pl-md-0 mr-0 mr-md-5 ">About</Nav.Link>
                            <Nav.Link  href="#Contact" className="nav-item nav-link pl-4 pl-md-0 mr-0 mr-md-5 ">Contact</Nav.Link>
                            <Nav.Link  className="nav-item nav-link pl-4 pl-md-0 mr-0 mr-md-5 ">Project</Nav.Link>
                            <Nav.Link  href="#Blogs" className="nav-item nav-link pl-4 pl-md-0 mr-0 mr-md-5 ">Blog</Nav.Link>
                            <Nav.Link className="nav-item nav-link pl-4 pl-md-0 mr-0 mr-md-5 ">News</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
                </div>
            </div>
        </>
    );
};

export default NavBar;