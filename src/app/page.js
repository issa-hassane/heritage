import Recent from "./recent";
import Link from "next/link";
import Button from "react-bootstrap/Button";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  const recentlyVisitedData = [
    {
      imageURL: "https://placehold.it/480",
      title: "Hello",
      artistName: "Hello",
      artistProfileUrl: "https://placehold.it/480",
      price: 10000,
    },
    {
      imageURL: "https://placehold.it/480",
      title: "Hello",
      artistName: "Hello",
      artistProfileUrl: "https://placehold.it/480",
      price: 10000,
    },
    {
      imageURL: "https://placehold.it/480",
      title: "Hello",
      artistName: "Hello",
      artistProfileUrl: "https://placehold.it/480",
      price: 10000,
    },
    {
      imageURL: "https://placehold.it/480",
      title: "Hello",
      artistName: "Hello",
      artistProfileUrl: "https://placehold.it/480",
      price: 10000,
    },
  ];

  const artisanData = [
    {
      name: "Placeholder",
      id: "place",
      imageUrl: "https://placehold.it/200",
    },
    {
      name: "Placeholder",
      id: "place",
      imageUrl: "https://placehold.it/200",
    },
    {
      name: "Placeholder",
      id: "place",
      imageUrl: "https://placehold.it/200",
    },
    {
      name: "Placeholder",
      id: "place",
      imageUrl: "https://placehold.it/200",
    },
  ];

  return (
    <main
      className="my-2"
      style={{
        height: "100vh",
        backgroundImage: "linear-gradient(to bottom,#FFFFFF,#FCD7AB )",
      }}
    >
      <div className="container">
        <section>
          <h4
            style={{
              color: "#382111",
              textTransform: "uppercase",
              letterSpacing: "0.1rem",
              fontWeight: "bold",
              color: "#382111",
            }}
            className="bodyFontFamily"
          >
            Recently Visited
          </h4>
          <Row className="my-2">
            <Recent data={recentlyVisitedData}></Recent>
          </Row>
        </section>
        <section className="my-4">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h4
              style={{
                textTransform: "uppercase",
                letterSpacing: "0.1rem",
                fontWeight: "bold",
                color: "#382111",
              }}
              className="bodyFontFamily"
            >
              Artisans
            </h4>
            <Link href={"/"} style={{ textDecoration: "none", color: "#382111", boxShadow: "" }}>
              View all
            </Link>
          </div>
          <Row className="my-2">
            {artisanData.map((artisan) => {
              return (
                <Col>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      backgroundColor: "white",
                    }}
                    className="p-3 rounded"
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div>{/* image */}</div>
                      <div style={{ display: "grid", gap: "0.5rem" }}>
                        <h5>{artisan.name}</h5>
                        <p>{artisan.id}</p>
                      </div>
                    </div>
                    <Button variant="primary" style={{ padding: "0.5rem" }} className="rounded">
                      Follow
                    </Button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </section>
        <section>{/* about us */}</section>
      </div>
    </main>
  );
}
