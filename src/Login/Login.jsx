import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate =useNavigate()
  const {signIn} = useContext(AuthContext)
  const location = useLocation();
  console.log(location);
  const from = location.state?.path?.pathname

  console.log(signIn);

  const signInHandler=(e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value
    const password = form.password.value
    signIn(email,password).then((userCredential) => {
      // Signed in 
      
      const user = userCredential.user;
      console.log(user);
      navigate(from)
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }
    return (
        <Form onSubmit={signInHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" />
        </Form.Group>
        <Form.Group>
          <Form.Text>New To Dragon news Please <Link to='/register'>Sign Up</Link></Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
};

export default Login;