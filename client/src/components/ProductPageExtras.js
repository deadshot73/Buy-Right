import React from "react";
import ProductCard from "./ProductCard";

const ProductPageExtras = ({ p }) => {
  return (
    <div
      className="container product-page-extras"
      style={{ border: "1px solid #a2abb5" }}
    >
      <div className="row">
        <div className="col-md-8" style={{ border: "1px solid #a2abb5" }}>
          <h3 className="m-2" style={{ color: "rgb(101, 112, 162)" }}>
            Similar Products
          </h3>
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active d-flex justify-content-center">
                <ProductCard p={p} />
              </div>
              <div className="carousel-item d-flex justify-content-center">
                <ProductCard p={p} />
              </div>
              <div className="carousel-item d-flex justify-content-center">
                <ProductCard p={p} />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
              style={{
                backgroundColor: "black",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "0",
              }}
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span>Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
              style={{
                backgroundColor: "black",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                right: "0",
              }}
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span>Next</span>
            </button>
          </div>
        </div>
        <div className="col-md-4" style={{ border: "1px solid #a2abb5" }}>
          <h3 className="m-2" style={{ color: "rgb(101, 112, 162)" }}>
            Related Readings
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProductPageExtras;
