"use client";

import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Link from "next/link";

function FooterCTA() {
  return (
    <Stack gap={2} className="col-md-5 mx-auto">
      <h3 className="text-uppercase fs-6 text-center">Join The Community</h3>
      <Button style={{ background: "#0097D8" }} className="text-uppercase rounded-pill p-3 fw-bold">
        Sign up for newsletters
      </Button>
      <Link href={"#"} className="text-center">
        <Button variant="link" className="text-decoration-none text-uppercase text-center text-primary-emphasis">
          Try our mystery box
        </Button>
      </Link>
    </Stack>
  );
}

export default FooterCTA;
