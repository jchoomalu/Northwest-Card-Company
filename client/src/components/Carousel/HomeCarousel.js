import React from "react";
import { Carousel } from "react-bootstrap";
import cardGroupFanned from "../../assets/images/cardGroupFanned.png";
import cardGroupRound from "../../assets/images/cardGroupRound.png";
import CarouselOverlay from "../CarouselOverlay";
import "./styles.css";

function HomeCarousel() {


  return (
    <Carousel interval={4000}>
      <Carousel.Item data-slide="next">
        <CarouselOverlay>
          <h3>
            Browse Hundreds of cards
          </h3>
        </CarouselOverlay>
        <img
          className="cardGroupFanned"
          src={cardGroupFanned}
          alt="baseball cards from the nineties fanned out"
        />
      </Carousel.Item>
      <Carousel.Item  data-slide="next">
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
