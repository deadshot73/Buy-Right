import React from "react";
import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  //Handle Submit for Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res.data.success) {
        console.log(res.data.msg);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else console.log(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title="Register- Buy Right">
      <div className="container">
        <div className="form-container">
          <div>
            <form onSubmit={handleSubmit}>
              <h3>LOGIN FORM</h3>

              <div className="mb-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="form-control"
                  id="user_email"
                  placeholder="Enter Email"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="form-control"
                  id="user_password"
                  placeholder="Set Password"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary mb-3">
                LOGIN
              </button>
              <div className="mb-3">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    navigate("/forgot-password");
                  }}
                >
                  Forgot Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
