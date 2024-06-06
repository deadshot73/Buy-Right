import React from "react";
import { Link } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <Link
            to="/dashboard/admin"
            className="list-group-item list-group-item-action"
          >
            Admin Dashboard
          </Link>
          <Link
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action"
          >
            Create Product
          </Link>
          <Link
            to="/dashboard/admin/create-spec-category"
            className="list-group-item list-group-item-action"
          >
            Create Specification Category
          </Link>
          <Link
            to="/dashboard/admin/create-spec"
            className="list-group-item list-group-item-action"
          >
            Create Specification
          </Link>
          <Link
            to="/dashboard/admin/products"
            className="list-group-item list-group-item-action"
          >
            Products
          </Link>
          <Link
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
