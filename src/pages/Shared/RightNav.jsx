import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa'
const RightNav = () => {
    return (
        <div>
            <Button variant="outline-primary mb-1 w-100"><FaGoogle /> login with Google</Button>
            <Button variant="outline-secondary w-100"><FaGithub /> login with GitHub</Button>
            <div>
                <h3>Find Us On</h3>
                <ListGroup>
                    <ListGroup.Item ><FaFacebook  size={30} color='blue'></FaFacebook> Facebook </ListGroup.Item>
                    <ListGroup.Item ><FaTwitter  size={30} color='blue'></FaTwitter>  Twitter</ListGroup.Item>
                    <ListGroup.Item ><FaInstagram  size={30} color='blue'> </FaInstagram>  Instagram</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default RightNav;