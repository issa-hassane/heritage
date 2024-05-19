function CartFooter() {
  return (
    <footer className="pt-5 px-5 bg-brown-secondary text-blue-primary">
      <h2 className="footerHeader">HERITAGE HAVEN</h2>
      <p className="footerComent">by enactus kiit-kiss</p>
      <div className="row">
        <div className="col-6 col-md-1 mb-3">
          <h5 className="footerSubHeader">Products</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Clothing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Painting
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Crafts
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Leather Goods
                <br />& many more..
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-1 mb-3">
          <h5 className="footerSubHeader">Learn</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Company News
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Resources
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Case Studies
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                About Artisans
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-1 mb-3">
          <h5 className="footerSubHeader">Company</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Our Story
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Team
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Careers
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Support Centers
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                News & Press
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md-1 mb-3">
          <h5 className="footerSubHeader">Shoppers</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Account Login
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Shop Heritage Haven
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Security
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <h5 className="footerSubHeader">Contact</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Contact us
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Feedback
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                General Inquaries
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">
                Emailaddress
              </label>
              <input
                id="newsletter1"
                type="text"
                className="form-control inputFeild"
                placeholder="Email address"
              />
              <button
                className="btn btn-primary bg-blue-secondary box-shadow rounded-pill px-4"
                type="button"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 border-top">
        <p className="footerClosedCaptions">&copy; 2023 Heritage Haven, Inc.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <a className="footerClosedCaptions" href="#">
              {" "}
              Legal
            </a>
          </li>
          <li className="ms-3">
            <a className="footerClosedCaptions" href="#">
              Privacy Policy
            </a>
          </li>
          <li className="ms-3">
            <a className="footerClosedCaptions" href="#">
              Privacy Center
            </a>
          </li>
          <li className="ms-3">
            <a className="footerClosedCaptions" href="#">
              Terms
            </a>
          </li>
        </ul>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <a className="footerClosedCaptions" href="#">
              {" "}
              Twitter
            </a>
          </li>
          <li className="ms-3">
            <a className="footerClosedCaptions" href="#">
              {" "}
              Facebook
            </a>
          </li>
          <li className="ms-3">
            <a className="footerClosedCaptions" href="#">
              {" "}
              Google
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default CartFooter;
