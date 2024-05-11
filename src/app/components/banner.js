import React from "react";

function Banner() {
  const bannerMessage = "Free Shipping This Week Only";
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBlock: "0.5rem",
        color: "white",
        backgroundColor: "#22374A",
      }}
    >
      {bannerMessage}
    </div>
  );
}

export default Banner;
