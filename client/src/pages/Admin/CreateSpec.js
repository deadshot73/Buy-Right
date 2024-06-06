import React from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import SpecDashboard from "../../components/SpecDashboard";

const CreateSpec = () => {
  return (
    <Layout title={"Create Specifications"}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1> Create Specification</h1>
            <SpecDashboard endpoint="brands" heading="Brands" />
            <SpecDashboard
              endpoint="refrigerator-type"
              heading="Refrigerator Type"
            />
            <SpecDashboard endpoint="panel-display" heading="Panel Display" />
            <SpecDashboard endpoint="freezer-mount" heading="Freezer Mount" />
            <SpecDashboard endpoint="handle-type" heading="Handle Type" />
            <SpecDashboard endpoint="body-material" heading="Body Material" />
            <SpecDashboard endpoint="shelf-material" heading="Shelf Material" />
            <SpecDashboard endpoint="gasket-type" heading="Gasket Type" />
            <SpecDashboard endpoint="ice-maker-type" heading="Ice Maker Type" />
            <SpecDashboard endpoint="compressors" heading="Compressors" />
            <SpecDashboard endpoint="refrigerants" heading="Refrigerants" />
            <SpecDashboard
              endpoint="cooling-technology"
              heading="Cooling Technology"
            />
            <SpecDashboard
              endpoint="air-circulation"
              heading="Air Circulation"
            />
            <SpecDashboard
              endpoint="convertible-cooling-mode"
              heading="Convertible Cooling Mode"
            />
            <SpecDashboard endpoint="cooling-mode" heading="Cooling Mode" />

            <SpecDashboard endpoint="fast-ice-mode" heading="Fast Ice Mode" />
            <SpecDashboard
              endpoint="fast-chilling-mode"
              heading="Fast Chilling Mode"
            />
            <SpecDashboard
              endpoint="all-round-cooling"
              heading="All Round Cooling"
            />

            <SpecDashboard endpoint="warranty-type" heading="Warranty Type" />
            <SpecDashboard
              endpoint="bacterial-growth-prevention"
              heading="Bacterial Growth Prevention"
            />
            <SpecDashboard
              endpoint="food-vitals-technology"
              heading="Food Vitals Technology"
            />

            <SpecDashboard
              endpoint="indicator-light"
              heading="Indicator Light"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateSpec;
