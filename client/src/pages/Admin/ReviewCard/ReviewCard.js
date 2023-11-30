import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router";

function ReviewCard() {
  const { id } = useParams();
  const [card, setCard] = useState({});

async function fetchReviewCard () {
   try { 
    const response = await fetch(`http://localhost:1919/api/admin/reviewcard/${id}`)
    if (response.ok) {
        const data = await response.json()
        setCard(data)
    }
    } catch (err) {
        console.log(err)
   }
}
fetchReviewCard()



  return (
    <>
      <Container>
        <Card className="col-6 mx-auto text-center">
          <Card.Img className="card-image" variant="top" src={`${card.imageURL}`} />
          <h1>{card.player} - {card.year}</h1>
          <Card.Title>{card.team} - {card.sport} </Card.Title>
          <Card.Title>{card.price} - {card.condition}</Card.Title>
          <Card.Text>{card.description}</Card.Text>
        </Card>
      </Container>
    </>
  );
}

export default ReviewCard;
