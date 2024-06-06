import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  //getting all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/products/product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      console.log("Something went wrong while getting all products");
    }
  };

  //lifecycle method

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout title={"Products"}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1> All Products</h1>
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p._id}`}
                className="product-link"
              >
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={`/api/v1/products/product/photo/${p._id}`}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {p.brand.name} {p.model}
                    </h5>
                    <p className="card-text">
                      {p.brand.name} {p.model}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
