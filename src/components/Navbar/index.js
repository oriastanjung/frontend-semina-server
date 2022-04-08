import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavLink from '../NavLink';

function ComponentNavbar() {
  const navigate = useNavigate();
  const isLogin = false;
  return (
    <Navbar bg='light' variant='light'>
      <Container>
        <Navbar.Brand href='#home'>Dashboard</Navbar.Brand>
        <Nav className='me-auto'>
          <NavLink action={() => navigate('/categories')}>Categories</NavLink>
          <NavLink action={() => navigate('/speakers')}>Speakers</NavLink>
          <NavLink action={() => navigate('/events')}>Events</NavLink>
          <NavLink action={() => navigate('/participant')}>Participant</NavLink>
          <NavLink action={() => navigate('/Transactions')}>
            Transactions
          </NavLink>
        </Nav>
        <Nav>
          {!isLogin && (
            <NavLink action={() => navigate('/login')}>Login</NavLink>
          )}
        </Nav>
        <Nav>{isLogin && <NavLink href='#deets'>Username</NavLink>}</Nav>
      </Container>
    </Navbar>
  );
}

export default ComponentNavbar;
