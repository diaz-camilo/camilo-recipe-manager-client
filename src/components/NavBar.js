import React from 'react'
import { Navbar, Container, Nav, NavItem } from 'react-bootstrap'
import { useAppContext } from '../context/AppContext'
import { Link, useNavigate } from 'react-router-dom'

export default function NavBar() {

  const { currentUser, logout } = useAppContext();
  const navigate = useNavigate();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand >Recipe Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <Link className='nav-link' to="/">Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className='nav-link' to="/my-recipes">My Recipes</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className='nav-link' to="/new-recipe">New Recipe</Link>
            </Nav.Item>
          </Nav>
          <Nav>
            {currentUser
              ? <>
                <Nav.Item>
                  <Link className='nav-link' to='/profile'>
                    {currentUser.email}
                  </Link>
                </Nav.Item>
                <Nav.Link onClick={() => { logout(); navigate('/login') }} >Log Out</Nav.Link>
              </>
              :
              <>
                <Nav.Item>
                  <Link className='nav-link' to="/signup">Sign Up</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link className='nav-link' to="/login">Log In</Link>
                </Nav.Item>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
