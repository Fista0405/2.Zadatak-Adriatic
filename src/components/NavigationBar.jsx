import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavigationBar = ({ img }) => {
  return (
    <Container className="px-0">
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <img
            src={img}
            className="d-inline-block mr-auto"
            alt="Adriatic.hr-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-lg-none">
            <Nav.Link href="#">Naše putovanje</Nav.Link>
            <Nav.Link href="#">Partnerska mreža</Nav.Link>
            <Nav.Link href="#">Opće informacije</Nav.Link>
            <Nav.Link href="#">Pridružite nam se</Nav.Link>
            <Nav.Link href="#">FAQ</Nav.Link>
            <Nav.Link href="#">Kućni red privatnog smještaja</Nav.Link>
            <Nav.Link href="#">Opći uvjeti</Nav.Link>
            <Nav.Link href="#">Garancije</Nav.Link>
            <Nav.Link href="#">Mapa weba</Nav.Link>
            <Nav.Link href="#">Korisni linkovi</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
