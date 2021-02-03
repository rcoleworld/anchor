import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Navbar.Brand href="/">
            <img
                src="./images/anchor-light.png"
                width="30"
                height="35"
                className="d-inline-block align-center"
            />
          </Navbar.Brand>
        </Nav>
        <Nav>
          <Nav.Link href="/about"> About </Nav.Link> 
          <NavDropdown title="Categories" id="basic-nav-dropdown"> 
            <NavDropdown.Item href="/categories/politics">Politics</NavDropdown.Item>
            <NavDropdown.Item href="/categories/world">World</NavDropdown.Item> 
            <NavDropdown.Item href="/categories/business">Business</NavDropdown.Item> 
            <NavDropdown.Item href="/categories/science">Science</NavDropdown.Item> 
            <NavDropdown.Item href="/categories/sports">Health</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/categories">View All</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Compare" id="basic-nav-dropdown"> 
            <NavDropdown.Item href="/compare/articles">Articles</NavDropdown.Item>
            <NavDropdown.Item href="/compare/sources">Sources</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navigation;