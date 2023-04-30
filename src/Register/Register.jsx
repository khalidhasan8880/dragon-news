import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Register = () => {
    const { createUser, } = useContext(AuthContext)
    const [accept, setAccept] = useState(false)
    console.log(createUser);
    const registerHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        createUser(email, password).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
        })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });
    }
    const termsHandler =(e)=>{
        setAccept(e.target.checked)
    }
    return (
        <div>
            <Form onSubmit={registerHandler}>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' required placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Photo</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="PhotoUrl" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" onClick={termsHandler} required label={<>Accept <Link to='/terms&conditions'>Terms & Conditions</Link></>} />
                </Form.Group>
                <Form.Group >
                    <Form.Text>Already Have Account Please <Link to='/login'>Log In</Link></Form.Text>
                </Form.Group>
                <Button variant="primary" disabled={!accept} type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;