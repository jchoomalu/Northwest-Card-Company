import React, { useState } from "react";
import { Button, Form, Card, Container } from "react-bootstrap";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirm: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.confirm !== formData.password) {
      document.getElementById("password-feedback").innerText =
        "Passwords Must Match";
    } 
    console.log("Form Data:", formData);
  };

  return (
    <Card className="w-50 mx-auto mb-5 p-4">
      <Form onSubmit={handleSubmit}>
        <Container className="row">
          <Form.Group className="my-2" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <small id="email-feedback"></small>
          </Form.Group>

          <Form.Group controlId="formFirstName" className="col-6 my-2">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Your First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formLastName" className="col-6 my-2">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Your Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="my-2" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="my-2" controlId="formPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Confirm Password"
              name="confirm"
              value={formData.confirm}
              onChange={handleChange}
            />
          </Form.Group>

          <small
            id="password-feedback"
            className="text-center text-danger"
          ></small>

          <Button className="my-2" variant="primary" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
    </Card>
  );
}

export default Signup;
