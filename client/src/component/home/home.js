import React from "react";
import Header from "./Header";
import Navbar1 from "./Navbar1";
import Mainsection from "../sesction/Mainsection";
import Footer from "../footer/footer";
import "./Header.css";
import Select from "react-select";
import { datacity } from "../../Json/Data";
import { useRef } from "react";
const Home = () => {
  const proerty = useRef();
  const flex = useRef();
  

  return (
    <div className="home">
      <div className="DIVADD">
        <i
          className="fa-solid fa-circle-plus Addpropertis"
          onClick={() => {
            flex.current.style.display = "block";
          }}
          onMouseOut={() => {
            proerty.current.style.display = "none";
          }}
          onMouseEnter={() => {
            proerty.current.style.display = "block";
          }}
        ></i>
        <span className="ref" ref={proerty}>
          Add proerty
        </span>

        <div className="CardAdd" ref={flex}>
          <form action="/api/properties" method="post">
            <label htmlFor="Add proerty">Titel:</label>
            <input
              required
              type="text"
              id="Add proerty"
              name="title"
              placeholder="Add Titel for proerty"
              className="form-control"
            />
            <br />
            <div className="flex">
              <div className="">
                <label htmlFor="Add Type">Type:</label>
                <Select options={datacity} placeholder="type" name="type" />
              </div>
              <div className="">
                <label htmlFor="Your name">Your name:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="">
                <label htmlFor="Add Price">Price:</label>
                <input type="number" id="Add Price" className="form-control" />
              </div>
              <div className="">
                <label htmlFor="AddBedrooms">Bedrooms:</label>
                <input
                  type="number"
                  id="AddBedrooms"
                  className="form-control"
                />
              </div>
              <div className="">
                <label htmlFor="AddBathrooms">Bathrooms:</label>
                <input
                  type="number"
                  id="AddBathrooms"
                  className="form-control"
                />
              </div>
              <div className="">
                <label htmlFor="AddPropertySize">PropertySize:</label>
                <input
                  type="number"
                  id="AddPropertySize"
                  className="form-control"
                />
              </div>
            </div>
            <br />
            <label htmlFor="Addnumber">number:</label>
            <input type="number" id="Addnumber" className="form-control" />
            <br />

            <label htmlFor="Addlocation">location:</label>
            <input type="text" id="Addlocation" className="form-control" />
            <br />
            <label htmlFor="moreDescription">MoreDescription:</label>
            <input type="text" id="moreDescription" className="form-control" />
            <br />
            <label htmlFor="Addphoto">photo:</label>
            <input type="file" />

            <div className="buttons">
              <button
                className="btn btn-danger"
                onClick={() => {
                  flex.current.style.display = "none";
                }}
              >
                close
              </button>
              <button className="btn btn-success" type="submit">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <Navbar1 />
      <Header />
      <Mainsection />
      <Footer />
    </div>
  );
};

export default Home;
