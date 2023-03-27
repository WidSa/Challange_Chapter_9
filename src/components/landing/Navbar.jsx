import React from "react";
// import Container from 'react-bootstrap/Container';
import "../../assets/css/landing.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

import logo from "../../assets/images/logo.png"

export default function NavigationBar() {
    return (
        <Navbar variant="dark" className='transparent-navbar py-3' fixed="top" >
            <div className="container-fluid">
                <Navbar.Brand href="#home" className='me-4 ms-5'>
                    <img src={logo} style={{ width: "2rem" }} alt="" />
                </Navbar.Brand>
                <Nav className=" ms-5 me-auto text-white nav-content">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#requirements">Requirements</Nav.Link>
                    <Nav.Link href="#quotes">Quotes</Nav.Link>
                </Nav>
                <Nav className="ms-auto text-white nav-content mx-lg-5 ">
                    <Nav.Link href="/register">Register</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
            </div>
        </Navbar>
    )
}