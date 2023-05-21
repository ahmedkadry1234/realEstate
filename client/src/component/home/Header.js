import React from "react";
import "./Header.css";
import Select from "react-select";
import { datacity, databed, min_price, max_price } from "../../Json/Data";
import { Link } from "react-router-dom";

const Header = () => {
  const hed = document.querySelectorAll(".buy-rent .btn");
  hed.forEach((el) => {
    el.addEventListener("click", () => {
      document.querySelector(".active")?.classList.remove("active");
      el.classList.add("active");
    });
  });

  return (
    <div className="Header">
      <form action="get" className="formheader">
        <div className="search">
          <input
            type="search"
            className="form-control"
            placeholder="City or Town or District"
            name="search"
          />
          <Select options={datacity} placeholder="type" name="type" />
          <Select isMulti options={databed} placeholder="Bed" name="bed" />
          <Select isMulti options={databed} placeholder="Bath " name="bath" />
          <Select
            options={min_price}
            placeholder="Min-price "
            name="min-price"
          />
          <Select
            options={max_price}
            placeholder="Max-price "
            name="max-price"
          />
          <Link to="/api/properties" className="submitbtn" type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Header;
