import React, { useState, useEffect } from "react";
import AmazonIcon from "./Amazon_logo.svg.png";
import ArrowUpRight from "./arrow-up-right.png";
import FlipkartIcon from "./flipkart.svg";
import CromaIcon from "./croma.jpg";
import BookmarkIcon from "./bookmark.png";
import BookmarkIconFilled from "./bookmark-fill.png";
import { useSaved } from "../context/savedProducts";

const ProductPageOverview = ({ p }) => {
  const [saved, setSaved] = useSaved();
  const [isSaved, setIsSaved] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsSaved(saved.some((item) => item?._id === p?._id));
  }, [saved, p?._id]);

  const toggleSaveProduct = () => {
    let updatedSavedProducts;
    if (isSaved) {
      updatedSavedProducts = saved.filter((item) => item?._id !== p?._id);
    } else {
      updatedSavedProducts = [...saved, p];
    }
    setSaved(updatedSavedProducts);
    localStorage.setItem(
      "saved-products",
      JSON.stringify(updatedSavedProducts)
    );
    setIsSaved(!isSaved);
  };
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const badgeColors = {
    "User Friendly": "#0D6EFD",
    "Large Storage": "#D63384",
    "Safety & Protection": "#FFC107",
    "Advanced Cooling": "#0DCAF0",
    "Hygiene & Freshness": "#198754",
    "Energy Efficient": "#8540F5",
    default: "blue",
  };

  return (
    <div className="container card product-page-card">
      <div className="product-overview">
        <div className="row">
          <div className="col-md-4 product-page-overview-media-container">
            <img
              src={`/api/v1/products/product/photo/${p?._id}`}
              className="product-page-overview-image"
            />
          </div>
          <div className="col-md-5">
            <div className="product-page-overview">
              <div className="product-page-card-body-header">
                <h1 className="product-page-card-title">{p?.name}</h1>
              </div>
              <div className="product-page-card-body-product-tags">
                {p?.badges.map((badge, index) => (
                  <span
                    key={index}
                    className="product-page-badge"
                    style={{
                      backgroundColor:
                        badgeColors[badge] || badgeColors.default,
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <div className="product-page-description">
                <p>
                  {isExpanded
                    ? p?.description
                    : `${p?.description.substring(0, 200)}...`}
                  {p?.description.length > 200 && (
                    <span
                      onClick={toggleExpand}
                      style={{ color: "blue", cursor: "pointer" }}
                    >
                      {isExpanded ? " See less" : " See more"}
                    </span>
                  )}
                </p>
              </div>

              <div className="product-page-key-feature">
                {[0, 2, 4, 6, 8].map((i) => (
                  <div key={i} className="product-page-card-key-features-row">
                    <div>{p?.keyFeatures[i]}</div>
                    <div>{p?.keyFeatures[i + 1]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-3 product-page-overview-last-column">
            <div className="product-page-ecommerce-links-box">
              {[
                { icon: AmazonIcon, price: p?.amazonPrice },
                { icon: CromaIcon, price: p?.cromaPrice },
                { icon: FlipkartIcon, price: p?.flipkartPrice },
              ].map((item, index) => (
                <div
                  key={index}
                  className="product-page-ecommerce-link my-3 w-80"
                >
                  <img
                    className="m-2"
                    src={item.icon}
                    alt=""
                    style={{ height: 30, width: 70 }}
                  />

                  <button
                    className="m-2"
                    style={{
                      height: "40px",
                      width: "75px",
                      backgroundColor: "rgba(101, 112, 162, 1)",
                      color: "white",
                      padding: "4px",
                    }}
                  >
                    {item.price} /-
                  </button>
                </div>
              ))}
            </div>

            <div className="product-page-save-product text-center">
              <button
                className="btn btn-primary save-product-button d-flex align-items-center justify-content-center"
                onClick={toggleSaveProduct}
              >
                <img
                  src={isSaved ? BookmarkIconFilled : BookmarkIcon}
                  alt="Bookmark"
                  className="bookmark-icon mx-2"
                />
                {isSaved ? "Unsave Product" : "Save Product"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageOverview;
