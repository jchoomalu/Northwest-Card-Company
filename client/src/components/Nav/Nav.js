import {
  Button,
  Nav,
  Navbar,
  NavDropdown,
  FormControl,
  Form,
  Container,
  Image,
} from "react-bootstrap";
import {useState, useEffect} from 'react'
import logo from "../../assets/logo2.png";
import vetBadge from "../../assets/VeteranOwnedBadge.png";
import accent from "../../assets/accentBar.png";
import "./styles.css";

const Navigation = () => {
  const [slideIn, setSlideIn] = useState(false)
  useEffect(() => {
    // Use a delay to trigger the slide-in effect when the component is mounted
    const timeout = setTimeout(() => {
      setSlideIn(true);
    }, 500); // Adjust the delay (500ms) as needed

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
    <Navbar variant="light" className="p-2" collapseOnSelect expand="lg">
      <Navbar.Brand href="#home">
        <Image className="logo" src={logo} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Container className="searchContainer">
          <Form className="d-flex">
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2 outline-dark"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Container>
          <Image className="vetBadge" src={vetBadge} />
      </Navbar.Collapse>
    </Navbar>
    <Container className={`image-container ${slideIn ? 'slide-in' : ''}`}>
      <Image className="accentImage" src={accent} />
    </Container>
    </>
  );
};

export default Navigation;
