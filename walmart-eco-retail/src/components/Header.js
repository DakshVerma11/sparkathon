import React from 'react';
import { Navbar, Nav, Container, Button, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser, FaLeaf } from 'react-icons/fa';

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar-walmart" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <FaLeaf className="me-2" /> Walmart Eco-Retail
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/bottle-deposit">Bottle Deposit</Nav.Link>
            <Nav.Link as={Link} to="/impact">Your Impact</Nav.Link>
          </Nav>
          <Form className="d-flex me-3 flex-grow-1">
            <InputGroup>
              <Form.Control
                placeholder="Search for eco-friendly products..."
                aria-label="Search"
              />
              <Button variant="light">
                <FaSearch />
              </Button>
            </InputGroup>
          </Form>
          <div className="d-flex align-items-center">
            <Button variant="outline-light" className="me-2">
              <FaShoppingCart /> Cart
            </Button>
            <Button variant="outline-light">
              <FaUser /> Account
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;