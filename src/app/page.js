import Link from "next/link";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Recent from "./recent";
import HomeCarousel from "./home-carousel";

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
      name: "Raghuram",
      id: "raghuram",
      imageUrl: "https://placehold.it/200",
    },
    {
      name: "Ahemed",
      id: "Ahemed",
      imageUrl: "https://placehold.it/200",
    },
    {
      name: "Shanta",
      id: "shanta",
      imageUrl: "https://placehold.it/200",
    },
    {
      name: "Kamla",
      id: "kamla",
      imageUrl: "https://placehold.it/200",
    },
  ];

  return (
    <main
      className="py-4"
      style={{
        minHeight: "100vh",
        backgroundImage: "linear-gradient(to bottom,#FFFFFF,#FCD7AB )",
      }}
    >
      <div className="container">
        <section>
          <HomeCarousel />
        </section>
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
            {/* TODO: fix recently visited on mobile view */}
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
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.4rem" }}>
                      <div
                        style={{
                          width: "65px",
                          aspectRatio: "1",
                          borderRadius: "10px",
                          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                        }}
                        className="overflow-hidden"
                      >
                        <img src={artisan.imageUrl} alt={artisan.name} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", height: "5vh" }}>
                        <h5 style={{ fontWeight: "bold" }}>{artisan.name}</h5>
                        <p className="text-secondary fs-6">@{artisan.id}</p>
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
        <section className="my-5">
          <Row>
            <Col xs={12} md={6}>
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
                About Us
              </h4>
              <p
                className="fs-6 mb-4"
                style={{
                  color: "#382111",
                  textTransform: "uppercase",
                  letterSpacing: "0.1rem",
                  fontWeight: "bold",
                  color: "#382111",
                }}
              >
                Where Sustainability Meets Artistry. Preserving Legacy, Embracing Craftsmanship: Discover the Artistry
                of Heritage Hands.
              </p>
              <p style={{ letterSpacing: "0.0125rem" }}>
                Welcome to Heritage Hands, an exquisite online marketplace dedicated to promoting sustainable
                alternatives, showcasing the remarkable craftsmanship of artisans, and celebrating the beauty of locally
                handmade crafts. Our vision is to curate an extraordinary shopping journey, where discerning customers
                can explore and acquire environmentally conscious, artfully crafted treasures. With a user-friendly
                interface, seamless navigation, and captivating aesthetics, our platform offers a plethora of product
                categories and comprehensive search capabilities, ensuring the effortless discovery of desired items.
                Join us on this enchanting voyage of mindful consumption and timeless heritage.
              </p>
            </Col>
            <Col xs={12} md={6}>
              {/* <div
                style={{
                  overflow: "hidden",
                  height: "50vh",
                  display: "grid",
                  placeContent: "center",
                  position: "relative",
                }}
              >
                <img
                  src="https://placehold.it/720"
                  alt="Heritage Hands"
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: "0",
                    background: "linear-gradient(89.38deg, #F9E5D4 0.53%, rgba(0, 0, 0, 0) 99.49%)",
                  }}
                ></div>
              </div> */}
            </Col>
          </Row>
        </section>
      </div>
    </main>
  );
}
