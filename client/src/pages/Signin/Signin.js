import React, { useState } from "react";
import { Button, Form, Card, Container } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../../context/userContext.js";
import { loginUser, verify } from "../../axios/users_api.js";
import "./styles.css";

function SignIn() {
  const { login } = useUser();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    try {
      const user = await loginUser(formData);
      const token = user.data.token;
      sessionStorage.setItem("jwtToken", token);
      const authorized = await verify(token);
      login(authorized.data);
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <>
      <Card className="col-sm-12 col-md-10 col-lg-8 mx-auto mb-5 shadow p-4">
        <Container className="text-center w-75 my-3 form-header">
          <h5>
            Wecome back to Northwest Card Company, Please sign in to your
            account.
          </h5>
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
            <small className="text-danger">{errorMessage}</small>
            <Button className="my-2" variant="primary" type="submit">
              Submit
            </Button>
          </Container>
        </Form>
      </Card>

      <Card className="col-sm-12 col-md-10 col-lg-8 mx-auto mb-5 shadow p-3 text-center">
        <Card.Text>
          Not A Member? <Link to="/users/signup">Create An Account</Link>
        </Card.Text>
      </Card>
    </>
  );
}

export default SignIn;
