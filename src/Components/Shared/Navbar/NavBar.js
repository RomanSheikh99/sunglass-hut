import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../../../images/logo.png';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const NavBar = () => {
  const { users, logOut } = useAuth();
  return (
    <Navbar
      className="navbar-container bg-white text-black py-0"
      sticky="top"
      collapseOnSelect
      expand="lg"
    >
      <Container>
        <Navbar.Brand as={HashLink} className="" to="/">
          <img className="" style={{width: '160px'}} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end text-black">
          <Nav.Link className='text-black' as={HashLink} to="/home">
            Home
          </Nav.Link>
          <Nav.Link className='text-black' as={HashLink} to="/explore">
            Explore
          </Nav.Link>
          {users.email && (
            <Nav.Link className='text-black' as={HashLink} to="/dashBoard">
              Dashboard
            </Nav.Link>
          )}
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end text-black">
          <span className="text-black fw-bold">{users?.displayName}</span>
          {users?.email ? (
            <Button onClick={logOut} className="btn btn-dark ms-2">
              Logout
            </Button>
          ) : (
            <Nav.Link as={HashLink} to="/login">
              <Button className="btn btn-dark ms-2">Login</Button>
            </Nav.Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
