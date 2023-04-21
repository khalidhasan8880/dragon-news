import React from 'react';
import { Button, Image, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import moment from 'moment/moment';
const Header = () => {
    return (
        <div className='container'>
            <div className='text-center mb-3'>
                <img src={logo} alt="" />
                <p className='my-3'><small>Journalism Without Fear or Favour</small></p>
                <p className='my-3'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/career">Career</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/profile"><Image src='https://picsum.photos/40' roundedCircle /></Nav.Link>
                        <Button className='px-5 py-1 fw-bold' variant="dark">login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;