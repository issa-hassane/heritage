"use client";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Recent({ data }) {
  return data.map((item) => {
    return (
      <Col>
        <Card style={{ width: "18rem" }}>
          <div
            style={{
              overflow: "hidden",
              height: "20vh",
              display: "grid",
              placeContent: "center",
              position: "relative",
            }}
          >
            <Card.Img variant="top" src={item.imageURL} />
            <p
              style={{
                position: "absolute",
                bottom: "0.5rem",
                right: "0.5rem",
                padding: "0.1rem 0.5rem",
                border: "1.08px",
                border: "4rem",
                backgroundColor: "white",
                borderColor: "#69250D",
              }}
            >
              {item.price}
            </p>
          </div>
          <Card.Body>
            <Card.Title style={{ fontWeight: "bold" }}>{item.title}</Card.Title>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <small className="text-muted">{item.artistName}</small>
              <div style={{ overflow: "hidden", height: "1.5rem", width: "1.5rem", borderRadius: "20%" }}>
                <img src={item.artistProfileUrl} alt={item.artistName} />
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  });
}

export default Recent;
