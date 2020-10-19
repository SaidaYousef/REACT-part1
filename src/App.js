import React from 'react';
import './App.css';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'
import { FacebookLoginButton } from 'react-social-login-buttons';



function App() {
  return (
    <Form className="login-form green" > 
       <h1 class="text-center pb-5">
         <span className="font-weight-bold">Image</span> gallery
       </h1>
       <FormGroup>
         <Label>Email</Label>
         <br></br>
         <Input type="email" placeholder="Email"></Input>
       </FormGroup>
       <FormGroup>
         <Label>Password</Label>
         <br></br>
         <Input type="password" placeholder="Password"></Input>
       </FormGroup>
       <Button className="btn-large btn-block">Log In</Button>
       <div className="text-center pt-3">Or continue with your social account</div>
      <FacebookLoginButton/>
      <div className="text-center">
        <a href="/sign-up">Sign Up</a>
        <span className="p-2">|</span>
        <a href="/sign-up">Forgot Password?</a>
      </div>
    </Form>
  );
}

export default App;
