import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavbarTop() {
  return (
    <Navbar expand="lg" sticky="top" className="navbar-dark text-warning ">
      <div className="container-fluid p-1 ms-5 me-5">
        <Navbar.Brand href="/home" className="text-warning d-flex align-content-center">
          <img alt="" src="logo.svg" className="d-inline-block align-top" /> <span className="fw-bold">The Game</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex">
            <Nav.Link href="/home" className="link-warning text-light">
              Home
            </Nav.Link>
            <Nav.Link href="/game-list" className="link-warning text-light">
              Game List
            </Nav.Link>
          </Nav>
          <NavDropdown title="Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
