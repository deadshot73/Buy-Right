import React from "react";
import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/AuthStyles.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  //Handle Submit for Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res.data.success) {
        console.log(res.data.msg);

        navigate("/login");
      } else console.log(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"Forgot Password - Buy Right"}>
      <div className="container">
        <div className="form-container">
          <div>
            <form onSubmit={handleSubmit}>
              <h3>RESET PASSWORD</h3>

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
                  type="text"
                  value={answer}
                  onChange={(e) => {
                    setAnswer(e.target.value);
                  }}
                  className="form-control"
                  id="user_answer"
                  placeholder="Enter your Favorite Sport"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                  }}
                  className="form-control"
                  id="user_password"
                  placeholder="Set Password"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary mb-3">
                RESET
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
