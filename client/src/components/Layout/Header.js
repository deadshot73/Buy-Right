import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import BRLogo from "./BR_logo.png";
import BookmarkFill from "./bookmark-fill.png";
import ProfileButton from "./Profile-button.png";
import { useSaved } from "../../context/savedProducts";
import { Badge } from "antd";
import SearchInput from "../SearchInput";
import ThreeDotsIcon from "./three-dots-vertical.png";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [saved, setSaved] = useSaved();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };
  return (
    <>
      <div className="container my-3">
        <nav className="navbar navbar-expand-md bg-body-tertiary">
          <div className="navbar-brand">
            <Link to="/">
              <img src={BRLogo} alt="Buy Right" />
            </Link>
          </div>
          <SearchInput />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src={ThreeDotsIcon} alt="Menu" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      to="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={ProfileButton} alt="Your Profile" />
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user/profile"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item">
                <Badge count={saved?.length} showZero>
                  <NavLink
                    to={`/dashboard/${
                      auth?.user?.role === 1 ? "admin" : "user/saved-products"
                    }`}
                    className="nav-link saved-products bookmark"
                  >
                    <img src={BookmarkFill} alt="saved-products" />{" "}
                  </NavLink>
                </Badge>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
