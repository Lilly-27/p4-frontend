import React from 'react'
import {Link} from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import './LoginPage.css'

function LogIn() {
  return (
    <div className='login-page'>
      <Form size="lg">
        <Form.Group className='mb-3 userForm' controlId="formUsername">
          <Form.Label as="h1">Username</Form.Label>
          <Form.Control size="lg" type="text" placeholder="Enter Username"/>
        </Form.Group>
        <Form.Group className='mb-3' controlId='forPassword'>
          <Form.Label as="h1">Password</Form.Label>
          <Form.Control size="lg" type="password" placeholder="Enter Password"/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <h1><br/>Don't have an account?</h1>
      <h2>Click sign up to create one and learn more about how we keep track of users</h2>
      <Link to="/signup">
        <Button>
          Sign Up
        </Button>
      </Link>
    </div>
  )
}

export default LogIn