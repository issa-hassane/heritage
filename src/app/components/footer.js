import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ListGroup, ListGroupItem } from "react-bootstrap";

import FooterCTA from "./footer-cta";

function Footer() {
  return (
    <footer
      className="py-5"
      style={{
        background: "#F8F2EC",
      }}
    >
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h3>More:</h3>
            <ListGroup variant="flush">
              <ListGroupItem className="bg-transparent">Specials</ListGroupItem>
              <ListGroupItem className="bg-transparent">New Profucts</ListGroupItem>
              <ListGroupItem className="bg-transparent">Best sellers</ListGroupItem>
              <ListGroupItem className="bg-transparent">About us</ListGroupItem>
              <ListGroupItem className="bg-transparent">Conditions of use</ListGroupItem>
              <ListGroupItem className="bg-transparent">Shipping and returns</ListGroupItem>
              <ListGroupItem className="bg-transparent">FAQ</ListGroupItem>
            </ListGroup>
            {/* <ul className="list-group list-group-flush">
            </ul> */}
          </Col>
          <Col xs={12} md={6}>
            <FooterCTA></FooterCTA>
          </Col>
        </Row>
        <hr />
        <Row>
          {/* footer icons */}
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
