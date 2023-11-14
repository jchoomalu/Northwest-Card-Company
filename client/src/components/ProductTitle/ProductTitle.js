import React from "react";
import { Container } from "react-bootstrap";
import "./styles.css"
function ProductTitle({ children }) {
  return (
    <Container>
      <h1 className="title">{children}</h1>
    </Container>
  );
}

export default ProductTitle;
