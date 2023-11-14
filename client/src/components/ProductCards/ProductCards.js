import React, { useState, useEffect } from "react";
import { Container, Row, Card, Collapse, Button } from "react-bootstrap";
import { getFive } from "../../axios/product_api.js";
import ProductTitle from "../ProductTitle/ProductTitle.js";
import "./styles.css";

const ProductCards = () => {
  const [fiveRandomCards, setFiveRandomCards] = useState([]);
  const [openStates, setOpenStates] = useState({});

  useEffect(() => {
    getFive().then((res) => {
      const initialOpenStates = {};
      res.forEach((card) => {
        initialOpenStates[card.imageURL] = false;
      });
      setOpenStates(initialOpenStates);
      setFiveRandomCards(res);
    });
  }, []);

  const handleToggle = (cardURL) => {
    setOpenStates((prevOpenStates) => ({
      ...prevOpenStates,
      [cardURL]: !prevOpenStates[cardURL],
    }));
  };

  return (
    <Container>
      <ProductTitle>Featured Cards</ProductTitle>
      <Row>
        {fiveRandomCards.map((card) => (
          <Card key={card.imageURL} className="product-card p-2 mx-auto col-6 col-md-4 col-lg-2 ">
            <Card.Img
              className="card-image"
              variant="top"
              src={card.imageURL}
            />
            <Card.Body>
              <Container className="details-container">
              <Card.Title>{card.player}</Card.Title>
              <Card.Subtitle className="text-muted mb-1">
                {`${card.year} ${card.team}`}
              </Card.Subtitle>
              <Card.Subtitle>{card.brand}</Card.Subtitle>
              </Container>
              <hr />
              <Button
                onClick={() => handleToggle(card.imageURL)}
                aria-controls={`read card desription ${card.imageURL}`}
                aria-expanded={openStates[card.imageURL]}
              >
                View Card Details
              </Button>
              <Collapse in={openStates[card.imageURL]}>
                <Card.Text>{card.description}</Card.Text>
              </Collapse>
            </Card.Body>
          </Card>
        ))}
        </Row>
        <br />
    </Container>
  );
};

export default ProductCards;
