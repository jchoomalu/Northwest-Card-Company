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
import { useState, useEffect } from "react";
import { useUser } from "../../context/userContext.js";
import logo from "../../assets/images/logo2.png";
import vetBadge from "../../assets/images/VeteranOwnedBadge.png";
import accent from "../../assets/images/accentBar.png";
import "./styles.css";

const Navigation = () => {
  const [slideIn, setSlideIn] = useState(false);
  const { user } = useUser();

  //american family slide in  accent bar animation in css
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSlideIn(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  //clears token and return user to home page
  const signout = () => {
    sessionStorage.clear()
  }

  return (
    <>
      <Navbar variant="light" className="p-2" collapseOnSelect expand="lg">
        <Navbar.Brand href="/">
          <Image className="logo img img-fluid" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Shop</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <NavDropdown
              title={user ? `Welcome ${user.firstName}` : "Members"}
              id="collasible-nav-dropdown"
            >
              {!user ?
              <>
              <NavDropdown.Item href="/users/signup">Sign Up </NavDropdown.Item>
              <NavDropdown.Item href="/users/signin">Sign In</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </>
              :
              <>
              <NavDropdown.Item href="/users/signup">Account</NavDropdown.Item>
              <NavDropdown.Item href="/users/singin">Cart</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Inquires</NavDropdown.Item>
              </>}

              <NavDropdown.Divider />
              {user && user.admin ? 
              <>
              <p className="nav-heaader">Admin</p>
              <NavDropdown.Item href="/admin/addcards">Add Cards</NavDropdown.Item>
              </>
              : ''
            }
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={signout} href="/">Sign Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Container className="searchContainer p-md-4">
            <Form className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2 outline-dark"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Container>
          <Image className="vetBadge d-none d-lg-block" src={vetBadge} />
        </Navbar.Collapse>
      </Navbar>

      <Container
        className={`mt-4 mt-lg-0 image-container ${slideIn ? "slide-in" : ""}`}
      >
        <Image className="accentImage" src={accent} />
      </Container>
    </>
  );
};

export default Navigation;
