import "./App.css";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">My-shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <Container>
        <Row>
          <Col xs>
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="80%" alt="first"
            />
            <h4>Title</h4>
            <p>description</p>
          </Col>
          <Col xs>
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width="80%" alt="second"
            />
            <h4>Title</h4>
            <p>description</p>
          </Col>
          <Col xs>
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="80%" alt="third"
            />
            <h4>Title</h4>
            <p>description</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
