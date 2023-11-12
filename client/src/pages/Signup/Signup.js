import React, { useState } from "react";
import { Button, Form, Card, Container } from "react-bootstrap";
import { createUser, verify } from "../../axios/users_api.js";
import { useUser } from "../../context/userContext.js";
import { useNavigate, Link } from "react-router-dom";
import "./styles.css";

function Signup() {
  const { login } = useUser();
  const navigate = useNavigate();
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
    setPasswordError("");
    setEmailError("");
    if (formData.confirm !== formData.password) {
      setPasswordError("Passwords Must Match");
    } else {
      try {
        const user = await createUser(formData);
        const token = user.data.token;
        sessionStorage.setItem("jwtToken", token);
        const authorized = await verify(token);
        login(authorized.data);
        navigate("/");
      } catch (error) {
        if (error.response) {
          // The request was made, but the server responded with an error
          setEmailError(error.response.data);
        } else if (error.request) {
          // The request was made, but no response was received
          setEmailError(
            "No response received from the server. Please try again."
          );
        } else {
          // Something happened in setting up the request that triggered an error
          setEmailError("An error occurred. Please try again later.");
        }
      }
    }
  };

  return (
    <>
    <Card className="col-sm-12 col-md-10 col-lg-8 mx-auto mb-5 shadow p-4">
      <Container className="text-center my-3 w-75 form-header"> 
      <h5>Northwest Card Company will never share your information.</h5>
      </Container>
      <Form onSubmit={handleSubmit}>
        <Container className="row">
          <Form.Group className="my-2" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Email"
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
              placeholder="First Name"
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
              placeholder="Last Name"
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
     <Card className="col-sm-12 col-md-10 col-lg-8 mx-auto mb-5 shadow p-3 text-center">
     <Card.Text>Already A Member? <Link to="/users/signin">Log In To Your Account</Link></Card.Text>
   </Card>
   </>
  );
}

export default Signup;
