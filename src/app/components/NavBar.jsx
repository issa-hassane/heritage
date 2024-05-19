import Image from "next/image";
function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-xl navbar-light p-2"
      aria-label="navbar"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {/* use next/Image */}
          <img
            className="me-5"
            style={{ width: "8rem" }}
            src="https://s3-alpha-sig.figma.com/img/7b1f/e3b6/1adbcc3aff72da2db569a2c2d344951d?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ECBM8N50cBRSFwE1I64p7PP-ZxsNsI8hGL388OUTS116cT6fUWyQNwW20ScR0i2Wn9dXk7EgxevEDYdUxZ5Nx6ydtE3vHQ7XYPESZ1Dji~oZy1FKo9c0PKI~vvJT2ZvmWffpmJwBdgAMQP3lqCTiPQzlBhSQusHWiERyOOXFC27VRmc~scRPckVikgDEwsXyMVIVDaCDVRtBohqHOL8vBcrTa0yvsxA3yX-nsLVKMVUSfPT47DqoeNUIk3wKcXFO12e2-zrY1QhH3a6phJ~SEbKZlMGyi2DUyvN6CH5ZqhMJiL-nFwWf4cTpFaOztEcMMGRTqW55B1tuG1yb9I~vHg__"
            alt=""
          />
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample06"
          aria-controls="navbarsExample06"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="navbarsExample06">
          <ul className="navbar-nav me-auto mb-2 mb-xl-0 gap-3 text-blue-primary">
            <li className="nav-item">
              <a
                className="nav-link text-blue-primary active"
                aria-current="page"
                href="#"
              >
                Shop Now
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-blue-primary" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-blue-primary" href="#">
                Account
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link text-blue-primary dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item text-blue-primary" href="#">
                    category 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-blue-primary" href="#">
                    category 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-blue-primary" href="#">
                    category 3
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="d-flex gap-5 align-items-center">
            <div className="input-group">
              <span
                className="input-group-text bg-white border border-0 border-bottom rounded-0"
                id="basic-addon1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search text-blue-primary"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </span>
              <input
                type="search"
                className="search form-control border border-0 border-bottom rounded-0 text-blue-primary"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic Search"
              />
            </div>

            <a
              className="nav-link d-flex align-items-center gap-2 text-blue-primary"
              href="#"
            >
              <span>Cart</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
            </a>

            <a href="#">
              <img
                style={{ width: "3.5rem" }}
                src="https://s3-alpha-sig.figma.com/img/f701/e78e/8e48abdf0585d58f8f664ecc0091430a?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dHoaHvtsNc6P0JMSUVxalQHU6vQnIecueKFWhhAmpYozkdH5J18O3uh5ELKECX9E-diuFxewAx4mVZqrbiCHOD53KsU4w16JpYYY~e8bUIOdoNLqaLhO3yZs6jpnsOFRX56~nGSnE4FDRHgl7mcI53Rmmsim~CuVtOnunoEtI21VTTFZ58Q88GAUNTPb5GTK0qz81ITMV8Zi2irgwr1vkj-zykZ2cC-l9VMBWq61W7ofPVJflR14KEFUnPA3CROlvSh4TRHDqA1XR9F542AARMLDoWQ5fEdp6E-~z0MMuviM5hoaHCdLsTTPb526FmsxBM~JPLUsquMuTo4zDiI8zA__"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
