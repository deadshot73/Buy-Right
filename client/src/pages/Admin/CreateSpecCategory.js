import React from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";

const CreateSpecCategory = () => {
  return (
    <Layout title={"Specification Categories"}>
      <div className="row m-3 p-3">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1> Create Specification Category</h1>
        </div>
      </div>
    </Layout>
  );
};

export default CreateSpecCategory;
