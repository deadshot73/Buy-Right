import React from "react";
import { useSearch } from "../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SearchIcon from "./search.png";

const SearchInput = () => {
  const [searchValues, setSearchValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `/api/v1/products/search/${searchValues.keyword}`
      );
      setSearchValues({ ...searchValues, result: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="navbar-search">
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me-2 custom-search-input"
          type="search"
          placeholder="Search Device"
          aria-label="Search"
          value={searchValues.keyword}
          onChange={(e) =>
            setSearchValues({ ...searchValues, keyword: e.target.value })
          }
        />
        <button
          className="btn btn-outline-success custom-btn search-button"
          type="submit"
        >
          Submit
        </button>
        <button className="btn search-icon" type="submit">
          <img src={SearchIcon} alt="Search" />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
