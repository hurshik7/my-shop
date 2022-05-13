import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MyNavBar() {
  let navigate = useNavigate();
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">My-shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={() => {
              navigate('/');
            }}>
                Home
            </Nav.Link>
            <Nav.Link href="#features" onClick={() => {
              navigate('/detail');
            }}>
                Detail
            </Nav.Link>
            <Nav.Link href="#pricing" onClick={() => {
              navigate('/');
            }}>
                Etc
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavBar;
