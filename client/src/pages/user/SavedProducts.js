import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import { useSaved } from "../../context/savedProducts";

import React from "react";
import ProductCard from "../../components/ProductCard";

const SavedProducts = () => {
  const [saved, setSaved] = useSaved();
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center bg-light p-2">{`Welcome ${
              auth?.token && auth?.user?.name
            } !`}</h1>
          </div>
        </div>
        <div className="row my-2 d-flex flex-wrap gap-3">
          {saved?.map((product) => (
            <ProductCard key={product._id} p={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SavedProducts;
