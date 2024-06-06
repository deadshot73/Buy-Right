import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import axios from "axios";

const Profile = () => {
  //context
  const [auth, setAuth] = useAuth();

  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  //useeffect to get user data inital
  useEffect(() => {
    const { name, email, phone } = auth?.user;
    setName(name);
    setPhone(phone);
    setEmail(email);
  }, [auth?.user]);

  //Handle Submit for Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("/api/v1/auth/profile", {
        name,
        email,
        password,
        phone,
      });
      if (data?.error) {
        console.log(data.error);
      } else setAuth({ ...auth, user: data?.updatedUser });
      let ls = localStorage.getItem("auth");
      ls = JSON.parse(ls);
      ls.user = data.updatedUser;
      localStorage.setItem("auth", JSON.stringify(ls));
      console.log("Profile Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"Profile"}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="form-container">
              <div>
                <form onSubmit={handleSubmit}>
                  <h3>PROFILE DETAILS</h3>
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
                      disabled
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
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    UPDATE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
