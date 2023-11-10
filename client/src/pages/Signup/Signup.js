import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form, Card, Container } from "react-bootstrap";
import { signup } from "../../axios/users_api.js";

function Signup() {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPasswordError("")
    setEmailError("")
    if (formData.confirm !== formData.password) {
      setPasswordError("Passwords Must Match")
    } else {
      try {
        const user = await signup(formData);
        console.log(user);
      } catch (error) {
        setEmailError(error.response.data);
      }
    }
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
            <small className="text-danger mx-auto">{emailError}</small>
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

          <Form.Group className="my-2" controlId="formConfirm">
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

          <small className="text-danger">{passwordError}</small>

          <Button className="my-2" variant="primary" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
    </Card>
  );
}

export default Signup;
