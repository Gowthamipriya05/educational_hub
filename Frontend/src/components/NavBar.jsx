import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import "../index.css";
import LogoImage from '../images/logo.jpeg';

function NavBar()
{
    return (
    <div>
    <Navbar expand="lg" className="navbar shadow">
      <Container>
      <Image src={LogoImage} className="image" roundedCircle />
        <Navbar.Brand href="#home" className="navfont">Gowthami Learning Hub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/login" className="navlogin">Login</Nav.Link>
            <Nav.Link as={Link} to="/register" className="navsignup">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       </div>
    );
}
export default NavBar;