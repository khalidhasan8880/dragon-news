import React, { useContext } from 'react';
import { Button,  Nav, Navbar } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const NavigationBar = () => {

const {user, logOut}= useContext(AuthContext)

const logOutHandler = ()=>{
    logOut().then(() => {
         console.log('logOut successful');
      }).catch((error) => {
        console.log('logOut unsuccessful');
    });
}
const loginHandler = ()=>{
    console.log('logIn');
}
    return (
        <Navbar className='my-3' collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/career">Career</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/"><FaUser style={{ fontSize: '21px' }}></FaUser></Nav.Link>
                    {
                        user ?
                            <Button onClick={logOutHandler} className='px-5 py-1 fw-bold' variant="dark">Log out</Button>
                            :
                            <Nav.Link href="/login">
                                <Button onClick={loginHandler} className='px-5 py-1 fw-bold' variant="dark">login</Button>
                            </Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;