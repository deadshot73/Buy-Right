import React from "react";
import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/AuthStyles.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();
  //Handle Submit for Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
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
    <Layout title="Register- Buy Right">
      <div className="container">
        <div className="form-container">
          <div>
            <form onSubmit={handleSubmit}>
              <h3>REGISTER FORM</h3>
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="form-control"
                  id="user_name"
                  placeholder="Enter Name"
                  required
                />
              </div>
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
              <div className="mb-3">
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  className="form-control"
                  id="user_phone"
                  placeholder="Enter Phone"
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
                  placeholder="What is your Favorite Sports"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                REGISTER
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
