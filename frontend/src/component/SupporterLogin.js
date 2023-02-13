import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormContainer from "./FormContainer";

const SupporterLogin = () => {
  return (
    <div>
      <FormContainer>
        <Form className="justify-content-md-center">
          <h4>Supporter Login</h4> <hr/>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            type="email"
            // value={email}
            // onChange={handleOnChange}
            placeholder="Enter email"
            required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type="password" 
            name="password"
            // value={password}
            // onChange={handleOnChange}
            placeholder="Password"
            required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
         
        </Form>
      </FormContainer>
    </div>
  );
};  

export default SupporterLogin;
