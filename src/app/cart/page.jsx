"use client";
import NavBar from "@/app/components/NavBar";
import CartFooter from "@/app/components/CartFooter";
import "./styles.css";
import { useState } from "react";
function Cart() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };
  return (
    <>
      <NavBar />
      <section style={{ background: "#FFDEC3E0" }}>
        <div className="bg-light p-1">
          <div className="container">
            <p className="mb-0 text-blue-primary">Deliver to : Bhubaneswar</p>
          </div>
        </div>
        <div className="container">
          <h1 className="my-4 text-bold">Your cart</h1>
          {/* cart items */}
          <div>
            <div className="row">
              <div className="col-7">
                <div
                  className="card bg-light rounded-5 box-shadow"
                  style={{ width: "45rem" }}
                >
                  <div className="card-body p-4">
                    <div className="row">
                      {/* image (right) part of the cart */}
                      <div className="col-2 px-0 ms-3 me-2">
                        <div className="p-2 rounded-3 bg-body-secondary">
                          {/* use next/Image */}
                          <img
                            className="img-fluid"
                            src="https://s3-alpha-sig.figma.com/img/2579/930f/5d2e60418d61761abe3b7e9922fcea06?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oSn78idg3XIfsApOBHtwxDZ7oxoKGP45QKKY2mYMp54Bp~SM~TwxRidm5qFXtdSIe7lAme2yiS1cTORF5Vn2x213onTbz8cZhHhMCFggOOqQsRPR48KXHlyZldj3OgMMmiaY2JU-9rRU2gzcDYxLBx5f46kzUD6Jg~7iatBPvmSaPbKyM4WLFeAjvZuCckFLjz1pxyD5Oyz2tYFwXseACziVq1~cJRxySJ6Me0Dl1bH7mHFRNRawA795fklkalQSp4CX0h~Cgs42PVgdAeeOojDszPtnF3HJMau2h0Vv~2L4sgHS9kUh54QDaEt1r76C0jysSpcjOQTySegPLVa~Jw__"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        {/* middle part of the card */}
                        <p className="fs-5 text-blue-primary">
                          Mud Art Wall Hanging
                        </p>
                        <p className="text-success">in stock</p>
                        <p className="fs-5 m-0">Rs.2999 </p>
                      </div>
                      <div className="col-3">
                        {/* left side of the card */}
                        <div className="d-flex align-items-center justify-content-around bg-body-secondary rounded-pill w-50 ms-auto">
                          <button
                            type="button"
                            className="btn p-0 ps-1"
                            onClick={handleDecrement}
                          >
                            -
                          </button>
                          <p className="m-0">{count}</p>
                          <button
                            type="button"
                            className="btn p-0 pe-1"
                            onClick={handleIncrement}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div class="card">
                  <div class="card-body">
                    This is some text within a card body.
                  </div>
                </div> */}
              </div>
              <div className="col-5">
                {/* purchase summary section */}
                <div className="card bg-light" style={{ width: "25rem" }}>
                  <div className="card-body px-5">
                    <p className="fs-5 text-blue-primary">Purchase summary</p>
                    <div className="bg-body-secondary rounded-4 promocode">
                      <input
                        className="form-control form-control-lg bg-transparent rounded-bottom rounded-4 border-0 mh-100"
                        type="text"
                        placeholder="Enter a Promocode"
                        aria-label="enter a promocode"
                      />
                      <button
                        type="button"
                        className="btn btn-dark w-100 rounded-3"
                      >
                        Apply
                      </button>
                    </div>

                    <div className="mt-4 px-4">
                      <div className="d-flex justify-content-between">
                        <p className="fs-5">Subtotal</p>
                        <p>Rs. 1000</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="text-muted">Shipping</p>
                        <p className="text-muted">Rs. 1000</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="text-muted">Discount</p>
                        <p className="text-muted">Rs. 1000</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="text-muted">Tax</p>
                        <p className="text-muted">Rs. 1000</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="fs-5 fw-bold">Estimated total</p>
                        <p className="fs-5 fw-bold">Rs. 1000</p>
                      </div>
                    </div>
                    <div className="vstack gap-3 mb-4">
                      <button type="button" className="btn btn-warning w-100">
                        Checkout
                      </button>
                      <button type="button" className="btn btn-secondary w-100">
                        Continue shopping
                      </button>
                      <div>
                        <p className="m-0 fw-semibold">
                          Estimated delivery date :
                        </p>
                        <p className="text-muted">24th August, Thursday</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
      <CartFooter />
    </>
  );
}

export default Cart;
