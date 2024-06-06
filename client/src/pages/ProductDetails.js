import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import ProductPageOverview from "../components/ProductPageOverview";
import ProductPageSpecs from "../components/ProductPageSpecs";
import ProductPageExtras from "../components/ProductPageExtras";

const ProductDetails = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  //get product
  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const { data } = await axios.get(
          `/api/v1/products/product/slug/${slug}`
        );
        setProduct(data.product);
      } catch (error) {
        console.log(error);
        console.log("Error while getting product");
      }
    };

    getSingleProduct();
  }, [slug]);
  return (
    <Layout>
      <ProductPageOverview p={product} />
      <ProductPageSpecs p={product} />
    </Layout>
  );
};

export default ProductDetails;
