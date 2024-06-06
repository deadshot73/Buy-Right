import axios from "axios";
import React, { useEffect, useState } from "react";
import SpecForm from "./Form/SpecForm";
import { Modal } from "antd";

const SpecDashboard = ({ endpoint, heading }) => {
  const [specs, setSpecs] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/api/v1/specs/${endpoint}`, { name });
      if (data.success) {
        console.log(`${name} is created`);
        setName(""); // Clear input field
        getAllSpecs(); // Fetch latest data
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
      console.log("Something went wrong in input form");
    }
  };

  //get all specs
  const getAllSpecs = async () => {
    try {
      const { data } = await axios.get(`/api/v1/specs/${endpoint}`);
      if (data?.success) {
        setSpecs(data?.spec);
      }
    } catch (error) {
      console.log("Something went wrong in getting specs");
      console.log(error);
    }
  };

  useEffect(() => {
    getAllSpecs();
  }, []);

  //update category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `/api/v1/specs/${endpoint}/${selected._id}`,
        {
          name: updatedName,
        }
      );
      if (data.success) {
        console.log(data.message);
        console.log(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllSpecs();
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log("Something went wrong");
      console.log(error);
    }
  };

  //delete category
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(`/api/v1/specs/${endpoint}/${id}`);
      if (data.success) {
        console.log(data.message);
        console.log("Spec is deleted");
        getAllSpecs();
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log("Something went wrong");
      console.log(error);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2>{heading}</h2>

        <div className="p-3 w-50">
          <SpecForm
            handleSubmit={handleSubmit}
            value={name}
            setValue={setName}
          />
        </div>
      </div>
      <div className="w-75">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Specification Value</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {specs?.map((s) => (
              <>
                <tr key={s._id}>
                  <td>{s.name}</td>
                  <td>
                    <button
                      className="btn btn-primary ms-2"
                      onClick={() => {
                        setVisible(true);
                        setUpdatedName(s.name);
                        setSelected(s);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger ms-2"
                      onClick={() => {
                        handleDelete(s._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
      <Modal onCancel={() => setVisible(false)} footer={null} open={visible}>
        <SpecForm
          value={updatedName}
          setValue={setUpdatedName}
          handleSubmit={handleUpdate}
        />
      </Modal>
    </div>
  );
};

export default SpecDashboard;
