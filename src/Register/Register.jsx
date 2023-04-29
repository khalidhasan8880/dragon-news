import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../AuthProvider/AuthProvider';
const Register = () => {
    const {createUser,}=useContext(AuthContext)
    console.log(createUser);
    const registerHandler=(e)=>{
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
    return (
        <div>
            <Form onSubmit={registerHandler}>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Photo</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="PhotoUrl" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;