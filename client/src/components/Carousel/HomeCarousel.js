import React from "react";
import { Carousel, Button, ButtonGroup, Container } from "react-bootstrap";
import cardGroupFanned from "../../assets/images/cardGroupFanned.png";
import cardGroupRound from "../../assets/images/cardGroupRound.png";
import CarouselOverlay from "../CarouselOverlay";
import "./styles.css";

function HomeCarousel() {
  return (
    <Carousel interval={4000}>
      <Carousel.Item data-slide="next">
        <CarouselOverlay>
          <h3>Browse Thousands Of Individual Cards</h3>
          <p>10% off your first order over $50</p>
          <Container>
            <ButtonGroup size="lg" aria-label="sport type button group">
              <Button variant="primary">Baseball</Button>
              <Button variant="primary">Football</Button>
              <Button variant="primary">All Cards</Button>
            </ButtonGroup>
          </Container>
        </CarouselOverlay>
        <img
          className="cardGroupFanned"
          src={cardGroupFanned}
          alt="baseball cards from the nineties fanned out"
        />
      </Carousel.Item>
      <Carousel.Item data-slide="next">
        <CarouselOverlay>
          <h3>Browse Card Lots And Bundles</h3>
          <p>10% off your first order over $50</p>
          <Container>
            <ButtonGroup size="lg" aria-label="sport type button group">
              <Button variant="primary">Baseball</Button>
              <Button variant="primary">Football</Button>
              <Button variant="primary">All Cards</Button>
            </ButtonGroup>
          </Container>
        </CarouselOverlay>
        <img
          className="cardGroupRound"
          src={cardGroupRound}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
