import React from "react";
import { Carousel, Container, Row, Card } from "react-bootstrap";
import griffeyUpperDeck from "../assets/cards/griffeyUpperDeck.jpg";
import "./styles.css"

const CarouselProducts = () => {
  return (
    <Container>
      <Row>
        <Card className="product-card p-2">
          <Card.Img className="product-image" variant="top" src={griffeyUpperDeck} />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Img variant="bottom" src="holder.js/100px180" />
        </Card>
      </Row>
    </Container>
  );
};

export default CarouselProducts;
