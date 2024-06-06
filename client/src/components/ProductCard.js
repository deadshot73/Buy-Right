import React, { useState, useEffect } from "react";
import BookmarkIcon from "./bookmark.png";
import BookmarkIconFilled from "./bookmark-fill.png";
import AmazonIcon from "./Amazon_logo.svg.png";
import FlipkartIcon from "./flipkart.svg";
import CromaIcon from "./croma.jpg";
import StarFill from "./star-fill.png";
import { useSaved } from "../context/savedProducts";
import { Link } from "react-router-dom";
const ProductCard = ({ p }) => {
  const [saved, setSaved] = useSaved();
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    // Check if the product is already saved
    setIsSaved(saved.some((item) => item?._id === p?._id));
  }, [saved, p?._id]);

  const toggleSaveProduct = () => {
    let updatedSavedProducts;
    if (isSaved) {
      // Remove from saved products
      updatedSavedProducts = saved.filter((item) => item?._id !== p?._id);
    } else {
      // Add to saved products
      updatedSavedProducts = [...saved, p];
    }
    setSaved(updatedSavedProducts);
    localStorage.setItem(
      "saved-products",
      JSON.stringify(updatedSavedProducts)
    );
    setIsSaved(!isSaved);
  };

  return (
    <div className="card main-product-card">
      <div className="main-card-content">
        <div className="col-md-5 p-2">
          <Link to={`/products/${p?.slug}`}>
            <div className="main-card-media-container">
              <img
                src={`/api/v1/products/product/photo/${p?._id}`}
                alt={p?.name}
              />
            </div>
          </Link>
          <div className="card-action-rail">
            <button
              className="btn btn-primary save-product-button"
              onClick={toggleSaveProduct}
            >
              <img
                src={isSaved ? BookmarkIconFilled : BookmarkIcon}
                alt="Bookmark"
                style={{ height: 25 }}
              />{" "}
              {isSaved ? "Unsave Product" : "Save Product"}
            </button>
          </div>
        </div>
        <div className="col-md-7 py-2">
          <div className="main-card-body">
            <Link to={`/products/${p?.slug}`}>
              <div className="main-card-body-header">
                <h5 className="main-card-title">{p?.name}</h5>
              </div>
              <div className="main-card-body-product-tags">
                {p?.badges.map((badge, index) => (
                  <span
                    key={index}
                    className="main-product-card-badge"
                    style={{
                      color: "white",
                      background:
                        badge === "User Friendly"
                          ? "#0D6EFD"
                          : badge === "Large Storage"
                          ? "#D63384"
                          : badge === "Safety & Protection"
                          ? "#FFC107"
                          : badge === "Advanced Cooling"
                          ? "#0DCAF0"
                          : badge === "Hygiene & Freshness"
                          ? "#198754"
                          : badge === "Energy Efficient"
                          ? "#8540F5"
                          : "blue",
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <div className="main-card-key-feature">
                <div className="main-card-key-features-row">
                  <div>{p?.keyFeatures[0]}</div>
                  <div>{p?.keyFeatures[1]}</div>
                </div>
                <div className="main-card-key-features-row">
                  <div>{p?.keyFeatures[2]}</div>
                  <div>{p?.keyFeatures[3]}</div>
                </div>
                <div className="main-card-key-features-row">
                  <div>{p?.keyFeatures[4]}</div>
                  <div>{p?.keyFeatures[5]}</div>
                </div>
                <div className="main-card-key-features-row">
                  <div>{p?.keyFeatures[6]}</div>
                  <div>{p?.keyFeatures[7]}</div>
                </div>
                <div className="main-card-key-features-row">
                  <div>{p?.keyFeatures[8]}</div>
                  <div>{p?.keyFeatures[9]}</div>
                </div>
              </div>
            </Link>
            <div className="main-card-body-ecommerce-links">
              <div className="ecommerce-link">
                <img src={AmazonIcon} style={{ height: 30, width: 100 }} />
                <p>
                  {p?.amazonRating}{" "}
                  <img src={StarFill} style={{ height: 20 }} alt />
                </p>
                <button style={{ height: 30 }}>{p?.amazonPrice}</button>
              </div>
              <div className="ecommerce-link">
                <img src={FlipkartIcon} style={{ height: 30, width: 100 }} />
                <p>
                  {p?.flipkartRating}{" "}
                  <img src={StarFill} style={{ height: 20 }} alt />
                </p>
                <button style={{ height: 30 }}>{p?.flipkartPrice}</button>
              </div>
              <div className="ecommerce-link">
                <img src={CromaIcon} style={{ height: 30, width: 100 }} />
                <p>
                  {p?.cromaRating}
                  <img src={StarFill} style={{ height: 20 }} alt />
                </p>
                <button style={{ height: 30 }}>{p?.cromaPrice}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
