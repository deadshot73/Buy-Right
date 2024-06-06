import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";

const UserMenu = () => {
  const [auth] = useAuth();
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <Link
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </Link>
          <Link
            to="/dashboard/user/saved-products"
            className="list-group-item list-group-item-action"
          >
            Saved Products
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserMenu;
