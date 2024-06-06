import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import ProductCard from "../components/ProductCard";
import { useSearch } from "../context/search";
const Search = () => {
  const [searchValues, setSearchValues] = useSearch();
  useEffect(() => {
    console.log("Search Values:", searchValues);
  }, [searchValues]);

  return (
    <Layout>
      <div className="container">
        <h1>Search Results</h1>
        <h6>
          {searchValues?.result.length < 1
            ? "No Products Found"
            : `Found ${searchValues?.result.length} products`}
        </h6>
        <div className="row">
          <div className="d-flex flex-wrap gap-3">
            {searchValues.result?.map((product) => (
              <ProductCard key={product._id} p={product} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
