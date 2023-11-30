import React, { useState, useRef } from "react";
import { Form, Button, Container, Card, Overlay, Row } from "react-bootstrap";
import { addCard } from "../../../axios/product_api";
import "./styles.css";
import AddCardImage from "../AddCardImage";

function AddCards() {
  const [show, setShow] = useState("");
  const [card, setCard] = useState("");
  const [display, setDisplay] = useState("details");
  const [errorMessage, setErrorMessage] = useState("");
  const target = useRef(null);
  const [formData, setFormData] = useState({
    player: "",
    team: "",
    year: "",
    brand: "",
    sport: "",
    condition: "",
    cardNumber: "",
    price: "",
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
      let formattedPrice = parseInt(formData.price);
      formattedPrice = formatAsDollarsAndCents(formattedPrice);
      formData.price = formattedPrice;
      const response = await addCard(formData);
      if (response) {
        setCard(response);
        setDisplay("image");
      }
    } catch (error) {
      console.error("Error adding card:", error);
      setErrorMessage("Failed to add card. Please try again."); // Display error message to the user
    }
  };

  const getNumber = (event) => {
    const inputValue = event.target.value;
    console.log(typeof inputValue);
    setFormData((prevData) => ({
      ...prevData,
      price: prevData.price ? prevData.price + inputValue : inputValue,
    }));
  };

  const dismiss = (e) => {
    if (show) {
      setShow("");
    }
  };

  function formatAsDollarsAndCents(amount) {
    // Ensure the input is a number
    if (typeof amount !== "number") {
      return "Invalid input";
    }

    // Convert the amount to dollars and cents format
    const dollars = Math.floor(amount / 100);
    const cents = amount % 100;

    // Format the result
    const formattedAmount = `$${dollars}.${cents.toString().padStart(2, "0")}`;

    return formattedAmount;
  }

  if (display === "details") {
    return (
      <>
        <Card className="col-sm-12 col-md-10 col-lg-8 mx-auto mb-5 shadow p-4">
          <Container className="text-center w-75 my-3 form-header">
            <h5>Add Cards</h5>
          </Container>
          <Form onSubmit={handleSubmit}>
            <Container className="row">
              <Form.Group className="my-2 col-md-6" controlId="formPlayer">
                <Form.Label>Player Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Player"
                  name="player"
                  value={formData.player}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="my-2 col-md-6" controlId="formTeam">
                <Form.Label>Team</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Team"
                  name="team"
                  value={formData.team}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="my-2 col-md-6" controlId="formYear">
                <Form.Label>Year</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="my-2 col-md-6" controlId="formBrand">
                <Form.Label>Brand</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="my-2 col-md-6" controlId="formSport">
                <Form.Label>Select A Sport:</Form.Label>
                <Form.Control
                  as="select"
                  onChange={handleChange}
                  name="sport"
                  value={formData.sport}
                  required
                >
                  <option value="" disabled hidden>
                    Select Sport
                  </option>
                  <option value="Baseball" name="Baseball">
                    Baseball
                  </option>
                  <option value="Basketball" name="Basketball">
                    Basketball
                  </option>
                  <option value="Football" name="Football">
                    Football
                  </option>
                  <option value="Hockey" name="Hockey">
                    Hockey
                  </option>
                  <option value="Other" name="Other">
                    Other
                  </option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="my-2 col-md-6" controlId="formCondition">
                <Form.Label>Select Condition:</Form.Label>
                <Form.Control
                  as="select"
                  placeholder="Select Condition"
                  onChange={handleChange}
                  name="condition"
                  value={formData.condition}
                  required
                >
                  <option value="" disabled hidden>
                    Select Condition
                  </option>
                  <option value="Mint Or Near Mint" name="Mint Or Near Mint">
                    Mint Or Near Mint
                  </option>
                  <option value="Excellent" name="Excellent">
                    Excellent
                  </option>
                  <option value="Very Good" name="Very Good">
                    Very Good
                  </option>
                  <option value="Fair" name="Fair">
                    Fair
                  </option>
                  <option value="Poor" name="Poor">
                    Poor
                  </option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="my-2 col-md-6" controlId="formCardNumber">
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Card Number"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group
                ref={target}
                onClick={() => setShow(!show)}
                className="my-2 col-md-6"
                controlId="formPrice"
              >
                <Form.Label>Price</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </Form.Group>
              <Overlay target={target.current} show={show} placement="top">
                {({
                  placement: _placement,
                  arrowProps: _arrowProps,
                  show: _show,
                  popper: _popper,
                  hasDoneInitialMeasure: _hasDoneInitialMeasure,
                  ...props
                }) => (
                  <div className="overlay" {...props}>
                    <Row>
                      <Button
                        onClick={getNumber}
                        value="1"
                        className="col-4"
                        variant="primary"
                      >
                        1
                      </Button>
                      <Button
                        onClick={getNumber}
                        value="2"
                        className="col-4"
                        variant="primary"
                      >
                        2
                      </Button>
                      <Button
                        onClick={getNumber}
                        value="3"
                        className="col-4"
                        variant="primary"
                      >
                        3
                      </Button>
                    </Row>
                    <Row>
                      <Button
                        onClick={getNumber}
                        value="4"
                        className="col-4"
                        variant="primary"
                      >
                        4
                      </Button>
                      <Button
                        onClick={getNumber}
                        value="5"
                        className="col-4"
                        variant="primary"
                      >
                        5
                      </Button>
                      <Button
                        onClick={getNumber}
                        value="6"
                        className="col-4"
                        variant="primary"
                      >
                        6
                      </Button>
                    </Row>
                    <Row>
                      <Button
                        onClick={getNumber}
                        value="7"
                        className="col-4"
                        variant="primary"
                      >
                        7
                      </Button>
                      <Button
                        onClick={getNumber}
                        value="8"
                        className="col-4"
                        variant="primary"
                      >
                        8
                      </Button>
                      <Button
                        onClick={getNumber}
                        value="9"
                        className="col-4"
                        variant="primary"
                      >
                        9
                      </Button>
                    </Row>
                    <Row>
                      <Button
                        onClick={getNumber}
                        value="0"
                        className="col-4"
                        variant="primary"
                      >
                        0
                      </Button>
                      <Button
                        onClick={dismiss}
                        value="-"
                        className="col-8"
                        variant="danger"
                      >
                        X
                      </Button>
                    </Row>
                  </div>
                )}
              </Overlay>

              <small className="text-danger">{errorMessage}</small>
              <Button className="my-2" variant="primary" type="submit">
                Submit
              </Button>
            </Container>
          </Form>
        </Card>
      </>
    );
  } else if (display === "image") {
    return (
      <AddCardImage
        card={card}
        setCard={setCard}
        setDisplay={setDisplay}
        display={display}
      />
    );
  }
}

export default AddCards;
