import React from "react";

const SpecForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3" style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            className="form-control m-3"
            placeholder="Enter new spec"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default SpecForm;
