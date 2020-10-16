import React from "react"
import { Navbar as BSNavbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"

const Navbar = () => (
  <BSNavbar
    className="position-absolute"
    style={{ zIndex: 2, left: "0px", right: "0px" }}
    bg="transparent"
    expand="lg"
  >
    <BSNavbar.Brand>D'</BSNavbar.Brand>
    <BSNavbar.Toggle aria-controls="top-navbar" />
    <BSNavbar.Collapse id="top-navbar">
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/">
          About
        </Nav.Link>
        <Nav.Link as={Link} to="/">
          Works
        </Nav.Link>
        <Nav.Link as={Link} to="/">
          Contact
        </Nav.Link>
      </Nav>
    </BSNavbar.Collapse>
  </BSNavbar>
)

export default Navbar
