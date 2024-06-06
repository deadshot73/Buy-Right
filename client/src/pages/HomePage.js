import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import { useAuth } from "../context/auth";
import FilterButton from "./filter.png";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { Checkbox } from "antd";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [refrigeratorTypes, setRefrigeratorTypes] = useState([]);
  const [freezerMounts, setFreezerMounts] = useState([]);
  const [brandChecked, setBrandChecked] = useState([]);
  const [refrigeratorTypeChecked, setRefrigeratorTypeChecked] = useState([]);
  const [freezerMountChecked, setFreezerMountChecked] = useState([]);
  //get all brands
  const getAllBrands = async () => {
    try {
      const { data } = await axios.get("/api/v1/specs/brands");
      if (data?.success) {
        setBrands(data?.spec);
      }
    } catch (error) {
      console.log("Something went wrong in getting brands");
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBrands();
  }, []);

  //get all refrigerator types
  const getAllRefrigeratorTypes = async () => {
    try {
      const { data } = await axios.get("/api/v1/specs/refrigerator-type");
      if (data?.success) {
        setRefrigeratorTypes(data?.spec);
      }
    } catch (error) {
      console.log("Something went wrong in getting Refrigerator Types");
      console.log(error);
    }
  };

  useEffect(() => {
    getAllRefrigeratorTypes();
  }, []);

  //get all freezer mounts
  const getAllFreezerMounts = async () => {
    try {
      const { data } = await axios.get("/api/v1/specs/freezer-mount");
      if (data?.success) {
        setFreezerMounts(data?.spec);
      }
    } catch (error) {
      console.log("Something went wrong in getting Freezer Mounts");
      console.log(error);
    }
  };

  useEffect(() => {
    getAllFreezerMounts();
  }, []);
  //getting all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/products/product");
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
      console.log("Something went wrong while getting all products");
    }
  };

  //lifecycle method

  useEffect(() => {
    if (
      !brandChecked.length &&
      !refrigeratorTypeChecked.length &&
      !freezerMountChecked.length
    )
      getAllProducts();
  }, [brandChecked, refrigeratorTypeChecked, freezerMountChecked]);
  useEffect(() => {
    if (
      brandChecked.length ||
      refrigeratorTypeChecked.length ||
      freezerMountChecked.length
    )
      filteredProducts();
  }, [brandChecked, refrigeratorTypeChecked, freezerMountChecked]);
  //get filtered products
  const filteredProducts = async () => {
    try {
      const { data } = await axios.post(
        "/api/v1/products/product/filter-products",
        { brandChecked, refrigeratorTypeChecked, freezerMountChecked }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  // brand filter function
  const handleBrandFilter = (value, id) => {
    let all = [...brandChecked];
    if (value) {
      all.push(id);
    } else all = all.filter((b) => b !== id);
    setBrandChecked(all);
  };

  // Refrigerator Type filter function
  const handleRefrigeratorTypeFilter = (value, id) => {
    let all = [...refrigeratorTypeChecked];
    if (value) {
      all.push(id);
    } else all = all.filter((b) => b !== id);
    setRefrigeratorTypeChecked(all);
  };

  // freezer mount filter function
  const handleFreezerMountFilter = (value, id) => {
    let all = [...freezerMountChecked];
    if (value) {
      all.push(id);
    } else all = all.filter((b) => b !== id);
    setFreezerMountChecked(all);
  };

  return (
    <Layout title={"Buy Right - Home"}>
      <div className="container">
        <div className="home-filter">
          <button
            className="btn btn-primary home-filter-custom-button"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#staticBackdrop"
            aria-controls="staticBackdrop"
          >
            <img src={FilterButton} style={{ height: 25 }} alt /> Filters
          </button>
          <div
            className="offcanvas offcanvas-start"
            data-bs-backdrop="static"
            tabIndex={-1}
            id="staticBackdrop"
            aria-labelledby="staticBackdropLabel"
          >
            <div className="offcanvas-header mx-4">
              <h4 className="text-center">Filter Products</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div
              className="offcanvas-body"
              style={{ maxHeight: "100vh", overflowY: "auto" }}
            >
              <div className="filter-category">Brands</div>
              <div className="filter-choices">
                {brands?.map((b) => (
                  <Checkbox
                    key={b._id}
                    onChange={(e) => handleBrandFilter(e.target.checked, b._id)}
                  >
                    {b.name}
                  </Checkbox>
                ))}
              </div>
              <div className="filter-category">Refrigerator Type</div>
              <div className="filter-choices">
                {refrigeratorTypes?.map((b) => (
                  <Checkbox
                    key={b._id}
                    onChange={(e) =>
                      handleRefrigeratorTypeFilter(e.target.checked, b._id)
                    }
                  >
                    {b.name}
                  </Checkbox>
                ))}
              </div>
              <div className="filter-category">Freezer Mount</div>
              <div className="filter-choices">
                {freezerMounts?.map((b) => (
                  <Checkbox
                    key={b._id}
                    onChange={(e) =>
                      handleFreezerMountFilter(e.target.checked, b._id)
                    }
                  >
                    {b.name}
                  </Checkbox>
                ))}
              </div>
              <div>
                <button
                  className="btn btn-danger my-4"
                  onClick={() => window.location.reload()}
                >
                  RESET FILTERS
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-3">
          <div className="d-flex flex-wrap gap-3">
            {products?.map((product) => (
              <ProductCard key={product._id} p={product} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
